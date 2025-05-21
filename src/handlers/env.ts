import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

function createEnv<T extends z.ZodRawShape>(
  schema: z.ZodObject<T>,
  env: NodeJS.ProcessEnv = process.env
) {
  const parsed = schema.safeParse(env);

  if (!parsed.success) {
    console.error("Error reading env:", parsed.error.flatten().fieldErrors);
    throw new Error("Invalid env vars");
  }

  return parsed.data;
}

const env = createEnv(z.object({
  PORT: z.string().length(4),
  SENDER_MAIL_ID: z.string().email(),
  SENDER_APP_PASSWORD: z.string().min(16)
}))

export default env;