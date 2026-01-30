import { mailtrapClient } from 'mailtrap';
import { config } from '../config/config.js';

export const client = mailtrapClient({
  token: config.mailtrap.key,
  sandbox:config.env === 'production' ? false : true,
  sandboxId: config.mailtrap.sandboxId
});

export const from = {
  name:'StudentBuddy', 
  email:`no-reply@${config.mailtrap.domain}`
}