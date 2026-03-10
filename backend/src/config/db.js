import mongoose from 'mongoose';


export const connectDB = async () =>{
  console.log(process.env.UPSTASH_REDIS_REST_URL);
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connected successfully");

  }
    catch (error) {
      console.error(`Error MONGODB CONNECTION: ${error.message}`);
      process.exit(1);
    }
}