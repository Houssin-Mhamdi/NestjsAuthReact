import { BadRequestException, Body, Controller, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
    constructor( private userService:UserService,private jwtService: JwtService){}
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
    @Post("login")
   async login(@Res({ passthrough: true }) response: Response, @Body("email")email:string, @Body("password")password:string){
    const user = await this.userService.findOne({email:email})
    if(!user){
        throw new BadRequestException("invalid credentials")
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        throw new BadRequestException("invalid credentials")
    }

    const paylode = {
        sub:user.id,
        email:user.email
    }
    const access_token = await this.jwtService.signAsync(paylode,{expiresIn:"30s"}) 
    const refresh_token = await this.jwtService.signAsync(paylode) 
    response.cookie("refresh_token",refresh_token,{
        httpOnly:true,
        maxAge: 7*24*60*1000
    })
    return {
        token:access_token, 
    }
} 
}
