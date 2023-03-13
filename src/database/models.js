const {DataTypes} = require('sequelize');
const {sequelize} = require("./conncetion");

const userModel = sequelize.define('user',{
idUser:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true, allowNull:false},
name: {type:DataTypes.STRING},
englishLevel:{type:DataTypes.STRING},
knowledge: {type:DataTypes.STRING},
idRole:{type:DataTypes.INTEGER},
email: {type:DataTypes.STRING},
password: {type:DataTypes.STRING}
});

//sequelize.sync()
module.exports = userModel
