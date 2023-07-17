import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor( private userService:UserService){}
    @Post("register")
    register(@Body() body:any){
        if(body.password !== body.password_confirm){
            throw new BadRequestException("password do not match")
        }
        return this.userService.save({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password:
        })
    }
}
