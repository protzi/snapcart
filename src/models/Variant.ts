import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Variant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("decimal")
    additionalPrice: number;

    @ManyToOne(() => Product, product => product.variants)
    product: Product;
}
