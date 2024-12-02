import * as z from 'zod';

export const contactFormSchema = z.object({
  identification: z.string().min(5, 'ID number must be at least 5 characters'),
  email: z.string().email('Please enter a valid email address'),
  whatsapp: z.string().min(10, 'WhatsApp number must be at least 10 digits'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;