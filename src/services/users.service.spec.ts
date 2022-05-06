import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { CreateUserDto } from "src/dto/createUser.dto";
import Users from "src/entities/users.entity";
import { UserService } from "./users.service";

describe('UserService', () => {
    let service = UserService

    
    const  user = (user:CreateUserDto) => {
        return {
          name: 'habib',
          email: 'h@gmail.com',
        };
      }

    beforeEach(async () =>{
        const module : TestingModule = await Test.createTestingModule({
            providers:[UserService,{
                provide: getRepositoryToken(Users),
                useValue: user
            }]
        }).compile()

        service = module.get<UserService>(UserService)  
    })

    it('should return username and email', async() => {
        expect(await service.create({
            name: 'habib',
            email: 'h@gmail.com'
        }).toEqual({
            name: expect('habib'),
            email: 'h@gmail.com'
        }))
    })
    
})