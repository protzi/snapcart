import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Variant } from "./Variant";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column("decimal")
    price: number;

    @OneToMany(() => Variant, variant => variant.product)
    variants: Variant[];
}
