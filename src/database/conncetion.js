const Sequelize = require('sequelize');

const sequelize = new Sequelize('challenge_db','root','0601x-2Ark',{
    host: 'localhost',
    dialect: 'mysql'
});

const connectToDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("Successfully connected to db");
    }catch (error) {
        console.log(error);
    }
} 


module.exports = {sequelize, connectToDb}