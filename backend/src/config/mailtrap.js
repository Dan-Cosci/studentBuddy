import { MailtrapClient } from 'mailtrap';
import { config } from '../config/config.js';

export const client = new MailtrapClient({
  token: config.mailtrap.key,
});

export const from = {
  name:'StudentBuddy', 
  email:`no-reply@${config.mailtrap.domain}`
}