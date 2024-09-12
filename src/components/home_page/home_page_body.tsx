import WelcomeSection from '@/components/home_page/welcome_section';
import ParticipateSection from '@/components/home_page/participate_section';
import RealTimeData from '@/components/home_page/real_time_data';
import ContributeSection from '@/components/common/contribute_section';
import ContactForm from '@/components/home_page/contact_form';

const HomePageBody = () => {
  return (
    <div className="flex min-h-screen flex-col font-barlow">
      {/* Info:(20240808 - Julian) Welcome */}
      <WelcomeSection />

      {/* Info:(20240808 - Julian) Participate */}
      <ParticipateSection />

      {/* Info:(20240808 - Julian) Real Time Data */}
      <RealTimeData />

      {/* Info:(20240808 - Julian) Contribute */}
      <ContributeSection />

      {/* Info:(20240809 - Julian) Contact Form */}
      <ContactForm />
    </div>
  );
};

export default HomePageBody;
