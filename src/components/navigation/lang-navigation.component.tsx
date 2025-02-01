'use client';
import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../../locale/navigation';
import { toUppercaseUtil } from '@/utils/to-upper-case.util';
import { locales } from '@/locale/languages';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export default function LangNavigation() {
  const actualLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const upperCaseLocale = toUppercaseUtil(actualLocale);
  const upperCaseLocales = toUppercaseUtil(locales);

  const handleSelect = (locale: string) => {
    router.push(pathname, { locale });
  };

  return (
    <Listbox value={upperCaseLocale} onChange={handleSelect}>
      {({ open }) => (
        <div className='relative mt-2'>
          <Listbox.Button className='text-white-900 relative block w-full cursor-default rounded-lg rounded-md px-3 py-1.5 py-2 text-left shadow-sm ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500 sm:text-sm sm:leading-6 md:pl-3 md:pr-10 md:ring-1'>
            <span className='flex items-center'>
              <span className='ml-3 block truncate'>{upperCaseLocale}</span>
            </span>
            <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='bg absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-gray-950 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {Array.isArray(upperCaseLocales) &&
                upperCaseLocales.map((item, index) => (
                  <Listbox.Option
                    key={item}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-slate-600' : '',
                        'relative cursor-default select-none py-2 pl-3 pr-9 text-white'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className='flex items-center'>
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {item}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-white-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}
