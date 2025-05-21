import express, { Response, Request, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import env from "@/handlers/env"
import { sendResponse } from "@/handlers/response";
import { sendWelcomeEmail, sendWelcomeMailSchema } from "@/mail-service";
import { validateBody } from "@/middewares/validate-input";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.get("/", (req: Request, res: Response)=>{
  res.status(200).send("Mail server is healthy");
})

app.post(
  "/mail/welcome",
  validateBody(sendWelcomeMailSchema),
  sendWelcomeEmail
)


app.use("/{*any}", (req: Request, res: Response, next: NextFunction) => {
  return next("Route does not exist.")
})

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
  console.error(err.stack);
  sendResponse(res, {
    success: false,
    error: err.message || 'Internal Server Error',
    status: 500
  })
})

app.listen(env.PORT, ()=>{
  console.log(`App is listening on port: ${env.PORT}`);
})