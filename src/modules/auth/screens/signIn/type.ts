import { z } from "zod";
import { signInUserFormSchema } from "./schemas";

export type signInUserFormType = z.infer<typeof signInUserFormSchema>