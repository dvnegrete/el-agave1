'use client';

import { type Control } from 'react-hook-form';
import { type ContactFormValues } from '@/lib/validations/contact';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface FormFieldProps {
  control: Control<ContactFormValues>;
  name: keyof ContactFormValues;
  label: string;
  placeholder: string;
  type?: string;
}

export function ContactFormField({
  control,
  name,
  label,
  placeholder,
  type = 'text',
}: FormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}