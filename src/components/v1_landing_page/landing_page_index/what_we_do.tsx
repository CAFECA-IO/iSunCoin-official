import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import lottie from 'lottie-web';
// import {useTranslation} from 'next-i18next'; // ToDo: (240704 - Liz) 等之後串翻譯檔
// import {TranslateFunction} from '../../interfaces/locale'; // ToDo: (240704 - Liz) 等之後串翻譯檔

const WhatWeDo = () => {
  // const {t}: {t: TranslateFunction} = useTranslation('common'); // ToDo: (240704 - Liz) 等之後串翻譯檔

  /* Animations */
  const lottiePacking = useRef<HTMLDivElement>(null);
  const lottieConnection1 = useRef<HTMLDivElement>(null);
  const lottieAuditing = useRef<HTMLDivElement>(null);
  const lottieConnection2 = useRef<HTMLDivElement>(null);
  const lottieSafetyBox = useRef<HTMLDivElement>(null);
  const lottieConnection3 = useRef<HTMLDivElement>(null);
  const lottieEnding = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(100);

  useEffect(() => {
    // Info: Handler to call on window resize
    const handleResize = () => {
      // Info: Set window width to state
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const animDuration = 1000;

    const animPacking = lottie.loadAnimation({
      container: lottiePacking.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/v1/animations/packing.json',
    });
    const animConnection1 = lottie.loadAnimation({
      container: lottieConnection1.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/v1/animations/connection.json',
    });
    const animAuditing = lottie.loadAnimation({
      container: lottieAuditing.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/v1/animations/auditing.json',
    });
    const animConnection2 = lottie.loadAnimation({
      container: lottieConnection2.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/v1/animations/connection_2.json',
    });
    const animSafetyBox = lottie.loadAnimation({
      container: lottieSafetyBox.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/v1/animations/three_safety_box.json',
    });
    const animConnection3 = lottie.loadAnimation({
      container: lottieConnection3.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/v1/animations/connection_3.json',
    });
    const animEnding = lottie.loadAnimation({
      container: lottieEnding.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/v1/animations/ending.json',
    });

    function animateBodyMoving(duration: number) {
      const animStartY = windowWidth >= 1024 ? 2200 : 3000;
      const scrollPosition = window.scrollY - animStartY;

      const framePacking = animPacking.totalFrames * (scrollPosition / duration);
      const frameConnection1 =
        animConnection1.totalFrames * (((scrollPosition - 800) / duration) * 2);
      const frameAuditing = animAuditing.totalFrames * (((scrollPosition - 1150) / duration) * 1.8);
      const frameConnection2 =
        animConnection2.totalFrames * (((scrollPosition - 1500) / duration) * 2);
      const frameSafetyBox = animSafetyBox.totalFrames * (((scrollPosition - 1900) / duration) * 2);
      const frameConnection3 =
        animConnection3.totalFrames * (((scrollPosition - 2300) / duration) * 2);

      /* Packing frame */
      if (scrollPosition > 200 && scrollPosition < 1100) {
        if (framePacking <= 0) animPacking.goToAndStop(1, true);
        animPacking.goToAndStop(framePacking, true);
      }
      /* Connection 1 frame */
      if (scrollPosition > 800 && scrollPosition < 1300) {
        if (frameConnection1 <= 0) animConnection1.goToAndStop(0, true);
        animConnection1.goToAndStop(frameConnection1, true);
      }
      /* Auditing frame */
      if (scrollPosition > 1150 && scrollPosition < 2000) {
        if (frameAuditing <= 0) animConnection1.goToAndStop(-1, true);
        animAuditing.goToAndStop(frameAuditing, true);
      }
      /* Connection 2 frame */
      if (scrollPosition > 1500 && scrollPosition < 2000) {
        if (frameConnection2 <= 0) animConnection2.goToAndStop(-1, true);
        animConnection2.goToAndStop(frameConnection2, true);
      }
      /* SafetyBox frame */
      if (scrollPosition > 1900 && scrollPosition < 2700) {
        if (frameSafetyBox <= 0) animSafetyBox.goToAndStop(1, true);
        animSafetyBox.goToAndStop(frameSafetyBox, true);
      }
      /* Connection 3 frame */
      if (scrollPosition > 2300 && scrollPosition < 2700) {
        if (frameConnection3 <= 0) animConnection3.goToAndStop(0, true);
        animConnection3.goToAndStop(frameConnection3, true);
      }
    }
    const onScroll = () => animateBodyMoving(animDuration);

    document.addEventListener('scroll', onScroll);

    return () => {
      animPacking.destroy();
      animConnection1.destroy();
      animAuditing.destroy();
      animConnection2.destroy();
      animSafetyBox.destroy();
      animConnection3.destroy();
      animEnding.destroy();
      document.removeEventListener('scroll', onScroll);
    };
  }, [windowWidth]);

  return (
    <section className="mx-auto max-w-1440px">
      <div className="p-80px pb-120px text-text-neutral-primary">
        {/* ===== Title ===== */}
        <div className="flex flex-col items-center space-y-16px py-14">
          {/* <h2 className="text-48px font-bold">{t('HOME_PAGE.WHAT_WE_DO_TITLE')}</h2> // ToDo: (240704 - Liz) 等之後串翻譯檔 */}
          <h2 className="text-48px font-bold">What we do</h2>

          <Image src="/v1/elements/decoration.svg" width={40} height={10} alt="decoration" />
        </div>

        {/* ===== Animation ===== */}
        <div className="flex flex-col items-center text-left">
          {/* Packing */}
          <div className="flex flex-row items-center space-y-0 px-20">
            <div ref={lottiePacking} className="h-500px w-500px flex-1"></div>
            <div className="w-2/5 space-y-6">
              <h2 className="text-36px font-semibold">
                {/* {t('HOME_PAGE.WHAT_WE_DO_BLOCK_1_TITLE')} // ToDo: (240704 - Liz) 等之後串翻譯檔 */}
                Zero-Knowledge Proof Data Compression and Packaging
              </h2>

              <div className="text-base text-text-neutral-secondary">
                {/* <p>{t('HOME_PAGE.WHAT_WE_DO_BLOCK_1_DESCRIPTION_1')}</p> // ToDo: (240704 - Liz) 等之後串翻譯檔 */}
                {/* <p>{t('HOME_PAGE.WHAT_WE_DO_BLOCK_1_DESCRIPTION_2')}</p> // ToDo: (240704 - Liz) 等之後串翻譯檔 */}
                {/* <p>{t('HOME_PAGE.WHAT_WE_DO_BLOCK_1_DESCRIPTION_3')}</p> // ToDo: (240704 - Liz) 等之後串翻譯檔 */}
                <p>
                  We enhance efficiency by compressing data sets off-chain, reducing on-chain
                  processing costs. Using advanced zero-knowledge proof tech, users submit secure
                  data, meeting certification needs without privacy compromise. This ensures
                  blockchain storage with both credibility and privacy intact.
                </p>
              </div>
            </div>
          </div>

          {/* Connection 1 */}
          <div ref={lottieConnection1} className="h-300px w-1000px"></div>

          {/* Auditing */}
          <div className="flex flex-row items-center space-y-0 px-20">
            <div className="w-2/5 space-y-6">
              {/* <h2 className="text-32px font-bold">{t('HOME_PAGE.WHAT_WE_DO_BLOCK_2_TITLE')}</h2> // ToDo: (240704 - Liz) 等之後串翻譯檔 */}
              <h2 className="text-36px font-semibold">Everyone is a Witness</h2>

              <div className="text-base text-text-neutral-secondary">
                {/* <p>{t('HOME_PAGE.WHAT_WE_DO_BLOCK_2_DESCRIPTION_1')}</p> // ToDo: (240704 - Liz) 等之後串翻譯檔 */}
                {/* <p>{t('HOME_PAGE.WHAT_WE_DO_BLOCK_2_DESCRIPTION_2')}</p> // ToDo: (240704 - Liz) 等之後串翻譯檔 */}
                {/* <p>{t('HOME_PAGE.WHAT_WE_DO_BLOCK_2_DESCRIPTION_3')}</p> // ToDo: (240704 - Liz) 等之後串翻譯檔 */}
                <p>
                  Using decentralized audits, we bolster data credibility and tamper resistance.
                  With internet and storage, anyone can be a witness, aiding oversight. Our
                  incentive system attracts more witnesses, fostering a robust blockchain ecosystem.
                </p>
              </div>
            </div>
            <div ref={lottieAuditing} className="h-500px w-500px flex-1"></div>
          </div>

          {/* Connection 2 */}
          <div ref={lottieConnection2} className="h-300px w-1000px"></div>

          {/* SafetyBox */}
          <div className="flex flex-row items-center space-y-0 px-20">
            <div ref={lottieSafetyBox} className="h-500px w-500px flex-1"></div>
            <div className="flex w-2/5 flex-col space-y-6">
              {/* <h2 className="text-32px font-bold">{t('HOME_PAGE.WHAT_WE_DO_BLOCK_3_TITLE')}</h2> // ToDo: (240704 - Liz) 等之後串翻譯檔 */}
              <h2 className="text-36px font-semibold">Creating Cross-Chain Hybrid Proof</h2>

              {/* <p className="text-base">{t('HOME_PAGE.WHAT_WE_DO_BLOCK_3_DESCRIPTION')}</p> // ToDo: (240704 - Liz) 等之後串翻譯檔 */}
              <p className="text-base text-text-neutral-secondary">
                Beyond BOLT nodes, data is sent to chains like Ethereum and Bitcoin using
                cross-chain protocols. This layered protection minimizes attack risks, ensuring
                rigorous safeguarding.
              </p>
            </div>
          </div>

          {/* Connection 3 */}
          <div ref={lottieConnection3} className="h-300px w-1000px"></div>

          {/* Distributed Computing */}
          <div className="flex flex-row items-center space-y-0 px-20">
            <div className="w-2/5 space-y-6">
              {/* <h2 className="text-36px font-semibold">{t('HOME_PAGE.WHAT_WE_DO_BLOCK_4_TITLE')}</h2> // ToDo: (240704 - Liz) 等之後串翻譯檔 */}
              <h2 className="text-36px font-semibold">Distributed Computing</h2>

              <div className="text-base text-text-neutral-secondary">
                {/* <p>{t('HOME_PAGE.WHAT_WE_DO_BLOCK_2_DESCRIPTION_1')}</p> // ToDo: (240704 - Liz) 等之後串翻譯檔 */}
                {/* <p>{t('HOME_PAGE.WHAT_WE_DO_BLOCK_2_DESCRIPTION_2')}</p> // ToDo: (240704 - Liz) 等之後串翻譯檔 */}
                {/* <p>{t('HOME_PAGE.WHAT_WE_DO_BLOCK_2_DESCRIPTION_3')}</p> // ToDo: (240704 - Liz) 等之後串翻譯檔 */}
                <p>
                  After data is stored on iSunCoin, you can utilize smart contracts to commission
                  other iSunCoin nodes to set up servers, perform AI training or computations,
                  execute big data analysis, or run a specified code segment. Upon completing the
                  computation, the node will store the results back into the smart contract.
                </p>
              </div>
            </div>
            <div ref={lottieEnding} className="h-500px w-500px flex-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
