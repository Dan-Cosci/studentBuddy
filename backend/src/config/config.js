import { config } from 'dotenv';

console.log(process.env.NODE_ENV)
// config({path:`./.env.${process.env.NODE_ENV}.local`});
config({path:'./.env.development.local'});


export const {
  PORT, SERVER_URL,
  MONGODB_URI, 
  JWT_SECRET, JWT_EXPIRES_IN,
  GEMINI_KEY,
  ARCJET_ENV,ARCJET_KEY
} = process.env;