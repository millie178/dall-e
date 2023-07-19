![picAI](https://github.com/millie178/dall-e/assets/81370382/5ed703ab-d022-476b-8465-88d9528e83a7)
## Description
  PicAI allows users to  
  *generate AI images freely with any prompt of their own choice by calling OpenAI's API.  
  *share their generated images with others.  
  *search AI images uploaded by others and download preferred ones.   
## How to use
  ```git clone``` the repository  
  ```npm run dev``` - to run the application in the client folder  
  ```npm start``` - to run the application in the server folder  
## Technologies
  [Cloudinary](https://cloudinary.com/) - store user-uploaded AI images  
  [OpenAi API v1](https://platform.openai.com/docs/api-reference/images/create) - generate AI images   
  [MongoDB](https://www.mongodb.com/atlas/database) - store user and corresponding image URLs in JSON strings. 
  ```
  {
    "name":"Jane Doe",
    "prompt":"A photo of a sunflower enjoying sunshine swinging left and right",
    "photo":"http://res.cloudinary.com/xyz.png"
  }
  ```
  Tailwindcss^3.3.2  
  React^18.2.0  
  Vite^4.3.9  
  Node^18.15.0  
## Sources
  PicAI is inspired by "Midjourney & DALL-E Clone" by [Javascript Mastery](https://www.youtube.com/watch?v=EyIvuigqDoA&t=6063s) 
