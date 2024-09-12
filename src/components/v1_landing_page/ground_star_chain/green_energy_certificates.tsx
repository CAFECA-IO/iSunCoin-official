const GreenEnergyCertificates = () => {
  return (
    <section className="relative mx-auto flex min-h-475px max-w-1440px items-center justify-end overflow-hidden">
      <div className="absolute left-0 top-0 min-h-436px w-full -translate-x-31% bg-greenEnergy bg-contain bg-center bg-no-repeat lg:scale-150 xl:scale-175"></div>

      <div className="relative w-1/2 space-y-12 pl-80px pr-40px">
        <h2 className="text-48px font-semibold text-text-neutral-primary">
          <span className="text-text-brand-primary-lv2">Green Energy </span>Certificates
        </h2>
        <p className="text-lg font-medium text-text-neutral-primary">
          iSunCoin serves as an observing node for power generation systems. It analyzes whether the
          energy qualifies as clean and renewable and records the total amount of electricity
          generated. Offer computational services while also promoting the use and adoption of green
          energy.
        </p>
      </div>
    </section>
  );
};

export default GreenEnergyCertificates;
