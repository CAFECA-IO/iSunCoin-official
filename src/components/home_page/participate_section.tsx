import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import useOuterClick from '@/lib/hooks/use_outer_click';

enum iSunCoinVersion {
  WINDOWS = 'Windows',
  MAC = 'Mac',
  LINUX = 'Linux',
}

const ParticipateSection = () => {
  const { t } = useTranslation('common');
  const [selectedVersion, setSelectedVersion] = useState(iSunCoinVersion.WINDOWS);

  const {
    targetRef: versionRef,
    componentVisible: versionVisible,
    setComponentVisible: setVersionVisible,
  } = useOuterClick<HTMLDivElement>(false);

  const handleVersionClick = () => setVersionVisible(!versionVisible);
  const downloadHandler = () => {
    // Info:(20240912 - Luphia) Download the selected version
    switch (selectedVersion) {
      case iSunCoinVersion.WINDOWS:
        window.open('/download/latest/isuncoin-gui-windows.zip');
        break;
      case iSunCoinVersion.MAC:
        window.open('/download/latest/isuncoin-gui-mac.dmg');
        break;
      case iSunCoinVersion.LINUX:
      default:
        window.open('/download/latest/isuncoin-gui-linux.appimage');
        break;
    }
  };

  const versionDropMenu = Object.values(iSunCoinVersion).map((version) => (
    <div
      key={version}
      className="w-full p-12px py-8px text-left hover:bg-button-surface-soft-primary-hover"
      onClick={() => {
        setSelectedVersion(version);
        setVersionVisible(false);
      }}
    >
      {version}
    </div>
  ));

  return (
    <div
      id="download"
      className="flex w-full flex-col-reverse items-center justify-between bg-surface-neutral-surface-lv2 md:flex-row"
    >
      {/* Info:(20240808 - Julian) Text */}
      <div className="flex flex-col items-start gap-y-20px p-20px md:w-1/2 md:p-80px">
        <p className="text-2xl font-semibold text-text-neutral-primary md:text-36px">
          {t('HOME_PAGE.PARTICIPATE_TITLE')}
        </p>
        <p className="text-sm font-normal text-text-neutral-secondary md:text-base">
          {t('HOME_PAGE.PARTICIPATE_DESCRIPTION')}
        </p>
        {/* Info:(20240808 - Julian) Download */}
        <div className="flex items-center divide-x divide-input-stroke-input rounded-sm border border-input-stroke-input text-text-neutral-primary">
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
              <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.97187 5.72077C3.26476 5.42788 3.73963 5.42788 4.03253 5.72077L8.0022 9.69044L11.9719 5.72077C12.2648 5.42788 12.7396 5.42788 13.0325 5.72077C13.3254 6.01366 13.3254 6.48854 13.0325 6.78143L8.53253 11.2814C8.23963 11.5743 7.76476 11.5743 7.47187 11.2814L2.97187 6.78143C2.67897 6.48854 2.67897 6.01366 2.97187 5.72077Z"
                />
              </svg>
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
            className="px-12px py-10px disabled:text-input-text-input-placeholder"
            onClick={downloadHandler}
          >
            {t('HOME_PAGE.DOWNLOAD')}
          </button>
        </div>
      </div>
      {/* Info:(20240808 - Julian) Image */}
      <div className="relative h-250px w-full md:h-550px md:w-1/2">
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
