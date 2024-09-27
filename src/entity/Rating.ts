import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import User from './User';
import Shop from './Shop';
import Product from './Product';

@Entity()
export default class Rating {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        rating: number;

    @Column({ nullable: true })
        comment: string;

    // Relationship with User who might have commented
    @ManyToOne(() => User, { nullable: true })
        commenterUser: User;

    // Relationship with Shop who might have commented
    @ManyToOne(() => Shop, { nullable: true })
        commenterShop: Shop;

    // Relationship with the product that is being rated
    @ManyToOne(() => Product, { nullable: true })
        product: Product;

    // Optional relationships to the shop or product being rated
    @ManyToOne(() => Shop, { nullable: true })
        shop: Shop;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
        createdAt: Date;
}