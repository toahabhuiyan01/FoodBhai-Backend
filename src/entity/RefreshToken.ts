import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from 'typeorm'
import User from './User'

@Entity()
export default class RefreshToken {
	@PrimaryGeneratedColumn('uuid')
		token: string

    @ManyToOne(() => User, ({ refreshTokens }) => refreshTokens, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn()
		user: User

	@RelationId(({ user }: RefreshToken) => user)
		userId: string

	@CreateDateColumn()
		createdAt: Date

	@UpdateDateColumn()
		updatedAt: Date

	@Column({ nullable: false })
		expiresAt: Date
}