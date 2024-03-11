'use client';
import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Logo from '../../../public/JF.png';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function NavHeader() {
  const t = useTranslations('Header');
  const pathname = usePathname();

  const links = useMemo(() => {
    return [
      {
        label: t('home'),
        href: '/',
        current: pathname === '/' || pathname === '' || pathname === '/en',
      },
      {
        label: t('about'),
        href: '/about',
        current: pathname === '/about' || pathname === '/en/about',
      },
      {
        label: t('blog'),
        href: '/blog',
        current: pathname === '/blog' || pathname === '/en/blog',
      },
    ];
  }, [t, pathname]);

  return (
    <header className='order-1 flex flex min-h-[60px] w-full'>
      <nav className='mb-2 mt-2 flex-1 justify-center px-5'>
        <ul className='flex flex-row items-center gap-4'>
          <Link
            href='/'
            className='text-primary text-lg font-bold sm:mr-5 md:ml-5 lg:mr-12'
          >
            <Image src={Logo} alt='Your Company' width={45} height={45} />
          </Link>
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-300 hover:bg-indigo-950 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
