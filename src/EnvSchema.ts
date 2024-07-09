import { z } from "zod";
import { Environment } from "./environmentType";

export const EnvSchema = z.object({
    PORT: z.string(),
    ENV: z.union([
            z.literal('CHECK'),
            z.literal('DIRECT DEPOSIT'),
            z.literal('MONEY ORDER'),
        ]),
    DBNAME: z.string(),
    DBPORT: z.string().optional(),
    HOST: z.string().optional()
});