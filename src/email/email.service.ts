import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
    constructor(private readonly mailerService:MailerService){}

   async sendEmail(email:string,firstName:string){
    var response = await this.mailerService.sendMail({
        to:email,
        from:"houssin.carnelian@gmail.com",
        subject: 'Plain Text Email ✔',
        text: `Welcome ${firstName} to our platform`, 
       });
       return response;
   }
}
