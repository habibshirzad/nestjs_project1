import { Test, TestingModule } from '@nestjs/testing';
import { retry } from 'rxjs';
import { UserService } from '../services/users.service';
import { UserController } from './users.controller';

describe('UsersController', () => {
  let controller: UserController;

  const mockUsersSerivce = {
    create: jest.fn( dto => {
        return{
            ...dto
        }
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService]
    })
    .overrideProvider(UserService)
    .useValue(mockUsersSerivce)
    .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('shoud create a user',() => {
      expect(controller.create({name:'habib',email:'h@gmail.com'})).toEqual({
        name:'habib',email:'h@gmail.com'
      })
  })
});
