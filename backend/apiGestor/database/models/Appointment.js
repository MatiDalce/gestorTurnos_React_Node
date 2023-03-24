const Patient = require("./Patient")

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
    },
    note: {
      type: DataTypes.STRING,
      allowNull: false
      }
  });

  
Appointment.associate = (models) => {
  Appointment.belongsTo(models.Patient, { as: 'patient', foreignKey: 'patientId' });
};
 

 

  return Appointment;
};
