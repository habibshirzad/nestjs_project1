import {PrimaryGeneratedColumn, Column} from 'typeorm'


export class Users{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string

    @Column({unique:true})
    email: string

}

export default Users;