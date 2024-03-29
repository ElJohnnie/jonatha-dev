import { NavHeader } from '@/components/Navigation';
import { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { unstable_setRequestLocale } from 'next-intl/server';

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
  unstable_setRequestLocale(locale);
  
  return (
    <html lang={locale} className='h-full'>
      <body className='flex h-screen flex-col'>
        <div>
          <NavHeader locale={locale}></NavHeader>
        </div>
        <main className='grow overflow-y-auto'>{children}</main>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
