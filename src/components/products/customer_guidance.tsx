const CustomerGuidance = () => {
  return (
    <section className="mx-auto flex max-w-1440px justify-center gap-32px pb-40px pt-20px">
      {/* ===== Contact Us ===== */}
      <div className="group min-h-600px max-w-600px flex-1 bg-surface-brand-secondary-30 bg-contactUsBg bg-cover bg-center bg-no-repeat bg-blend-multiply hover:bg-surface-brand-secondary-50">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h3 className="mb-40px pt-100px text-center text-48px font-bold text-text-neutral-invert">
            What I need?
          </h3>

          <p className="mx-60px text-center text-lg font-semibold text-transparent group-hover:text-text-neutral-invert">
            If you are unsure about which device model you need, you can contact us for an
            assessment to determine the most suitable product for you.
          </p>

          <button
            type="button"
            className="mt-100px flex items-center gap-8px rounded-xs border border-button-stroke-primary px-32px py-14px text-button-text-primary hover:border-surface-brand-primary-soft hover:bg-surface-brand-primary-soft hover:text-text-neutral-primary"
          >
            <p className="text-lg font-medium">Contact Us</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8.473 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.061l-6 6a.75.75 0 1 1-1.06-1.06l5.47-5.47-5.47-5.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* ===== More Detail ===== */}
      <div className="group min-h-600px max-w-600px flex-1 bg-surface-brand-secondary-30 bg-moreDetailBg bg-cover bg-center bg-no-repeat bg-blend-multiply hover:bg-surface-brand-secondary-50">
        <div className="flex h-full w-full flex-col items-center justify-center hover:backdrop-brightness-50">
          <h3 className="mb-40px pt-100px text-center text-48px font-bold text-text-neutral-invert">
            Most suitable product
          </h3>

          <p className="mx-60px text-center text-lg font-semibold text-transparent group-hover:text-text-neutral-invert">
            If you want to learn more about the device models, we provide detailed product
            specifications for your reference.
          </p>

          <button
            type="button"
            className="mt-125px flex items-center gap-8px rounded-xs border border-button-stroke-primary px-32px py-14px text-button-text-primary hover:border-surface-brand-primary-soft hover:bg-surface-brand-primary-soft hover:text-text-neutral-primary"
          >
            <p className="text-lg font-medium">More detail</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8.473 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.061l-6 6a.75.75 0 1 1-1.06-1.06l5.47-5.47-5.47-5.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerGuidance;
