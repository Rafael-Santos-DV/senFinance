import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../lib/database/mongodb';
import SchemaTransaction from '../../lib/schemas/Transaction';

import jwt from 'jsonwebtoken';

type TypeDatabase = mongoose.Model<any, any, any, any, any>;

let CacheDatabase: null | unknown = null;

export default async function transaction(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.query;
  const { authorization } = req.headers;

  if (!token) {
    return res.status(401).json({ token: 'null' });
  }

  if (!authorization) {
    return res.status(401).json({ message: 'token is empty' });
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

  if (!CacheDatabase) {
    CacheDatabase = await connectToDatabase('Transations', SchemaTransaction);
  }

  const database = CacheDatabase as TypeDatabase;

  if (req.method === 'GET') {
    // const { all } = req.query;

    const data = await database.find({ adminId: clientId });

    return res.status(200).json(data);
  }

  const { title, price, category, type, name } = JSON.parse(req.body);

  const { id } = req.query;

  if (req.method === 'DELETE') {
    await database.deleteOne({ adminId: id });

    return res.status(200).json({});
  }

  if (req.method === 'PUT') {
    const response = await database.updateOne(
      {
        adminId: id,
      },
      {
        title,
        price,
        category,
        type,
        name,
      }
    );

    return res.status(200).json(response);
  }

  if (req.method === 'POST') {
    const data = await database.create({
      title,
      name,
      price,
      category,
      type,
      adminId: clientId,
    });

    return res.status(200).json(data);
  }
}
