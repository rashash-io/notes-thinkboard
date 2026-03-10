import { Redis } from '@upstash/redis'
import {Ratelimit} from '@upstash/ratelimit'

import dotenv from 'dotenv';
dotenv.config();

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, '60 s'), 
});

// export const redisConnect = async () => {
//   try {
//     const client = new Redis({
//       url: process.env.UPSTASH_REDIS_REST_URL,
//       token: process.env.UPSTASH_REDIS_REST_TOKEN,
//     });
//     await client.ping();
//     console.log("Connected to Redis successfully!");
   
//   } catch (error) {
//     console.error("Error connecting to Redis:", error);
//   }
// };


export default ratelimit;