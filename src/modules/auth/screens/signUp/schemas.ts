import { z } from "zod";

export const signUpUserFormSchema = z.object({
    // name: z
    // .string({
    //     required_error: "O campo email está vazio",
    //     invalid_type_error: "Nome deve ser caracteres alfabeticos"
    // })
    // .min(5, "O campo nome está vázio ou possui menos de 5 caracteres"),
    email: z
        .string({
            required_error: "O campo email está vazio"
        })
        .email("O email não é valido."),
    password: z 
        .string({
            required_error: "O campo senha está vazio."
        })
        .min(6, "O campo senha deve possui ao menos 6 caracteres")
})