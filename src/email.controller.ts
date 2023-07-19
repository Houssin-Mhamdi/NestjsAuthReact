import { Controller, Post, Query } from "@nestjs/common";
import { SendgridService } from "./sendgrid.service";

@Controller('mail')
export class EmailController {
  constructor(
    private readonly sendgridService: SendgridService
){}

@Post('send')
async sendEmail(@Query('email') email:string) {
    const mail = {
        to: email,
        subject: 'Greeting Message from NestJS Sendgrid',
        from: 'houssin.carnelian@gmail.com',
        text: 'Hello World from NestJS Sendgrid',
        html: '<h1>Hello World from NestJS Sendgrid</h1>'
    };

    const a = await this.sendgridService.send(mail);
    console.log(a);
}
}

