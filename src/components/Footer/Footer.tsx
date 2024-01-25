'use client';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const Footer = () => {
  const t = useTranslations('Social');

  const links = [
    {
      label: 'LinkedIn',
      href: t('linkedin'),
      icon: <LinkedInLogoIcon className='text-primary h-6 w-6' />,
    },
    {
      label: 'Github',
      href: t('github'),
      icon: <GitHubLogoIcon className='text-primary h-6 w-6' />,
    },
  ];

  return (
    <footer className=' text-secondary flex w-full justify-center px-5 text-sm font-medium '>
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          aria-label={link.label}
          target='_blank'
          className='text-secondary hover:text-primary  flex flex-row items-center gap-2 p-5 sm:w-[130px] sm:[&>i]:hidden sm:[&>i]:hover:block'
        >
          <span className='hidden h-6 sm:block'>{link.label}</span>
          <i>{link.icon}</i>
        </Link>
      ))}
    </footer>
  );
};
