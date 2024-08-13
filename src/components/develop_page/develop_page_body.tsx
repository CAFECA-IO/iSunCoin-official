import CurrentProposals from '@/components/develop_page/current_proposals';

const DevelopPageBody = () => {
  return (
    <main className="mt-88px flex min-h-screen max-w-full flex-col overflow-x-hidden bg-surface-neutral-main-background font-barlow">
      {/* Info:(20240813 - Julian) Current Proposals */}
      <CurrentProposals />
    </main>
  );
};

export default DevelopPageBody;
