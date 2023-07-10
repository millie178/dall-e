import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";


//to pull env variables from .env files
dotenv.config();

// initialize express application
const app = express();
app.use(cors());


// add middleware
app.use(express.json({ limit:'50mb' }));

// app.use(path, callback)
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes)


app.get('/', async (req, res) => {
  res.send('Hello from DALL-E!')
});

const startServer = async () => {
  try {
    // Question what is process.env....
    connectDB(process.env.MONGODB_URL);

    app.listen(8080, () => console.log("Server has started on port http://localhost:8080"))
  } catch (error) {
    console.log(error);
  }
};

startServer();
