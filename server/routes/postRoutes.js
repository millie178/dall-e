import express from "express";
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';

import Post from '../mongodb/models/post.js'

dotenv.config()

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET,
})

const router = express.Router();

router.route('/').get(async (req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*")
    const posts = await Post.find({});


    res.status(200).json({ success: true, data: posts})
  } catch (error) {
    res.status(500).json({ success: false, message: error})
  }
})

router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);
    
    console.log('here1');

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    console.log('here2');

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
  }
});

export default router;