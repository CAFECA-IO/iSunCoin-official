const HeroSectionOfGround = () => {
  return (
    <section className="mx-auto flex h-screen max-w-1440px items-center justify-end bg-groundKv bg-cover bg-center bg-no-repeat px-80px">
      <div className="flex flex-col items-end gap-16px">
        <h1 className="text-48px font-normal">
          <span className="text-text-neutral-primary">Ground </span>
          <span className="text-text-brand-primary-lv2">StarChain</span>
        </h1>

        {/* divider */}
        <div>
          <svg
            width="320"
            height="5"
            viewBox="0 0 320 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2"
              y1="2.5"
              x2="318"
              y2="2.5"
              stroke="#314362"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Button */}
        <button
          type="button"
          className="flex gap-8px rounded-xs bg-button-surface-strong-primary px-32px py-14px"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              fill="none"
              viewBox="0 0 24 25"
            >
              <path
                fill="#996301"
                fillRule="evenodd"
                d="M20.913 4.95a1.25 1.25 0 0 0-1.439-1.439l-3.965.661a23.78 23.78 0 0 1 2.525 2.192 23.55 23.55 0 0 1 2.217 2.558l.662-3.972Zm-1.232 5.763a21.883 21.883 0 0 0-2.708-3.288 21.884 21.884 0 0 0-3.256-2.687 1.71 1.71 0 0 0-.107.105L9.814 8.9a.748.748 0 0 1-.017.018l-2.8 2.994a3.904 3.904 0 0 0-.357 4.891l5.832-5.832a.75.75 0 0 1 1.06 1.06l-5.816 5.817a3.904 3.904 0 0 0 4.796-.42l2.99-2.797a.762.762 0 0 1 .026-.025l4.054-3.791c.034-.033.068-.067.1-.102Zm-2.79 4.673 3.715-3.476c.513-.48.853-1.115.969-1.807l.817-4.906a2.75 2.75 0 0 0-3.164-3.165l-4.907.818a3.193 3.193 0 0 0-1.807.968L9.038 7.533 6.62 6.727a1.75 1.75 0 0 0-1.684.325L2.079 9.469c-1.024.866-.733 2.515.525 2.978l2.02.744a5.406 5.406 0 0 0 .943 4.685l-2.595 2.595a.75.75 0 0 0 1.06 1.06l2.606-2.605a5.407 5.407 0 0 0 4.595.874l.744 2.02c.464 1.258 2.112 1.549 2.978.525l2.418-2.857a1.75 1.75 0 0 0 .324-1.684l-.806-2.418Zm-1.205 1.127-2.149 2.01c-.287.269-.596.5-.92.694l.768 2.084a.25.25 0 0 0 .425.075l2.418-2.857a.25.25 0 0 0 .046-.24l-.588-1.766ZM5.207 11.808a5.42 5.42 0 0 1 .694-.92l2.01-2.15-1.766-.588a.25.25 0 0 0-.24.047l-2.857 2.417a.25.25 0 0 0 .075.426l2.084.768Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-lg font-medium text-button-text-primary-solid">Get Started</p>
        </button>
      </div>
    </section>
  );
};

export default HeroSectionOfGround;
