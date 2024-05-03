import Sequelize from 'sequelize';
import { dbConfig } from "./dbconfig.js";

// const connection = mysql.createConnection(dbConfig);

const connection = new Sequelize({
    host: dbConfig.HOST,
    dialect: 'mysql',
    database: dbConfig.DATABASE,
    username: dbConfig.USERNAME,
    password: dbConfig.PASSWORD
});

// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         return;
//     }
//     console.log('Connected to MySQL database');
// });
export default connection;

