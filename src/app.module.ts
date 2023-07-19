import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { SendGridModule } from '@anchan828/nest-sendgrid';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';


@Module({
  imports: [
    SendGridModule.forRoot({
   
      apikey:"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"
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
],
  controllers: [EmailController],
  providers: [EmailService],
})
export class AppModule {}
