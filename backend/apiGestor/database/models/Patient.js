const Appointment = require("./Appointment");

module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maritalStatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    familyMembers: {
      type: DataTypes.STRING,
      allowNull: true
    },
    parents: {
      type: DataTypes.STRING,
      allowNull: true
    },
    children: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siblings: {
      type: DataTypes.STRING,
      allowNull: true
    },
    personalPhoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contactPhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    academicLevel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bloodType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    takesMedication: {
      type: DataTypes.STRING,
      allowNull: true
    },
    medication: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hasAllergies: {
      type: DataTypes.STRING,
      allowNull: true
    },
    allergies: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hasChronicDisease: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    chronicDisease: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  });

  Patient.associate = (models) => {
    Patient.hasMany(models.Appointment, {
      foreignKey: 'patientId',
      as: 'patientAppointments'
    })
  }

  return Patient;
};