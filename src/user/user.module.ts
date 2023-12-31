import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { EmailService } from 'src/email/email.service';

@Module({
    imports: [TypeOrmModule.forFeature([User]),JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }),],
    controllers: [UserController],
    providers: [UserService,EmailService],

})
export class UserModule {}
