import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
    constructor( private userService:UserService){}
    @Post("register")
   async register(@Body() body:any){
        if(body.password !== body.password_confirm){
            throw new BadRequestException("password do not match")
        }
        const saltOrRounds = 12;
        const password = body.password;
        
        return this.userService.save({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: await bcrypt.hash(password,saltOrRounds)
        })
    }
}
