import { NavHeader } from '@/components/Navigation';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

interface LocaleLayout {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Jonatha Dev';
  const description = 'Full-Stack software engineer';
  const siteName = 'Jonatha Dev';

  return {
    metadataBase: new URL('https://jonathadev.vercel.app/'),
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://jonathadev.vercel.app/',
      siteName,
      images: [
        {
          url: '/images/jonatha.png',
          width: 800,
          height: 600,
        },
        {
          url: '/images/jonatha.png',
          width: 1800,
          height: 1600,
          alt: 'Custom Alt',
        },
      ],
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
}: Readonly<LocaleLayout>) {
  let messages: any;
  const locale = useLocale();

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
            <NavHeader />
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
