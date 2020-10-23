"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const ormconfig_1 = require("../ormconfig");
const typeorm_1 = require("typeorm");
const Users_1 = require("../entity/Users");
let getUsers = function () {
    return __awaiter(this, void 0, void 0, function* () {
        // const connectionAPI = getConnectionManager();
        // console.log(connectionAPI)
        // if(connectionAPI.connections.length < 1) {
        //     console.log('New connection!');
        // }
        const conn = yield typeorm_1.createConnection(ormconfig_1.ormconfig);
        console.log('Connection OK');
        const userRepository = conn.getRepository(Users_1.Users);
        let getUsers = yield userRepository.findOne(1);
        if (getUsers !== null) {
            console.log(getUsers);
        }
        else {
            console.log('No users!');
        }
    });
};
exports.getUsers = getUsers;
