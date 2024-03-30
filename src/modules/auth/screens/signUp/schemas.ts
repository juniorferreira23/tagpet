import { z } from "zod";

export const signUpUserFormSchema = z.object({
    name: z
        .string({
            required_error: "O campo email está vazio",
            invalid_type_error: "Nome deve ser caracteres alfabeticos"
        })
        .min(1, "O campo nome está vázio ou possui menos de 5 caracteres")
        .refine((name) =>
            name.split(" ").length > 1 && name.split(" ")[1].length > 0
            , {
                message: "Só aceitamos nome composto"
            }),
    email: z
        .string({
            required_error: "O campo email está vazio"
        })
        .email("O email não é valido."),
    zip_code: z
        .string({
            required_error: "O campo email está vazio"
        })
        .min(1, "O campo CEP está vazio"),
    city: z
        .string({
            required_error: "O campo email está vazio"
        })
        .min(1, "O campo cidade está vazio"),
    cell_phone: z
        .string({
            required_error: "O campo celular está vazio",
        })
        .min(1, "O campo celular está vazio"),
    password: z
        .string({
            required_error: "O campo senha está vazio."
        })
        .min(6, "O campo senha deve possui ao menos 6 caracteres"),
    confirm_password: z
        .string({
            required_error: "O campo senha está vazio."
        })
        .min(6, "O campo senha deve possui ao menos 6 caracteres")
})