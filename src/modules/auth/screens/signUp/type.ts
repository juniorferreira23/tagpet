import { z } from "zod";
import { signUpUserFormSchema } from "./schemas";

export type signUpUserFormType = z.infer<typeof signUpUserFormSchema>