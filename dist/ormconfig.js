"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormconfig = void 0;
const Users_1 = require("./entity/Users");
const device_1 = require("./entity/device");
const deviceuser_1 = require("./entity/deviceuser");
const ormconfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "lxgiwylram",
    database: "postgres",
    synchronize: false,
    entities: [
        Users_1.Users,
        device_1.device,
        deviceuser_1.deviceuser
    ]
};
exports.ormconfig = ormconfig;
