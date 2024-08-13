import { useState, useEffect } from 'react';
import { csv } from 'd3-fetch';
import { useTranslation } from 'next-i18next';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

interface ICSVData {
  name: string;
  FID: string;
  mined: number;
}

enum MapColor {
  PHASE_1 = '#94BBEA',
  PHASE_2 = '#5E8ACC',
  PHASE_3 = '#FFBC00',
  PHASE_4 = '#FF9000',
  PHASE_5 = '#ED3B3B',
}

const RealTimeData = () => {
  const { t } = useTranslation('common');
  const [csvData, setCsvData] = useState<ICSVData[]>([]);

  useEffect(() => {
    csv('/real_time_data/world.csv').then((data) => {
      const { columns } = data;
      // Info:(20240812 - Julian) 根據 columns 將資料轉換成物件
      const parsedData = data.map((row: Record<string, string>) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const obj: Record<string, any> = {};
        columns.forEach((column: string) => {
          obj[column] = row[column];
        });
        return obj;
      });

      setCsvData(parsedData as ICSVData[]);
    });
  }, []);

  const mapGraph =
    csvData && csvData.length ? (
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
              const d = csvData.find((s) => s.name === geo.properties.name) ?? {
                name: '',
                mined: 0,
              };

              const color =
                d.mined > 800
                  ? MapColor.PHASE_5
                  : d.mined > 600
                    ? MapColor.PHASE_4
                    : d.mined > 400
                      ? MapColor.PHASE_3
                      : d.mined > 200
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
    <div className="flex w-full flex-col items-center bg-surface-neutral-main-background">
      {/* Info:(20240812 - Julian) Data */}
      <div className="flex w-full flex-col items-center gap-24px px-80px pb-40px pt-80px">
        <h1 className="text-xl font-bold text-text-neutral-primary">
          {t('HOME_PAGE.REAL_TIME_DATA_TITLE')}
        </h1>
        <div className="grid w-full grid-flow-row grid-cols-1 gap-80px md:grid-cols-4">
          {/* Info:(20240812 - Julian) Total Issuance */}
          <div className="flex flex-col items-center gap-36px rounded-sm bg-surface-neutral-surface-lv2 px-30px py-20px shadow-downDropShadowS">
            <p className="text-sm text-text-neutral-secondary">
              {t('HOME_PAGE.REAL_TIME_TOTAL_ISSUANCE')}
            </p>
            <p className="text-32px font-bold text-text-brand-secondary-lv2">856,721</p>
            <p className="text-sm text-text-neutral-secondary">{t('HOME_PAGE.REAL_TIME_ISC')}</p>
          </div>
          {/* Info:(20240812 - Julian) Total Nodes */}
          <div className="flex flex-col items-center gap-36px rounded-sm bg-surface-neutral-surface-lv2 px-30px py-20px shadow-downDropShadowS">
            <p className="text-sm text-text-neutral-secondary">
              {t('HOME_PAGE.REAL_TIME_TOTAL_NODES')}
            </p>
            <p className="text-32px font-bold text-text-brand-secondary-lv2">47,511</p>
            <p className="text-sm text-text-neutral-secondary">{t('HOME_PAGE.REAL_TIME_NODES')}</p>
          </div>
          {/* Info:(20240812 - Julian) Total Computing Power */}
          <div className="flex flex-col items-center gap-36px rounded-sm bg-surface-neutral-surface-lv2 px-30px py-20px shadow-downDropShadowS">
            <p className="text-sm text-text-neutral-secondary">
              {t('HOME_PAGE.REAL_TIME_TOTAL_COMPUTING_POWER')}
            </p>
            <p className="text-32px font-bold text-text-brand-secondary-lv2">2,687,145</p>
            <p className="text-sm text-text-neutral-secondary">{t('HOME_PAGE.REAL_TIME_TOPS')}</p>
          </div>
          {/* Info:(20240812 - Julian) 24-Hour Transactions */}
          <div className="flex flex-col items-center gap-36px rounded-sm bg-surface-neutral-surface-lv2 px-30px py-20px shadow-downDropShadowS">
            <p className="text-sm text-text-neutral-secondary">
              {t('HOME_PAGE.REAL_TIME_24_HR_TXNS')}
            </p>
            <p className="text-32px font-bold text-text-brand-secondary-lv2">540,000</p>
            <p className="text-sm text-text-neutral-secondary">{t('HOME_PAGE.REAL_TIME_TXNS')}</p>
          </div>
        </div>
      </div>
      {/* Info:(20240812 - Julian) Map */}
      <div className="flex w-full flex-col items-center px-80px py-40px">
        {/* Info:(20240812 - Julian) World Map */}
        <div className="relative w-full">{mapGraph}</div>
        {/* Info:(20240812 - Julian) Map Legend */}
        <div className="-mt-120px flex w-full flex-col items-center gap-10px px-80px text-xl font-bold">
          <p className="text-text-neutral-primary">{t('HOME_PAGE.REAL_TIME_24_HR_MINED')}</p>
          <div className="grid w-full grid-flow-row grid-cols-5 items-center overflow-hidden rounded-full border-3px border-white text-center">
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