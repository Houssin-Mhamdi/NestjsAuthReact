import { Controller, Get ,Query} from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('email')
export class EmailController {
constructor(private readonly mailerService:MailerService){}

@Get('plain-text-email')
async plainTextEmail(@Query('toemail') toEmail) {
var response = await this.mailerService.sendMail({
 to:toEmail,
 from:"houssin.carnelian@gmail.com",
 subject: 'Plain Text Email ✔',
 text: 'Welcome NestJS Email Sending Tutorial', 
});
return response;
}
}
