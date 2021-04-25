import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export class Item{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column("decimal", { precision: 8, scale: 3 })
    price:number;
}