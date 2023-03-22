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

  Appointment.belongsTo(Patient);
  Appointment.PatientId = Appointment.belongsTo(Patient);

  return Appointment;
};
