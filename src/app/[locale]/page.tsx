'use client';
 
import {useTranslations} from 'next-intl';
 
export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className="flex justify-center h-screen overflow-hidden px-10 py-nav-height-desktop selection:bg-green selection:text-black lg:w-full bg-slate-950">
      <div className="bg-background mt-10 p-5 text-base text-secondary">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
          {t("title")}
        </h1>
        <h2 className="mb-0 mt-5 px-3 text-xl font-semibold text-primary lg:text-2xl">
          {t("title")}
        </h2>
      </div>
    </main>
  );
}