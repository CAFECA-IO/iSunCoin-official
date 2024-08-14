import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

// Info: (20240814 - Liz) 暫時關閉未有功能的按鈕
const disableButton: boolean = true;

// Info: (20240814 - Liz) Spot component is a circle with a time range and videoName below it.
interface SpotProps {
  videoTime: string;
  videoName: string;
}
const Spot = ({ videoTime, videoName }: SpotProps) => (
  <div className="relative h-46px w-46px rounded-full border-10px border-stepper-surface-base bg-surface-neutral-solid-light">
    <div className="absolute left-1/2 top-full w-fit -translate-x-1/2 text-nowrap pt-10px text-center">
      <p>{videoTime}</p>
      <p>{videoName}</p>
    </div>
  </div>
);

// Info: (20240814 - Liz) Line component is a line between two spots.
const Line = () => <div className="h-6px grow bg-stepper-surface-base"></div>;

// Info: (20240814 - Liz) Timeline component is a row of spots and lines.
const Timeline = () => {
  const spots = [
    { videoTime: '00:00 - 01:00', videoName: 'Show time' },
    { videoTime: '01:00 - 02:00', videoName: 'Happy university' },
    { videoTime: '02:00 - 03:00', videoName: 'Modern Family' },
    { videoTime: '03:00 - 04:00', videoName: 'News' },
    { videoTime: '04:00 - 05:00', videoName: 'Your show' },
  ];

  return (
    <div className="flex items-center justify-between px-36px pb-50px">
      {spots.map((spot, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={spot.videoTime}>
          <Spot videoTime={spot.videoTime} videoName={spot.videoName} />
          {index < spots.length - 1 && <Line />}
        </React.Fragment>
      ))}
    </div>
  );
};

const Step4 = () => {
  const { t } = useTranslation('common');

  //   const videoId = 'lrWeG6cYOfw'; // ToDo: (20240814 - Liz) 實作嵌入影片

  return (
    <section className="space-y-56px px-80px py-40px">
      {/* title */}
      <h1 className="text-center text-36px font-semibold text-text-neutral-primary">
        {t('USE_PAGE.BROADCAST_YOUR_NEWS_ON_ISUNTV')}
      </h1>

      {/* Youtube video */}
      {/*  // ToDo: (20240814 - Liz) 實作嵌入影片
        <div className="flex justify-center">
            <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            title="default"
            width={1088}
            height={612}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        </div>
      */}

      {/* fake Youtube video */}
      <div className="flex justify-center bg-surface-neutral-main-background">
        <Image
          src="/elements/fake_video_cover.svg"
          alt="fake_video_cover"
          width={1088}
          height={612}
        ></Image>
      </div>

      {/* timeline */}
      <Timeline />

      {/* input */}
      <div className="flex gap-16px">
        <input
          type="text"
          placeholder={t('USE_PAGE.ENTER_A_TOPIC_AND_LET_AI_BROADCAST_FOR_YOU_REQUIRES_10_ISC')}
          className="grow rounded-sm border border-input-stroke-input bg-input-surface-input-background px-12px py-10px font-medium shadow-downDropShadowSM outline-none placeholder:text-input-text-input-placeholder"
        />

        {/* videoName */}
        <button
          type="button"
          disabled={disableButton}
          className="rounded-xs bg-button-surface-strong-secondary px-24px py-10px font-medium text-button-text-invert hover:bg-button-surface-strong-secondary-hover disabled:bg-button-surface-strong-disable disabled:text-button-text-disable"
        >
          {disableButton ? t('COMMON.COMING_SOON') : t('COMMON.TRY_IT_NOW')}
        </button>
      </div>

      <p className="text-base font-normal text-text-neutral-secondary">
        {t('USE_PAGE.BROADCAST_YOUR_NEWS_ON_ISUNTV_DESCRIPTION')}
      </p>
    </section>
  );
};

export default Step4;
