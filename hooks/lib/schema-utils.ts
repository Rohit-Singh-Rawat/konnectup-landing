import { z } from "zod";

export const validStatuses = ["resumes", "cover-letters"] as const;

export const documentStatusSchema = z.object({
    status: z.enum(validStatuses),
});
