import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  originalUrl: String,
  shortId: String,
});

const Url = mongoose.model('url', urlSchema);

export default Url;
