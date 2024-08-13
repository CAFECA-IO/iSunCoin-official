import CurrentProposals from '@/components/develop_page/current_proposals';
import ProposeForm from '@/components/develop_page/propose_form';

const DevelopPageBody = () => {
  return (
    <main className="mt-88px flex min-h-screen max-w-full flex-col overflow-x-hidden bg-surface-neutral-main-background font-barlow">
      {/* Info:(20240813 - Julian) Current Proposals */}
      <CurrentProposals />

      {/* Info:(20240813 - Julian) Propose Form */}
      <ProposeForm />
    </main>
  );
};

export default DevelopPageBody;
