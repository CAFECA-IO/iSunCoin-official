import { useTranslation } from 'next-i18next';

const UsePageBody = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation('common');

  return (
    <main className="mt-88px min-h-screen max-w-full overflow-x-hidden bg-surface-neutral-main-background font-barlow">
      <h1>UsePageBody</h1>
    </main>
  );
};

export default UsePageBody;
