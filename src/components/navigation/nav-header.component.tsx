'use client';
import { useState, useMemo } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/JF.png';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import LangNavigation from './lang-navigation.component';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NavHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('Header');
  const pathname = usePathname();
  const currentLocale = useLocale();

  const links = useMemo(() => {
    return [
      {
        label: t('home'),
        href: `/${currentLocale}/`,
        current: pathname === `/${currentLocale}`,
      },
      {
        label: t('about'),
        href: `/${currentLocale}/about`,
        current: pathname?.includes(`/about`),
      },
      // {
      //   label: t('projects'),
      //   href: `/${currentLocale}/projects`,
      //   current: pathname?.includes(`/projects`),
      // },
      {
        label: t('blog'),
        href: `/${currentLocale}/blog`,
        current: pathname?.includes(`/blog`),
      },
    ];
  }, [t, pathname, currentLocale]);

  return (
    <header>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8 lg:py-2'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link
            href='/'
            className='text-primary text-lg font-bold sm:mr-5 md:ml-5 lg:mr-12'
          >
            <Image src={Logo} alt='Your Company' width={75} height={75} />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='text-white-700 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden items-center lg:flex lg:gap-x-6'>
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-slate-900 text-white'
                  : 'hover:bg-slate text-gray-300 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
          <div className='ml-auto'>
            <LangNavigation />
          </div>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-950 px-6 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link
              href='/'
              className='text-primary text-lg font-bold sm:mr-5 md:ml-5 lg:mr-12'
            >
              <Image src={Logo} alt='Your Company' width={75} height={75} />
            </Link>
            <button
              type='button'
              className='text-white-700 -m-2.5 rounded-md p-2.5'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {links.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-300 hover:bg-indigo-950 hover:text-white',
                      'mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className='ml-auto'>
                  <LangNavigation />
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
