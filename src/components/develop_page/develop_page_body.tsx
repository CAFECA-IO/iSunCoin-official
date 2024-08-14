import { useTranslation } from 'next-i18next';
import CurrentProposals from '@/components/develop_page/current_proposals';
import ProposeForm from '@/components/develop_page/propose_form';
import UpdateHistory from '@/components/develop_page/update_history';

const DevelopPageBody = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation('common');

  return (
    <main className="mt-88px flex min-h-screen max-w-full flex-col overflow-x-hidden bg-surface-neutral-main-background font-barlow">
      {/* Info:(20240813 - Julian) Current Proposals */}
      <CurrentProposals />

      {/* Info:(20240813 - Julian) Propose Form */}
      <ProposeForm />

      {/* Info:(20240813 - Julian) Update History */}
      <UpdateHistory />
    </main>
  );
};

export default DevelopPageBody;
