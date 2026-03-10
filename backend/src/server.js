import express from 'express';
import dotenv from 'dotenv';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './midlleware/rateLimiter.js';
dotenv.config();

const PORT = process.env.PORT || 5005;
const app = express();


app.use(express.json()); // This middleware will parse incoming JSON requests and make the data available in req.body

// Custom middleware to log a message for every incoming request
// app.use((req, res, next) => { 
  //   console.log("Hello from the middleware!"); 
  //   next();
  // });
  
  app.use(rateLimiter);
  
  app.use("/api/notes", notesRoutes);
  
  
  
connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
});