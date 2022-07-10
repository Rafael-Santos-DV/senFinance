import mongoose from 'mongoose';

const SchemaTransaction = new mongoose.Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  type: {
    type: String,
  },
  adminId: {
    type: String,
  },
});

export default SchemaTransaction;
