

import {Column,Entity,PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import { deviceuser } from './deviceuser';

@Entity()
export class device {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    deviceid: number;
}