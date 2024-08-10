import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig.js'; // Ajuste o caminho conforme necessário

const User = sequelize.define('tab_studant', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    ra: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    // Outras colunas, se necessário
});

export default User;
