import AlertComponent from '@/components/Alerts/AlertComponent';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  params: {
    lang: string;
  };
}

export default function NotFound({params}: Props) {
  unstable_setRequestLocale(params.lang);
  return <AlertComponent error='NotFoundError' />;
}
