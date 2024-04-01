import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  params: {
    lang: string;
  };
}

export default function NotFoundCatchAll({params}: Props) {
  unstable_setRequestLocale(params.lang)
  notFound();
}
