import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(`../secrets/.env`) });
export const dbConfig ={
    host:process.env.HOST,
    dialect:'mysql',
    username:process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}
