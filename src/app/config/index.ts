import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) }); // this line has join to path , 1 its own path and env path.
// thoes lines are came from dotenv document

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bycypt_salt_rounds: process.env.BCRYP_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASS,
};
