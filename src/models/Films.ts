import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface FilmInstance extends Model {
    id: number;
    title: string;
    watched: boolean;
    stars: number;
}

export const Films = sequelize.define<FilmInstance>('Films', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING,
        unique: true
    },
    watched: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    stars: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'Films',
    timestamps: false
});