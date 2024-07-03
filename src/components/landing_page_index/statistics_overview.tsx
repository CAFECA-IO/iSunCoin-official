const StatisticsOverview = () => {
  return (
    <section className="relative h-908px py-157px">
      <div className="ml-57px flex h-594px w-1103px justify-end bg-landingDataGraphic bg-contain bg-center bg-no-repeat"></div>
      <div className="absolute right-120px top-120px flex w-360px flex-col gap-40px text-center">
        <p className="text-sm font-medium text-text-brand-primary-lv2">OVERVIEW</p>
        <div className="flex h-176px flex-col gap-36px rounded-lg bg-surface-neutral-surface-lv1 px-30px py-20px shadow-regularShadow">
          <div className="text-64px font-semibold text-text-brand-primary-lv2">{`4`}</div>
          <p className="text-xl">{`nodes`}</p>
        </div>
        <div className="flex h-176px flex-col gap-36px rounded-lg bg-surface-neutral-surface-lv1 px-30px py-20px shadow-regularShadow">
          <div className="text-64px font-semibold text-text-brand-primary-lv2">{`11.2U`}</div>
          <p className="text-xl">{`24-hour computing power usage`}</p>
        </div>
        <div className="flex h-176px flex-col gap-36px rounded-lg bg-surface-neutral-surface-lv1 px-30px py-20px shadow-regularShadow">
          <div className="text-64px font-semibold text-text-brand-primary-lv2">{`21.4ΤΒ`}</div>
          <p className="text-xl">{`Data Storage`}</p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsOverview;
