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
    <html lang={locale}>
      <body className='grid h-screen grid-rows-[10%,auto,10%]'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className='row-start-1'>
            <NavHeader></NavHeader>
          </div>
          <main className='row-start-2 overflow-y-auto'>{children}</main>
          <div className='row-start-3'>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
