const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_complete", "root", "TndTndTnd@18121278", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
