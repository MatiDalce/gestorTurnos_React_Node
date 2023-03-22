const Patient = require("../models/Patient")

module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hour: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

 

  return Appointment;
};
