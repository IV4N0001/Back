import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    marca: string

    @Column()
    cantidad: number
}