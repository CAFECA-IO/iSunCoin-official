import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const UsePageBody = () => {
  const { t } = useTranslation('common');

  return (
    <main className="mt-88px min-h-screen max-w-full overflow-x-hidden bg-surface-neutral-main-background font-barlow">
      {/* ===== HeroForUsePage ===== */}
      <section className="flex items-center justify-between gap-20px bg-surface-brand-primary-10 pr-10px pt-32px xl:pr-80px">
        {/* cover image */}
        <div className="w-3/5">
          <Image
            src="/elements/hero_use_page.svg"
            alt="hero_use_page"
            width={932}
            height={507}
            className="-ml-16px"
          ></Image>
        </div>

        {/* content */}
        <div className="flex w-2/5 flex-col justify-center gap-24px">
          <h1 className="text-44px font-bold text-text-neutral-primary">
            {t('USE_PAGE.USING_ISUNCOIN')}
          </h1>
          <p className="text-base font-medium text-text-neutral-secondary">
            {t('USE_PAGE.USING_ISUNCOIN_DESCRIPTION')}
          </p>
        </div>
      </section>

      {/* ===== WhereToUseCoin ===== */}

      {/* ===== GiveMeCoin ===== */}
    </main>
  );
};

export default UsePageBody;
