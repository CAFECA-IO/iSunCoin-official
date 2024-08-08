import WelcomeSection from '@/components/home_page/welcome_section';
import ParticipateSection from '@/components/home_page/participate_section';
import ContributeSection from '@/components/common/contribute_section';

const HeadPageBody = () => {
  return (
    <div className="flex min-h-screen flex-col font-barlow">
      {/* Info:(20240808 - Julian) Welcome */}
      <WelcomeSection />

      {/* Info:(20240808 - Julian) Participate */}
      <ParticipateSection />

      {/* Info:(20240808 - Julian) Contribute */}
      <ContributeSection />
    </div>
  );
};

export default HeadPageBody;
