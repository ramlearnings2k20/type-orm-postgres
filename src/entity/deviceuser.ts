

import {Column,Entity,PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from 'typeorm';
import { device } from './device';

@Entity()
export class deviceuser {
    @PrimaryGeneratedColumn()
    userid: number;

    @Column()
    name: string;

    @Column()
    deviceid: number;

}