import {Column,Entity,PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    firstname: string;

    @Column({nullable: true})
    lastname: string;
}