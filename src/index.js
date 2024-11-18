import "dotenv/config";

import sequelize from "./db/sequelize.js";

import startServer from "./server/index.js";

try {
    await sequelize.authenticate();
    console.log("Success connect to database");
    startServer();
}
catch(error) {
    console.log(error);
}



