import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { testMailer } from "@/mail-service/mailer";
import { sendResponse } from "@/handlers/response";

export const sendWelcomeMailSchema = z.object({
  to: z.string().email(),
  firstName: z.string()
})

export type SendMailDTO = z.infer<typeof sendWelcomeMailSchema>;

export const sendWelcomeEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { to, firstName } = req.body as SendMailDTO;
    await testMailer.sendTemplate({
      template: "welcomeMail",
      options: {
        props: {
          firstName: firstName
        },
        receiverMailId: to
      }
    })
    sendResponse(res, {
      success: true,
      message: "Successfully sent welcome mail",
      status: 200,
    })
    return;
  } catch(error){
    next(error);
  }
}
