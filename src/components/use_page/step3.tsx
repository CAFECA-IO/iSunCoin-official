const Step2 = () => {
  return (
    <section className="space-y-56px px-80px py-40px">
      <h1 className="text-center text-36px font-semibold text-text-neutral-primary">
        Utilize Generative AI Services
      </h1>

      {/* Chat */}
      <div className="h-350px bg-surface-neutral-main-background p-20px">
        {/* Help Card */}
        <div className="flex max-w-fit flex-col gap-8px rounded-lg border border-chat-bubbles-stroke-bubble-outline bg-chat-bubbles-surface-secondary p-20px">
          <h4 className="text-xl font-bold text-chat-bubbles-text-primary">How can we help?</h4>
          <p className="font-medium text-chat-bubbles-text-primary">You can ask questions like:</p>
          <ul className="list-inside list-disc font-medium text-chat-bubbles-text-primary">
            <li>{`What's Preline UI?`}</li>
            <li>How many Starter Pages & Examples are there?</li>
            <li>Is there a PRO version?</li>
          </ul>
        </div>
      </div>

      <div className="flex gap-16px">
        <input
          type="text"
          placeholder="Enter your prompt and let AI draw for you (Requires 1 ISC)"
          className="grow rounded-sm border border-input-stroke-input bg-input-surface-input-background px-12px py-10px font-medium shadow-downDropShadowSM outline-none placeholder:text-input-text-input-placeholder"
        />

        <button
          type="button"
          className="rounded-xs bg-button-surface-strong-secondary px-24px py-10px font-medium text-button-text-invert"
        >
          Try it Now
        </button>
      </div>

      <p className="text-base font-normal text-text-neutral-secondary">
        {`iSunCoin supports Docker-based cloud service deployments, making it easy for developers and businesses to deploy and manage applications. You can also register a unique blockchain domain name for these services. Your cloud service will be randomly assigned to stable iSunCoin nodes to ensure high availability, providing users with a secure, efficient, and flexible cloud service experience.`}
      </p>
    </section>
  );
};

export default Step2;
