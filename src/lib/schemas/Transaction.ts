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
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  adminId: {
    type: String,
  },
  lastUpdate: {
    type: Date,
    default: Date.now,
  },
});

export default SchemaTransaction;
