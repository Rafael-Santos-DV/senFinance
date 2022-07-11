import mongoose from 'mongoose';

type TypeSchema = mongoose.Schema<any>;

async function connectToDatabase(model: string, Schema?: TypeSchema) {
  try {
    const connection = await mongoose.createConnection(
      process.env.URL_MONGODB ?? 'mongodb://localhost:27017/Users',
      {
        dbName: 'Finance',
      }
    );

    const database = connection.model(model, Schema);

    console.log('conectado com sucesso!');
    return database;
  } catch (error) {
    throw `${error}`;
  }
}

export default connectToDatabase;
