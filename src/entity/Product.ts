import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, RelationId, JoinColumn } from 'typeorm';
import { components } from '../types/openapi';
import User from './User';
import Shop from './Shop';

@Entity()
export default class Product {
    @PrimaryGeneratedColumn('uuid')
        id: string;
        
    @Column({ nullable: false })
        name: string;

    @Column({ type: 'json', nullable: false })
        images: string[];
        
    @Column({ nullable: false }) 
        sku: string;

    @Column({ type: 'string', length: 2000 })
        description: string;

    @Column({ nullable: false, default: 0 })
        rating: number;
    
    @Column({ nullable: false, type: 'integer' })
        reviews: number;
        
    @Column({ nullable: false, type: 'json' })
        price: components["schemas"]["ProductPrice"];

    @Column({ nullable: false, type: 'json' })
        stock: components["schemas"]["ProductStock"];
        
    @Column({ nullable: false, type: 'json' })
        attributes: components["schemas"]["ProductAttributes"];
    
    @Column({ nullable: false, type: 'json' })
        promation: components["schemas"]["ProductPromotion"];
        
    @Column({ nullable: true })
        type: string

    @ManyToOne(() => User, ({ shops }) => shops, { onDelete: 'SET NULL' })
    @JoinColumn()
        user: User
        
    @RelationId(({ user }: Product) => user)
        ownerId: components["schemas"]["UserId"]
        
    @ManyToOne(() => Shop, ({ products }) => products, { onDelete: 'CASCADE' })
    @JoinColumn()
        shop: Shop
        
    @RelationId(({ shop }: Product) => shop)
        shopId: components["schemas"]["ShopId"]
}