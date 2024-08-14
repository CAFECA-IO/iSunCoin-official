import { useState } from 'react';
import Step0 from '@/components/use_page/step0';
import Step1 from '@/components/use_page/step1';
import Step2 from '@/components/use_page/step2';
import Step3 from '@/components/use_page/step3';
import Step4 from '@/components/use_page/step4';

interface SwitchButtonProps {
  isActive: boolean;
  onClick: () => void;
  text: string;
}

const SwitchButton = ({ isActive, onClick, text }: SwitchButtonProps) => {
  const activeBtnStyle =
    'text-tabs-text-invert bg-tabs-surface-active border-tabs-stroke-secondary';
  const inactiveBtnStyle = 'text-tabs-text-default border-tabs-stroke-default';

  return (
    <button
      type="button"
      className={`min-w-350px text-nowrap rounded-sm border px-12px py-8px text-base font-medium shadow-downDropShadowSM ${
        isActive ? activeBtnStyle : inactiveBtnStyle
      }`}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
};

const WhereToUseCoin = () => {
  const [step, setStep] = useState(0);

  return (
    <section className="bg-surface-neutral-surface-lv2">
      <div className="flex flex-col items-center gap-42px px-80px py-40px">
        <h1 className="text-36px font-semibold text-text-neutral-primary">
          Where to use iSunCoin?
        </h1>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-24px">
          <SwitchButton
            isActive={step === 0}
            onClick={() => setStep(0)}
            text="Safeguard Your Data Until the End of the World"
          />

          <SwitchButton
            isActive={step === 1}
            onClick={() => setStep(1)}
            text="Become a Global Citizen"
          />

          <SwitchButton
            isActive={step === 2}
            onClick={() => setStep(2)}
            text="Run Cloud Services"
          />

          <SwitchButton
            isActive={step === 3}
            onClick={() => setStep(3)}
            text="Utilize Generative AI Services"
          />

          <SwitchButton
            isActive={step === 4}
            onClick={() => setStep(4)}
            text="Broadcast Your News on iSunTV"
          />
        </div>
      </div>

      {/* Content - Step 0 */}
      {step === 0 && <Step0 />}

      {/* Content - Step 1 */}
      {step === 1 && <Step1 />}

      {/* Content - Step 2 */}
      {step === 2 && <Step2 />}

      {/* Content - Step 3 */}
      {step === 3 && <Step3 />}

      {/* Content - Step 4 */}
      {step === 4 && <Step4 />}
    </section>
  );
};

export default WhereToUseCoin;
