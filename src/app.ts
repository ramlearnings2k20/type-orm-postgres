import express from 'express';
import { getUsers } from './services/getUsers'
import { createConnection, getConnection } from 'typeorm';
import { Users } from './entity/Users';
import bodyparser from 'body-parser';
import { ormconfig } from './ormconfig'
import { deviceuser } from './entity/deviceuser';
import { device } from './entity/device';
const app = express();

app.use(bodyparser.json())

app.get('/', async (req, res) => {
    await getUsers();
    return res.send("TS working!");
});

app.post('/create', async (req, res) => {
    let u = new Users();
    u.firstname = 'Cool';
    u.lastname = 'Guy';
    let conn = createConnection();
    conn.then(async connection => {
        await connection.manager.save(u);
        await getConnection().close();
        res.send('ok')
    });
});

app.post('/user/:name/:id', (req, res) => {
    console.log(req.params.name);
    console.log(req.params.id);
    let d1= new device();
    d1.deviceid = 1102;
    d1.id =2;
    d1.name = 'Apple';
    const _id = parseInt(req.params.id);
    const _name = req.params.name;
    let conn = createConnection(ormconfig);
    let user = new deviceuser();
    user.name = _name;
    user.deviceid = 1102;
    conn.then(async connection => {
        let c = connection.manager.getRepository(device);
        let result = await c.findOne({
            where: {
                id: _id
            }
        });
        console.log('Result!');
        console.log(result);
        console.log(typeof result);
        if(result !== null ) {
            let c1 = connection.manager.getRepository(deviceuser)
            await c1.save(user);
        }
        console.log('__ Insert done __');
        await getConnection().close();
        return res.send('ok')
    });
    return res.send('not ok');
});

app.listen(8081, () => {
    console.log('Port Listening!');
});