import mongoose from 'mongoose';

export type TypeSchemaUser = {
  name: string;
  email: string;
  avatar?: string;
  password: string;
  id: string;
  dateCreated: string | Date;
};

const SchemaUser = new mongoose.Schema<TypeSchemaUser>({
  name: {
    type: String,
  },
  id: {
    type: String,
  },
  email: {
    type: String,
  },
  avatar: {
    type: String,
  },
  password: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

export default SchemaUser;
