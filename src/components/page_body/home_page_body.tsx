import WelcomeSection from '@/components/welcome_section/welcome_section';
import ParticipateSection from '@/components/participate_section/participate_section';

const HeadPageBody = () => {
  return (
    <div className="flex min-h-screen flex-col font-barlow">
      {/* Info:(20240808 - Julian) Welcome */}
      <WelcomeSection />

      {/* Info:(20240808 - Julian) Participate */}
      <ParticipateSection />
    </div>
  );
};

export default HeadPageBody;
