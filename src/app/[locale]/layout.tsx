import Footer from '@/components/footer/footer.component';
import NavHeader from '@/components/navigation/nav-header.component';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

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
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_LOCAL_DOMAIN || 'https://jonathadev.com.br'
    ),
    title,
    description,
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    openGraph: {
      title,
      description,
      url: process.env.NEXT_PUBLIC_LOCAL_DOMAIN || 'https://jonathadev.com.br',
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
