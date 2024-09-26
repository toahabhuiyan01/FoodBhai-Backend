import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export default class Category {
    @PrimaryGeneratedColumn('increment')
        id: string
    
    @Column({ nullable: false })
        name: string
        
    @Column({ nullable: true })
        description: string
        
    @Column({ nullable: true })
        image: string
        
    @Column({ nullable: false })
        createdAt: Date
        
    @UpdateDateColumn({ nullable: false })
        updatedAt: Date
        
    @CreateDateColumn({ nullable: false })
        createdBy: string

}