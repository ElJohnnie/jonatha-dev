import { NavHeader } from '@/components/Navigation';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { Footer } from '@/components/Footer';

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
    <html lang={locale} className='h-full'>
      <body className='flex h-screen flex-col'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div>
            <NavHeader></NavHeader>
          </div>
          <main className='grow overflow-y-auto'>{children}</main>
          <div>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
