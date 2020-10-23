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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getUsers_1 = require("./services/getUsers");
const typeorm_1 = require("typeorm");
const Users_1 = require("./entity/Users");
const body_parser_1 = __importDefault(require("body-parser"));
const ormconfig_1 = require("./ormconfig");
const deviceuser_1 = require("./entity/deviceuser");
const device_1 = require("./entity/device");
const app = express_1.default();
app.use(body_parser_1.default.json());
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield getUsers_1.getUsers();
    return res.send("TS working!");
}));
app.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let u = new Users_1.Users();
    u.firstname = 'Cool';
    u.lastname = 'Guy';
    let conn = typeorm_1.createConnection();
    conn.then((connection) => __awaiter(void 0, void 0, void 0, function* () {
        yield connection.manager.save(u);
        yield typeorm_1.getConnection().close();
        res.send('ok');
    }));
}));
app.post('/user/:name/:id', (req, res) => {
    console.log(req.params.name);
    console.log(req.params.id);
    let d1 = new device_1.device();
    d1.deviceid = 1102;
    d1.id = 2;
    d1.name = 'Apple';
    const _id = parseInt(req.params.id);
    const _name = req.params.name;
    let conn = typeorm_1.createConnection(ormconfig_1.ormconfig);
    let user = new deviceuser_1.deviceuser();
    user.name = _name;
    user.deviceid = 1102;
    conn.then((connection) => __awaiter(void 0, void 0, void 0, function* () {
        let c = connection.manager.getRepository(device_1.device);
        let result = yield c.findOne({
            where: {
                id: _id
            }
        });
        console.log('Result!');
        console.log(result);
        console.log(typeof result);
        if (result !== null) {
            let c1 = connection.manager.getRepository(deviceuser_1.deviceuser);
            yield c1.save(user);
        }
        console.log('__ Insert done __');
        yield typeorm_1.getConnection().close();
        return res.send('ok');
    }));
    return res.send('not ok');
});
app.listen(8081, () => {
    console.log('Port Listening!');
});
