import { config } from 'dotenv';

console.log(process.env.NODE_ENV)
// config({path:`./.env.${process.env.NODE_ENV}.local`});
config({path:'./.env.development.local'});


export const {
  PORT, SERVER_URL,
  DATABASE_PASSWORD, DATABASE_NAME,
  HOST, DIALECT, DATABASE_ACCOUNT
} = process.env;