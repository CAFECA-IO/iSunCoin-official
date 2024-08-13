import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const cards = [
  {
    title: 'AUTONOMY_PAGE.SYSTEM_UPDATE',
    content: 'AUTONOMY_PAGE.SYSTEM_UPDATE_CONTENT',
    imageUrl: '/elements/system_update.svg',
    alt: 'system_update',
  },
  {
    title: 'AUTONOMY_PAGE.DECISION_MAKING',
    content: 'AUTONOMY_PAGE.DECISION_MAKING_CONTENT',
    imageUrl: '/elements/decision_making.svg',
    alt: 'decision_making',
  },
  {
    title: 'AUTONOMY_PAGE.EXECUTION',
    content: 'AUTONOMY_PAGE.EXECUTION_CONTENT',
    imageUrl: '/elements/execution.svg',
    alt: 'execution',
  },
  {
    title: 'AUTONOMY_PAGE.PRIORITIZATION',
    content: 'AUTONOMY_PAGE.PRIORITIZATION_CONTENT',
    imageUrl: '/elements/prioritization.svg',
    alt: 'prioritization',
  },
];

const CardsComponent = () => {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-wrap justify-center gap-40px">
      {cards.map((card) => {
        return (
          <div
            key={card.title}
            className="basis-580px rounded border border-stroke-neutral-quaternary shadow-downDropShadowS"
          >
            <div>
              <Image
                src={card.imageUrl}
                width={580}
                height={280}
                alt={card.alt}
                className="rounded-t"
              ></Image>
            </div>
            <div className="p-16px">
              <h3 className="text-xl font-bold text-text-neutral-primary">{t(card.title)}</h3>
              <p className="text-base font-normal text-text-neutral-secondary">{t(card.content)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const UpdateCycle = () => {
  const { t } = useTranslation('common');

  return (
    <section className="space-y-40px p-80px">
      <h1 className="text-center text-36px font-semibold text-text-neutral-primary">
        {t('AUTONOMY_PAGE.UPDATE_CYCLE')}
      </h1>

      {/* Cards */}
      <CardsComponent />
    </section>
  );
};

export default UpdateCycle;
