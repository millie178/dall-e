import mongoose from 'mongoose';

const connectDB = (url) => {
  // Question what does strictQuery is true mean?
  mongoose.set('strictQuery', true)

  mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))
}

export default connectDB;