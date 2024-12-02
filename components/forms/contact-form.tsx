'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormValues } from '@/lib/validations/contact';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactFormField } from './form-fields';
import { handleContactFormSubmit } from '@/lib/utils/form-handlers';

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      identification: '',
      email: '',
      whatsapp: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    await handleContactFormSubmit(data, toast, form.reset);
  };

  return (
    <Card className="w-full max-w-md mx-auto border shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Login Your Account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <ContactFormField
              control={form.control}
              name="identification"
              label="Identification Number"
              placeholder="Enter your ID number"
            />
            <ContactFormField
              control={form.control}
              name="email"
              label="Email Address"
              placeholder="Enter your email"
              type="email"
            />
            <ContactFormField
              control={form.control}
              name="whatsapp"
              label="WhatsApp Number"
              placeholder="+1 234 567 8900"
              type="tel"
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}