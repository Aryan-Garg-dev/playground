import nodemailer, { Transporter } from "nodemailer";
import { EmailTemplateProps, emailTemplates } from "@/mail-service/templates";
import { pretty, render } from "@react-email/render";
import env from "@/handlers/env";

interface Sender {
  mailId: string,
  appPassword: string
  username?: string
}

type SendMailOptions = {
  receiverMailId: string,
  subject: string,
  html: string,
  text?: string
} | {
  receiverMailId: string,
  subject: string,
  html?: string,
  text: string
}

interface SendTemplateMail<T extends keyof EmailTemplateProps>{
  template: T,
  options: {
    props: EmailTemplateProps[T],
    subject?: string,
    receiverMailId: string
  }
}

class Mailer {
  private readonly senderMailId: string;
  private readonly senderAppPassword: string;
  private readonly mailService: string;
  private readonly username: string | undefined;
  private readonly transporter: Transporter;

  constructor(sender: Sender, service: string = "gmail") {
    this.senderMailId = sender.mailId;
    this.senderAppPassword = sender.appPassword;
    this.username = sender.username;
    this.mailService = service;
    this.transporter = this.createTransporter();
  }

  private createTransporter(): Transporter {
    return nodemailer.createTransport({
      service: this.mailService,
      auth: {
        user: this.senderMailId,
        pass: this.senderAppPassword,
      }
    })
  }

  public async send(options: SendMailOptions){
    const { receiverMailId, subject, html, text } = options;
    await this.transporter.sendMail({
      from: this.username
        ? { name: this.username, address: this.senderMailId }
        : this.senderMailId,
      to: receiverMailId,
      subject,
      html,
      text
    });
  }

  public async sendTemplate<T extends keyof EmailTemplateProps>({ template, options }: SendTemplateMail<T>){
    const { component, subject: defaultSubject } = emailTemplates[template];
    const { receiverMailId, subject, props } = options;
    const html = await pretty(await render(component(props)));
    await this.transporter.sendMail({
      from: this.username
        ? { name: this.username, address: this.senderMailId }
        : this.senderMailId,
      to: receiverMailId,
      subject: subject || defaultSubject,
      html,
    })
  }
}

export const testMailer = new Mailer({
  mailId: env.SENDER_MAIL_ID,
  username: "myjobb Test Mail",
  appPassword: env.SENDER_APP_PASSWORD
});