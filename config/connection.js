// const Sequelize = require('sequelize');

const { Sequelize } = require("sequelize/types");

// require('dotenv').config();


// // const sequelize = new Sequelize('just_tech_news_db', 'root', '76Te*omcYh8qXXSO9ro45GjxK3ZaudQ1D!', {
// //   host: 'localhost',
// //   dialect: 'mysql',
// //   port: 3306
// // });

//  const sequelize = process.env.JAWSDB_URL
//    ? new Sequelize(process.env.JAWSDB_URL)
//    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//        host: 'localhost',
//        dialect: 'mysql',
//        dialectOptions: {
//          decimalNumbers: true,
//        },
//      });

let sequelize;

if (process.env.JAWSDB_URL) {

  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;
