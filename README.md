![picAI](https://github.com/millie178/dall-e/assets/81370382/5ed703ab-d022-476b-8465-88d9528e83a7)
## Description
  PicAI allows users to generate AI images freely with any prompt of their own choice by calling OpenAI's API.  
  Users can share their generated images with others.  
  Users can search AI images uploaded by others and download preferred ones.   
## How to use
  ```git clone``` the repository  
  ```npm run dev``` - to run the application in the client folder  
  ```npm start``` - to run the application in the server folder  
## Technologies used
  Cloudinary - store user uploaded AI images  
  [OpenAi API](https://platform.openai.com/docs/api-reference/images/create) - generate AI images   
  MongoDB - store user and corresponding image urls in JSON strings. 
  ```
  {
    "name":"Jane Doe",
    "prompt":"A photo of a sunflower enjoying sunshine swinging left and right",
    "photo":"http://res.cloudinary.com/xyz.png"
  }
  ```
  Express.js - Node.js framework  
  React.js - Javascript library  
  Node.js - backend JavaScript runtime environment  
