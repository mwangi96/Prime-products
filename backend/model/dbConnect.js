require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false,
  }
);

// test db connection 
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Database connection successful...");
  })
  .catch((err) => {
    console.log("❌ Error connecting to database: " + err);
  });

  // Export as a db object
  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  
  db.sequelize.sync({ force: false }).then(() => {
    console.log('🔁 DB models re-synced');
  });
  
  module.exports = db;
