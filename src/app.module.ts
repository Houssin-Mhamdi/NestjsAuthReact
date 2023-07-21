import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { SendGridModule } from '@anchan828/nest-sendgrid';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        auth: {
          user: 'houssin.carnelian@gmail.com',
          pass: 'ioavhhliwnqmylas',
        },
      }
    }),
    TypeOrmModule.forRoot({
    type: 'postgres',
    database: 'testDB',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    entities: [User],
    synchronize: true,
  }),
  UserModule,
  EmailModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
