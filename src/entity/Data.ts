import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm'

@Entity()
export class Data{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    date:number;

    @Column()
    customerId:number

    @Column()
    itemId:number

    @Column("decimal", { precision: 65, scale: 3 })
    rate:number

    @Column("decimal", { precision: 65, scale: 3 })
    amount:number

    @Column()
    type:number //0=Purchase, 1=Discount, 2=Payment
}