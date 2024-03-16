import { z } from "zod";

//schemas isola a validação de parametros

export const signInUserFormSchema = z.object({
    email: z
        .string({
            required_error: "O campo email está vazio"
        })
        .email("O email não é valido."),
    password: z 
        .string({
            required_error: "O campo senha está vazio."
        })
        .min(1, "O campo senha está vazio.")
})