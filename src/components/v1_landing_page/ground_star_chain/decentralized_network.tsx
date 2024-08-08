const DecentralizedNetwork = () => {
  return (
    <section className="mx-auto flex min-h-464px max-w-1440px items-center bg-starsWeb bg-auto bg-right bg-no-repeat p-80px">
      <div className="flex w-50% flex-col gap-48px pr-80px">
        <h2 className="text-48px font-semibold">
          <span className="text-text-neutral-primary">Decentralized </span>
          <span className="text-text-brand-primary-lv2">Network</span>
        </h2>
        <p className="text-lg font-medium text-text-neutral-primary">
          The Ground StarChain operates on a peer-to-peer network architecture, enabling data to be
          directly exchanged between nodes. This decentralized data transmission method enhances
          system flexibility and resilience while reducing the risk of single-point failures in the
          network, facilitating faster data transmission and sharing.
        </p>
      </div>
    </section>
  );
};

export default DecentralizedNetwork;
