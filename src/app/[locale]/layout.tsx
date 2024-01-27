import { NavHeader } from '@/components/Navigation';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { Footer } from '@/components/Footer/Footer';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }];
}

interface LocaleLayout {
  children?: ReactNode;
  params?: any;
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<LocaleLayout>) {
  let messages: any;
  try {
    messages = (await import(`../../locale/${locale}/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className='h-screen bg-slate-950'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex min-h-screen flex-col">
          <NavHeader></NavHeader>
              {children}
              <Footer />
            </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
