import { z } from "zod";

export const EnvSchema = z.object({
    PORT: z.string(),
    ENV: z.union([
            z.literal('production'),
            z.literal('testing'),
            z.literal('development'),
        ]),
    DBNAME: z.string(),
    DBPORT: z.string().optional(),
    HOST: z.string().optional()
});