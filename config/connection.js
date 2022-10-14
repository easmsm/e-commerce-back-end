const Sequelize = require('sequelize');

require('dotenv').config();


const sequelize = new Sequelize('just_tech_news_db', 'root', '76Te*omcYh8qXXSO9ro45GjxK3ZaudQ1D!', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

module.exports = sequelize;
