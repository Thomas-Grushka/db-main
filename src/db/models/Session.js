import { DataTypes } from "sequelize";

import sequelize from "../sequelize.js";

const Session = sequelize.define(
    "session",
    {
        login: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accessToken: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        refreshToken: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accessTokenValidUntil: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        refreshTokenValidUntil: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM("admin"),
            allowNull: true,
        }
    }
);

// Session.sync({force: true});

export default Session;