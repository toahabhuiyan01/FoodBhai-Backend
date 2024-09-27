import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, RelationId, JoinColumn, OneToMany } from 'typeorm';
import { components } from '../types/openapi';
import User from './User';
import Product from './Product';
import Rating from './Rating';

@Entity()
export default class Shop {
    @PrimaryGeneratedColumn()
        id: string;

    @Column()
        profileImage?: string;

    @Column()
        coverImage: string;

    @Column()
        shopBio?: string;

    @Column({ nullable: false })
        name: string;

    @Column({ nullable: true })
        location: string;

    @Column({ type: 'json', nullable: true })
        locationPrecise: components["schemas"]["LocationPrecise"];

    @Column({ nullable: false, default: 0 })
        rating: number;

    @Column({ nullable: true })
        activeTimeRange: string
        
    @OneToMany(() => Product, ({ shop }) => shop, { onDelete: 'CASCADE' })
        products: Product[];
        
    @OneToMany(() => Rating, ({ shop }) => shop, { onDelete: 'CASCADE' })
        ratings: Rating[];

    @ManyToOne(() => User, ({ shops }) => shops, { onDelete: 'SET NULL' })
    @JoinColumn()
        user: User
        
    @RelationId(({ user }: Shop) => user)
        ownerId: components["schemas"]["UserId"]
}