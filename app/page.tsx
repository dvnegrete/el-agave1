import { ContactForm } from '@/components/forms/contact-form';
import { ThemeToggle } from '@/components/theme/theme-toggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <ThemeToggle />
      <ContactForm />
    </main>
  );
}