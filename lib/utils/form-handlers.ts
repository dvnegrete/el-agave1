import { type ContactFormValues } from '@/lib/validations/contact';
import { type UseToast } from '@/hooks/use-toast';

export async function handleContactFormSubmit(
  data: ContactFormValues,
  toast: ReturnType<UseToast>,
  reset: () => void
) {
  try {
    // Here you would typically send the data to your backend
    console.log(data);
    toast({
      title: 'Success!',
      description: 'Your contact information has been submitted.',
    });
    reset();
  } catch (error) {
    toast({
      title: 'Error',
      description: 'Something went wrong. Please try again.',
      variant: 'destructive',
    });
  }
}