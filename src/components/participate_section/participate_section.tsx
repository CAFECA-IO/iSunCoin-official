import Image from 'next/image';
import { useState } from 'react';
import useOuterClick from '@/lib/hooks/use_outer_click';

enum iSunCoinVersion {
  WINDOWS = 'Windows',
  MAC = 'Mac',
  LINUX = 'Linux',
}

const ParticipateSection = () => {
  const [selectedVersion, setSelectedVersion] = useState(iSunCoinVersion.WINDOWS);

  const {
    targetRef: versionRef,
    componentVisible: versionVisible,
    setComponentVisible: setVersionVisible,
  } = useOuterClick<HTMLDivElement>(false);

  const handleVersionClick = () => setVersionVisible(!versionVisible);

  const versionDropMenu = Object.values(iSunCoinVersion).map((version) => (
    <div
      key={version}
      className="w-full p-12px py-8px text-left hover:bg-drag-n-drop-surface-hover"
      onClick={() => {
        setSelectedVersion(version);
        setVersionVisible(false);
      }}
    >
      {version}
    </div>
  ));

  return (
    <div className="flex w-full items-center justify-between">
      {/* Info:(20240808 - Julian) Text */}
      <div className="flex w-1/2 flex-col items-start gap-y-20px p-80px">
        <p className="text-36px font-semibold text-text-neutral-primary">Participate in iSunCoin</p>
        <p className="font-normal text-text-neutral-secondary">
          iSunCoin transforms energy into computing power resources through computers and provides
          these resources to the iSunCoin platform in exchange for rewards, thereby achieving
          mining. You can start mining immediately by installing the iSunCoin software on an
          ordinary home computer or laptop. For optimal computing power conversion efficiency, it is
          recommended to use machines with network bandwidth above 10 Mbps, computing power above 10
          TOPS, memory above 4 GB, and storage capacity above 1 TB.
        </p>
        {/* Info:(20240808 - Julian) Download */}
        <div className="flex items-center divide-x divide-input-stroke-input rounded-sm border border-input-stroke-input text-text-text-primary">
          <button
            id="select-version-btn"
            type="button"
            className="relative flex items-center gap-12px px-16px py-10px"
            onClick={handleVersionClick}
          >
            <div className="w-70px text-left">{selectedVersion}</div>
            <div
              className={`${versionVisible ? 'rotate-180' : 'rotate-0'} transition-all duration-300 ease-in-out`}
            >
              <Image src="/icons/chevron_down.svg" width={16} height={16} alt="arrow_down_icon" />
            </div>

            <div
              ref={versionRef}
              className={`absolute left-0 top-14 flex w-full flex-col items-start rounded-xs border border-dropdown-stroke-menu ${versionVisible ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-10 opacity-0'} bg-dropdown-surface-menu-background-primary p-8px shadow-downDropShadowM transition-all duration-300 ease-in-out`}
            >
              {versionDropMenu}
            </div>
          </button>
          <button
            id="download-btn"
            type="button"
            disabled
            className="px-12px py-10px disabled:text-input-text-input-placeholder"
          >
            Download
          </button>
        </div>
      </div>
      {/* Info:(20240808 - Julian) Image */}
      <div className="relative h-500px w-1/2">
        <Image
          src="/elements/participate.png"
          fill
          style={{ objectFit: 'cover' }}
          alt="participate_image"
        />
      </div>
    </div>
  );
};

export default ParticipateSection;
