import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, RelationId, JoinColumn } from 'typeorm';
import { components } from '../types/openapi';
import User from './User';

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

    @ManyToOne(() => User, ({ shops }) => shops, { onDelete: 'SET NULL' })
    @JoinColumn()
        user: User
        
    @RelationId(({ user }: Shop) => user)
        ownerId: components["schemas"]["UserId"]
}