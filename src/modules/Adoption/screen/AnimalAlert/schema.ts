import { z } from "zod";

export const alertAnimalFormSchema = z.object({
    name: z
        .string({
            required_error: "O campo nome está vazio",
            invalid_type_error: "Nome deve ser caracteres alfabeticos"
        })
        .min(1, "O campo nome está vázio"),
    species: z
        .string({
            required_error: "O campo espécie está vazio",
        })
        .min(1, "O campo espécie está vázio"),
    description: z
        .string({
            required_error: "O campo descrição está vazio",
        })
        .min(1, "O campo descrição está vázio"),
})