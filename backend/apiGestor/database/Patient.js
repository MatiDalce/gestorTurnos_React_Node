
    module.exports = (sequelize, DataTypes) =>{
    const Patient = sequelize.define('patient', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        name: {
        type: DataTypes.STRING,
        allowNull: false
        },
        lastname: {
        type: DataTypes.STRING,
        allowNull: false
        },
        birthday: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
        dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
        },
        email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        },
        socialService: {
        type: DataTypes.STRING,
        allowNull: false
        }
    })
    Patient.hasMany(Appointment)

    return Patient

    };