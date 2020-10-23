import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Users } from './entity/Users';
import { device } from './entity/device';
import { deviceuser } from './entity/deviceuser';

const ormconfig: PostgresConnectionOptions =  {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "lxgiwylram",
    database: "postgres",
    synchronize: false,
    entities: [
      Users,
      device,
      deviceuser
    ]
 }

export {ormconfig}