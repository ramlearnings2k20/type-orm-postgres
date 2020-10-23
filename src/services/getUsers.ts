import { ormconfig } from '../ormconfig';
import { createConnection, EntityManager, getConnection, getConnectionManager } from 'typeorm';
import { Users } from '../entity/Users';

let getUsers = async function () {

    // const connectionAPI = getConnectionManager();
    // console.log(connectionAPI)
    // if(connectionAPI.connections.length < 1) {
    //     console.log('New connection!');
    // }
    const conn = await createConnection(ormconfig);
    console.log('Connection OK')
    const userRepository = conn.getRepository(Users);
    let getUsers = await userRepository.findOne(1);
    if(getUsers !== null) {
        console.log(getUsers);
    } else {
        console.log('No users!');
    }

};

export { getUsers }