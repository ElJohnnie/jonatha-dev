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
        current: pathname === '/',
      },
      {
        label: t('about'),
        href: '/about',
        current: pathname === '/about',
      },
      // {
      //   label: t('projects'),
      //   href: '/projects',
      //   current: pathname === '/projects',
      // },
    ];
  }, [t, pathname]);

  return (
    <header className='absolute top-0 z-10 order-1 mt-3 flex min-h-[60px] w-full'>
      <nav className='mt-4 flex-1 px-5 min-[480px]:order-2 min-[480px]:mt-0 '>
        <ul className='flex flex-row items-center justify-normal gap-4'>
          <Link
            href='/'
            className='text-primary pl-5 text-lg font-bold sm:mr-5 lg:mr-12'
          >
            <Image src={Logo} alt='Your Company' width={45} height={45} />
          </Link>
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
