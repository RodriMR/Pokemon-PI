const { DataTypes } = require("sequelize");
const Type = require("./Type");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    idApi: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hp: {
      type: DataTypes.INTEGER,
    },
    str: {
      type: DataTypes.INTEGER,
    },
    def: {
      type: DataTypes.INTEGER,
    },
    spd: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.DECIMAL,
    },
    weight: {
      type: DataTypes.DECIMAL,
    },
    img: {
      type: DataTypes.STRING,
    },
    slot1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slot2: {
      type: DataTypes.STRING,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isCaptured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
