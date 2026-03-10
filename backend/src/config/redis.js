import { Redis } from '@upstash/redis'



export const redisConnect = async () => {
  try {
    const client = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
    await client.ping();
    console.log("Connected to Redis successfully!");
   
  } catch (error) {
    console.error("Error connecting to Redis:", error);
  }
};
