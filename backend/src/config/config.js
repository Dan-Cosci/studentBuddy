import dotenv from 'dotenv';

console.log(process.env.NODE_ENV)
// config({path:`./.env.${process.env.NODE_ENV}.local`});
dotenv.config({path:'./.env.development.local'});


export const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  frontendUrl: process.env.FRONTEND_SERVER_URL,

  jwt:{
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },

  mongoose:{
    options: process.env.MONGODB_OPTIONS,
    host: process.env.MONGODB_HOST,
    username: process.env.MONGODB_USERNAME,
    password: process.env.MONGODB_PASSWORD,
  },

  mailtrap:{
    domain: process.env.MAILTRAP_DOMAIN,
    sandboxId: process.env.MAILTRAP_SANDBOX_ID,
    key: process.env.MAILTRAP_API_KEY
  },

  arcjet:{
    env: process.env.ARCJET_ENV,
    key: process.env.ARCJET_KEY,
  },

  gemini:{
    key: process.env.GEMINI_KEY,
    model: process.env.GEMINI_MODEL,
    systemInstruction: process.env.GEMINI_INSTRUCTION,
  }

};

export const {
  PORT, SERVER_URL,
  MONGODB_URI, 
  JWT_SECRET, JWT_EXPIRES_IN,
  GEMINI_KEY,
  ARCJET_ENV,ARCJET_KEY
} = process.env;