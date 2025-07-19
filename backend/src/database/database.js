import Sequelize from 'sequelize';
import { DATABASE_NAME, DATABASE_PASSWORD, HOST, DIALECT, DATABASE_ACCOUNT } from '../config/config.js';

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_ACCOUNT, DATABASE_PASSWORD, {
    host: HOST,
    dialect: DIALECT,
});

export default sequelize;
