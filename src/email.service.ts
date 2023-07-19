import { Injectable } from '@nestjs/common';
import { SendGridService } from '@anchan828/nest-sendgrid';

@Injectable()
export class EmailService {
    constructor(private readonly sendGrid: SendGridService) {} 
    async sendEmail( email: string): Promise<void> {
        await this.sendGrid.send({
          to: email,
          from: "houssin.carnelian@gmail.com",
          subject: "User Created",
          text: `Hello  your user created with success!`,
          html: `<strong>Hello your user created with success!</strong>`,
        }).then(async response => {
          await "success"
        }).catch(async error => {
          await "error"
        });
      }
      
}
