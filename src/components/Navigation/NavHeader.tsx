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
      // {
      //   label: t('about'),
      //   href: '/about',
      //   current: pathname === '/about',
      // },
      // {
      //   label: t('projects'),
      //   href: '/projects',
      //   current: pathname === '/projects',
      // },
    ];
  }, [t, pathname]);

  return (
    <header className=' absolute top-0 z-10 order-1 mt-3 flex min-h-[60px] w-full flex-row flex-wrap items-center justify-between text-sm'>
      <Link href='/' className='text-primary pl-5  text-lg font-bold'>
        <Image src={Logo} alt='Your Company' width={40} height={40} />
      </Link>
      <nav className='order-3 mt-4 flex-1 px-5 min-[480px]:order-2 min-[480px]:mt-0'>
        <ul className=' flex flex-row justify-center min-[480px]:gap-4 '>
          {links.map((item) => (
            <a
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
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
}
