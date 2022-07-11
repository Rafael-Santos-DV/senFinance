import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../lib/database/mongodb';
import User from '../../lib/schemas/User';

import jwt from 'jsonwebtoken';

import cryptoJs, { AES as crypto } from 'crypto-js';

type TypeDatabase = mongoose.Model<any, any, any, any, any>;

let CacheDatabase: null | unknown = null;

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query;

  if (!token) {
    return res.status(401).json({ token: 'null' });
  }

  if (!CacheDatabase) {
    CacheDatabase = await connectToDatabase('Users', User);
  }

  const database = CacheDatabase as TypeDatabase;

  const { email, password: passwordClient } = req.body;

  const user = await database.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'E-mail or password is ivalid' });
  }

  const jsonJWT = jwt.sign(
    { clientId: user.id, email },
    String(process.env.HASH_JSON_WEBTOKEN),
    {
      expiresIn: '1h',
    }
  );

  const password = crypto
    .decrypt(user.password, String(process.env.HASH_PASSWORD))
    .toString(cryptoJs.enc.Utf8);

  if (password === passwordClient) {
    return res.status(201).json({ ...user._doc, token: jsonJWT });
  }

  return res.status(401).json({ message: 'E-mail or password is ivalid' });
}
