import { Post,Controller, Body,  } from "@nestjs/common";
import { CreateUserDto } from "../dto/createUser.dto";
import { UserService } from "../services/users.service";

@Controller()
export class UserController{
    constructor(private readonly userService: UserService){}


    @Post()
    create(@Body() user:CreateUserDto){
        return this.userService.create(user)
    }
}