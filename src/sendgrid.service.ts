import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import * as SendGrid from '@sendgrid/mail';
@Injectable()
export class SendgridService {
    constructor(private readonly configService: ConfigService) {
        SendGrid.setApiKey("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");
    }

    async send(mail: SendGrid.MailDataRequired) {
        const transport = await SendGrid.send(mail);

        console.log(`Email successfully dispatched to ${mail.to}`)
        return transport;
    }
}
