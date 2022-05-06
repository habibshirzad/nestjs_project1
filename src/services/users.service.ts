import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "src/dto/createUser.dto";



@Injectable()
export class UserService{
//    constructor(@InjectRepository(Users)
//      private readonly usersRepository : Repository<Users>){}


    async create(user: CreateUserDto){
        return user.name + 'email:' + user.email; 
        // const createUser = this.usersRepository.create(user)
        // this.usersRepository.save(createUser)
        // return createUser;
    }
}