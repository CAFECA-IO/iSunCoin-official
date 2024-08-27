import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { IRealTimeData, defaultRealTimeData, IGlobalMiningData } from '@/interfaces/real_time_data';
import { numberWithCommas } from '@/lib/utils/common';
import { ISUNCOIN_API_V1 } from '@/constants/url';

enum MapColor {
  PHASE_1 = '#94BBEA',
  PHASE_2 = '#5E8ACC',
  PHASE_3 = '#FFBC00',
  PHASE_4 = '#FF9000',
  PHASE_5 = '#ED3B3B',
}

const RealTimeData = () => {
  const { t } = useTranslation('common');
  const [globalData, setGlobalData] = useState<IGlobalMiningData[]>([]);
  const [realTimeData, setRealTimeData] = useState<IRealTimeData>(defaultRealTimeData);

  useEffect(() => {
    // Info:(20240827 - Julian) 取得四格資料
    fetch(ISUNCOIN_API_V1.REAL_TIME_DATA)
      .then((response) => response.json())
      .then((data) => setRealTimeData(data));

    // Info:(20240827 - Julian) 取得全球挖礦資料
    fetch(ISUNCOIN_API_V1.GLOBAL_MINING_DATA)
      .then((response) => response.json())
      .then((data) => setGlobalData(data));
  }, []);

  const { totalIssuance, totalNodes, totalComputingPower, oneDayTransactions } = realTimeData;

  const mapGraph = globalData.length ? (
    <ComposableMap projectionConfig={{ rotate: [-20, 0, 0] }}>
      {/* Info:(20240812 - Julian) Add shadow to the map */}
      <defs>
        <filter id="shadow">
          <feDropShadow dy="8" stdDeviation="0.1" floodColor="#192E47" />
        </filter>
      </defs>
      <Geographies
        stroke="white"
        strokeWidth={0.25}
        geography="/real_time_data/feature.json"
        filter="url(#shadow)"
      >
        {({ geographies }) => {
          return geographies.map((geo) => {
            // Info:(20240827 - Julian) Find the data of the country
            const d = globalData.find((s) => s.countryCode === geo.id) ?? {
              name: '',
              countryCode: '',
              minedBlocks: 0,
            };

            // Info:(20240827 - Julian) Set the color according to the mined data
            const color =
              d.minedBlocks > 800
                ? MapColor.PHASE_5
                : d.minedBlocks > 600
                  ? MapColor.PHASE_4
                  : d.minedBlocks > 400
                    ? MapColor.PHASE_3
                    : d.minedBlocks > 200
                      ? MapColor.PHASE_2
                      : MapColor.PHASE_1;
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: color,
                    outline: 'none',
                  },
                  hover: {
                    fill: 'white',
                    outline: 'none',
                  },
                  pressed: {
                    outline: 'none',
                  },
                }}
              />
            );
          });
        }}
      </Geographies>
    </ComposableMap>
  ) : null;

  const bgColorP1 = `bg-skyBlue`;
  const bgColorP2 = `bg-darkSkyBlue`;
  const bgColorP3 = `bg-lightOrange`;
  const bgColorP4 = `bg-darkOrange`;
  const bgColorP5 = `bg-darkRed`;

  return (
    <div
      id="real-time-data"
      className="flex w-full flex-col items-center bg-surface-neutral-main-background"
    >
      {/* Info:(20240812 - Julian) Data */}
      <div className="flex w-full flex-col items-center gap-24px px-20px pt-80px md:px-80px md:pb-40px">
        <h1 className="text-xl font-bold text-text-neutral-primary">
          {t('HOME_PAGE.REAL_TIME_DATA_TITLE')}
        </h1>
        <div className="grid w-fit grid-flow-row grid-cols-1 justify-items-center gap-40px sm:grid-cols-2 lg:grid-cols-4">
          {/* Info:(20240812 - Julian) Total Issuance */}
          <div className="flex w-200px flex-col items-center gap-36px rounded-sm bg-surface-neutral-surface-lv2 px-30px py-20px shadow-downDropShadowS">
            <p className="text-sm text-text-neutral-secondary">
              {t('HOME_PAGE.REAL_TIME_TOTAL_ISSUANCE')}
            </p>
            <p className="text-32px font-bold text-text-brand-secondary-lv2">
              {numberWithCommas(totalIssuance)}
            </p>
            <p className="text-sm text-text-neutral-secondary">{t('HOME_PAGE.REAL_TIME_ISC')}</p>
          </div>
          {/* Info:(20240812 - Julian) Total Nodes */}
          <div className="flex w-200px flex-col items-center gap-36px rounded-sm bg-surface-neutral-surface-lv2 px-30px py-20px shadow-downDropShadowS">
            <p className="text-sm text-text-neutral-secondary">
              {t('HOME_PAGE.REAL_TIME_TOTAL_NODES')}
            </p>
            <p className="text-32px font-bold text-text-brand-secondary-lv2">
              {numberWithCommas(totalNodes)}
            </p>
            <p className="text-sm text-text-neutral-secondary">{t('HOME_PAGE.REAL_TIME_NODES')}</p>
          </div>
          {/* Info:(20240812 - Julian) Total Computing Power */}
          <div className="flex w-200px flex-col items-center gap-36px rounded-sm bg-surface-neutral-surface-lv2 px-30px py-20px shadow-downDropShadowS">
            <p className="text-sm text-text-neutral-secondary">
              {t('HOME_PAGE.REAL_TIME_TOTAL_COMPUTING_POWER')}
            </p>
            <p className="text-32px font-bold text-text-brand-secondary-lv2">
              {numberWithCommas(totalComputingPower)}
            </p>
            <p className="text-sm text-text-neutral-secondary">{t('HOME_PAGE.REAL_TIME_TOPS')}</p>
          </div>
          {/* Info:(20240812 - Julian) 24-Hour Transactions */}
          <div className="flex w-200px flex-col items-center gap-36px rounded-sm bg-surface-neutral-surface-lv2 px-30px py-20px shadow-downDropShadowS">
            <p className="text-sm text-text-neutral-secondary">
              {t('HOME_PAGE.REAL_TIME_24_HR_TXNS')}
            </p>
            <p className="text-32px font-bold text-text-brand-secondary-lv2">
              {numberWithCommas(oneDayTransactions)}
            </p>
            <p className="text-sm text-text-neutral-secondary">{t('HOME_PAGE.REAL_TIME_TXNS')}</p>
          </div>
        </div>
      </div>
      {/* Info:(20240812 - Julian) Map */}
      <div className="flex w-full flex-col items-center px-20px py-40px md:px-80px">
        {/* Info:(20240812 - Julian) World Map */}
        <div className="relative w-full">{mapGraph}</div>
        {/* Info:(20240812 - Julian) Map Legend */}
        <div className="flex w-full flex-col items-center gap-10px text-sm font-bold md:-mt-120px md:px-80px md:text-xl">
          <p className="text-text-neutral-primary">{t('HOME_PAGE.REAL_TIME_24_HR_MINED')}</p>
          <div className="grid w-full grid-flow-row grid-cols-5 items-center overflow-hidden whitespace-nowrap rounded-full border-3px border-white text-center">
            <div className={`${bgColorP1} text-text-neutral-solid-light`}>0-200</div>
            <div className={`${bgColorP2} text-text-neutral-solid-light`}>200-400</div>
            <div className={`${bgColorP3} text-text-neutral-solid-dark`}>400-600</div>
            <div className={`${bgColorP4} text-text-neutral-solid-light`}>600-800</div>
            <div className={`${bgColorP5} text-text-neutral-solid-light`}>800-1000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeData;
