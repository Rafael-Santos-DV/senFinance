import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../lib/database/mongodb';
import User from '../../lib/schemas/User';
import { v4 as uuid } from 'uuid';

import jwt from 'jsonwebtoken';

import { AES as crypto } from 'crypto-js';

type TypeDatabase = mongoose.Model<any, any, any, any, any>;

let CacheDatabase: null | unknown = null;

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.query;

  if (!token) {
    return res.status(401).json({ token: 'null' });
  }

  if (!CacheDatabase) {
    CacheDatabase = await connectToDatabase('Users', User);
  }

  const database = CacheDatabase as TypeDatabase;

  const { name, email, avatar, password } = req.body;

  if (req.method === 'PUT') {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(400).json({ token: 'is empty' });
    }

    const jwtString = authorization.split(' ')[1];

    if (!jwtString) {
      return res.status(401).json({ message: 'badly formatted token' });
    }

    let clientId = '';

    try {
      const JWT = jwt.verify(
        jwtString,
        String(process.env.HASH_JSON_WEBTOKEN)
      ) as Record<string, string>;

      clientId = JWT.clientId;
    } catch (err) {
      return res.status(401).json({ message: 'Token is invalid' });
    }

    const userExist = await database.findOne({
      id: clientId,
    });

    if (!userExist) {
      return res.status(401).json({ message: 'User not found!' });
    }

    const passwordEncrypt = crypto
      .encrypt(password, String(process.env.HASH_PASSWORD))
      .toString();

    await database.updateOne(
      { id: clientId },
      { name, avatar, password: passwordEncrypt }
    );

    return res.status(200).json({ sucess: 'Update with sucess' });
  }

  const findEmail = await database.findOne({ email });

  if (findEmail) {
    return res
      .status(400)
      .json({ message: 'Already have a user with this email' });
  }

  const passwordEncrypt = crypto
    .encrypt(password, String(process.env.HASH_PASSWORD))
    .toString();

  const data = {
    name,
    email,
    avatar,
    id: uuid(),
  };

  const JWT = jwt.sign(
    { clientId: data.id },
    String(process.env.HASH_JSON_WEBTOKEN),
    {
      expiresIn: '1h',
    }
  );

  await database.create({
    ...data,
    password: passwordEncrypt,
  });

  return res.status(200).json({ ...data, token: JWT });
}
