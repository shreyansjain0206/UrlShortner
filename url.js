import express from 'express';
import { nanoid } from 'nanoid'; // A library that generates unique IDs (used for short URL codes).


// import Url from '../models/Url.js';
import Url from '../model/UrlS.js';

import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();//Creates a new router instance in Express so you can modularly define routes
const BASE_URL = process.env.BASE_URL;

router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) return res.status(400).json({ error: 'URL is required' });

  const shortId = nanoid(6); //Generates a random 6-character ID using nanoid. This becomes your short URL suffix, e.g., abc123.



  try {
    const newUrl = new Url({ originalUrl, shortId });//Creates a new document in the database with the original URL and the generated short ID.
    await newUrl.save();
    res.json({ shortUrl: `${BASE_URL}/${shortId}` });//send new url 
  } catch (err) {
    res.status(500).json({ error: 'Server error' });//DB error
  }
});

router.get('/:shortId', async (req, res) => {  //to recieve exact url from short url. it majorly needs shortid generated using nanoid
  const { shortId } = req.params;

  try {
    const url = await Url.findOne({ shortId });//finding original url from mongodb using shortid

    if (url) return res.redirect(url.originalUrl);//redirects t ooriginal url if it found
    res.status(404).json({ error: 'Short URL not found' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
