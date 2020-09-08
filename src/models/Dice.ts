import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm'



@Entity('dices')
class Dice {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    order: number

    @Column()
    value: number

    @Column()
    type: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date


}

export default Dice;