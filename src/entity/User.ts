import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'
import { components } from '../types/openapi';
import Shop from './Shop';
import RefreshToken from './RefreshToken';
import Product from './Product';
import Rating from './Rating';

@Entity()
export default class User {
    @PrimaryGeneratedColumn('increment')
        id: string
    @Column({ nullable: false })
        name: string;
    
    @Column({ nullable: false })
        email: string;
        
    @Column({ nullable: false })
        password: string;
    
    @CreateDateColumn({ nullable: false })
        createdAt: Date;
    
    @Column({ nullable: false})
        phoneNumber: string;
    
    @Column({ nullable: true })
        profileImage: string;
    
    @Column({ nullable: true})
        location: string;
    
    @Column({ type: 'json' })
        locationPrecise: components["schemas"]["LocationPrecise"];
    
    @Column()
        rating: number;

    @OneToMany(() => Shop, ({ user }) => user, { onDelete: 'CASCADE', cascade: false })
        shops: Shop[];
        
    @OneToMany(() => RefreshToken, ({ user }) => user, { onDelete: 'CASCADE', cascade: false })
        refreshTokens: RefreshToken[];
        
    @OneToMany(() => Product, ({ user }) => user, { onDelete: 'CASCADE', cascade: false })
        products: Product[];
}