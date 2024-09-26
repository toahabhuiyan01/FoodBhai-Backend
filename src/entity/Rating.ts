import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class Rating {
    @PrimaryGeneratedColumn('increment')
        id: string
    
    @Column({ nullable: false })
        rating: number
    
    @Column({ nullable: true })
        comment: string
        
    @Column({ type: 'json', nullable: true })
        imageUrls: string[]
        
    @Column({ nullable: false })
        reviewedBy: string  
        
    @Column()
        reviewedForShop: string
        
    @Column()
        reviewedForProduct: string
}