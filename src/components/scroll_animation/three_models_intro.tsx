const ThreeModelsIntro = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full max-w-975px space-y-20px">
        <h1 className="text-64px font-bold text-text-text-primary">
          <span className="text-text-brand-primary-lv2">3</span> models for different users.
        </h1>
        <p className="text-lg font-semibold text-text-neutral-secondary">
          Our product line offers three different models: PRO, MAX, and Enterprise. Each model has
          distinct performance and capabilities, catering to different types of users. You can find
          the right model for you by exploring the details below.
        </p>
        <div>
          <h4 className="text-xl font-semibold text-text-neutral-primary">
            The PRO model features ARGB fans and a 1TB solid-state drive / NTD 100,000 (estimate)
          </h4>
          <h4 className="text-xl font-semibold text-text-neutral-primary">
            The MAX model features ARGB fans and a 1TB solid-state drive / NTD 160,000 (estimate)
          </h4>
          <h4 className="text-xl font-semibold text-text-neutral-primary">
            The Enterprise model features a water cooling system and a 2TB solid-state drive / NTD
            300,000 (estimate)
          </h4>
        </div>
      </div>
    </section>
  );
};

export default ThreeModelsIntro;
