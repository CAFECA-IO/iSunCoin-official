import Image from 'next/image';

const Deposit = () => {
  return (
    <section className="flex flex-col items-center space-y-40px p-80px">
      <div className="space-y-16px">
        <h1 className="text-center text-36px font-semibold text-text-neutral-primary">
          Deposit: 1 ISC per vote
        </h1>
        <p className="text-2xl font-semibold text-text-neutral-secondary">
          To ensure fair and transparent community governance, all proposals are decided by voting.
          Each community member can cast one vote, either for or against a proposal. To enhance the
          quality of voting and reduce random voting or malicious attacks, each vote requires a
          deposit of 1 ISC as a security deposit. All the participants can claim governance rewards.
        </p>
      </div>

      <div className="flex justify-center gap-120px">
        {/* O */}
        <div className="flex flex-col items-center gap-8px">
          <div className="flex">
            <Image src="/elements/o_approval.svg" alt="o_approval" width={200} height={200}></Image>
          </div>
          <div className="space-y-8px p-16px text-center">
            <h4 className="text-xl font-semibold text-text-neutral-primary">Approval</h4>
            <p className="text-text-neutral-secondary">
              Refund proposal deposits, <br /> Refund voting deposit.
            </p>
          </div>
        </div>

        {/* X */}
        <div className="flex flex-col items-center gap-8px">
          <div className="flex">
            <Image
              src="/elements/x_rejection.svg"
              alt="x_rejection"
              width={200}
              height={200}
            ></Image>
          </div>
          <div className="space-y-8px p-16px text-center">
            <h4 className="text-xl font-semibold text-text-neutral-primary">Rejection</h4>
            <p className="text-text-neutral-secondary">
              Forfeit proposal deposit <br /> (Goes to reward pool), <br />
              Refund voting deposit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deposit;
