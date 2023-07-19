import { Controller, Get ,Query} from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailService } from './email.service';
@Controller('email')
export class EmailController {
  constructor(private readonly appService: EmailService) {}

    @Get('plain-text-email')
    async sendEmail(@Query('toemail') toEmail:string) {
  await this.appService.sendEmail(toEmail)
  return "success";
}
}
