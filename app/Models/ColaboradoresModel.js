import { DataTypes } from "sequelize";
import database from "../../config/database.js";

const Colaboradores = database.define("colaboradores", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: "colaboradores",
  timestamps: false
});

export default Colaboradores;