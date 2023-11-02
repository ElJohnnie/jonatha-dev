import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import { ReactNode } from 'react';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'pt'}];
}

interface LocaleLayout {
  children?: ReactNode,
  params?: any,
}

export default async function LocaleLayout({children, params: {locale}}: Readonly<LocaleLayout>) {
  let messages;
  try {
    messages = (await import(`../../locale/${locale}/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}