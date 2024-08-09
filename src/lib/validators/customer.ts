import { z } from 'zod';

export const CustomerValidator = z.object({
  name: z.string().min(1, 'O campo nome é obrigatório').trim().toLowerCase(),
  email: z
    .string()
    .min(1, 'O email é obrigatório')
    .email('Insira um email válido'),
  phone: z
    .string()
    .min(1, 'O campo telefone é obrigatório')
    .refine(
      (value) => /\([1-9]{2}\) 9[1-9]\d{3}-\d{4}/.test(value),
      'O telefone deve estar no formato (99) 99999-9999.'
    ),
});
