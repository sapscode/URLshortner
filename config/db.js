const Sequelize = require("sequelize");

const sequelize = new Sequelize("test-db", "user", "password", {
	dialect: "sqlite",
	host: "./config/db.sqlite"
});

sequelize.sync();

async () => {
	try {
		await sequelize.authenticate();
		console.log("connected to DB");
	} catch (e) {
		console.log("Connection error to DB");
	}
};

module.exports = sequelize;
