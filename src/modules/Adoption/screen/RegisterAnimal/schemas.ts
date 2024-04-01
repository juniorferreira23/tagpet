import { z } from "zod";

export const registerAnimalFormSchema = z.object({
    name: z
        .string({
            required_error: "O campo nome está vazio",
            invalid_type_error: "Nome deve ser caracteres alfabeticos"
        })
        .min(1, "O campo nome está vázio"),
    age: z
        .string({
            required_error: "O campo idade está vazio",
        })
        .min(1, "O campo idade está vázio"),
    month: z
        .string()
        .optional(),
    species: z
        .string({
            required_error: "O campo da especie está vazio",
        })
        .min(1, "O campo da especie está vázio"),
    breed: z
        .string({
            required_error: "O campo da raça está vazio",
        })
        .min(1, "O campo da raça está vázio"),
    gender: z
        .string({
            required_error: "O campo da sexo está vazio",
        })
        .min(1, "O campo da sexo está vázio"),
    description: z
        .string({
            required_error: "O campo da descrição está vazio",
        })
        .min(1, "O campo da descrição está vázio"),
    image: z
        .string({
            required_error: "O campo da imagem está vazio",
        })
        .min(1, "O campo da imagem está vázio"),
})