import Image from 'next/image';
import Link from 'next/link';
import { ISUNCOIN_ROUTE_V2 } from '@/constants/url';
import packageJson from '@package';
import { useTranslation } from 'next-i18next';

type FooterProps = {
  lastModifiedDate: string;
};

const Footer = ({ lastModifiedDate }: FooterProps) => {
  const { t } = useTranslation('common');
  const { version } = packageJson;

  return (
    <footer className="flex items-center justify-between gap-10px bg-surface-neutral-surface-lv2 px-20px py-24px lg:px-80px">
      {/* Logo */}
      <section className="shrink-0 space-y-16px">
        <div>
          <Link href={ISUNCOIN_ROUTE_V2.HOME_PAGE} className="flex items-center gap-8px">
            <Image src="/logo/isuncoin_logo.svg" alt="logo" width={40} height={40}></Image>
            <Image src="/logo/isuncoin.svg" alt="logo_string" width={90} height={18}></Image>
          </Link>
        </div>
        <div className="flex text-xs font-normal text-text-neutral-secondary xl:flex-row">
          <p>{t('FOOTER.LAST_UPDATED')}:&nbsp;</p>
          <p>{lastModifiedDate}</p>
        </div>
      </section>

      {/* Navigation */}
      <section>
        <ul className="flex text-center text-sm font-medium text-button-text-secondary xl:gap-24px">
          <li>
            <p className="cursor-not-allowed px-16px py-8px">{t('FOOTER.ABOUT_US')}</p>
          </li>
          <li>
            <p className="cursor-not-allowed px-16px py-8px">{t('FOOTER.PRIVACY_POLICY')}</p>
          </li>
          <li>
            <p className="cursor-not-allowed px-16px py-8px">{t('FOOTER.TERMS_OF_USE')}</p>
          </li>
          <li>
            <p className="cursor-not-allowed px-16px py-8px">{t('FOOTER.COOKIE_POLICY')}</p>
          </li>
          <li>
            <p className="cursor-not-allowed px-16px py-8px">{t('FOOTER.CONTACT_US')}</p>
          </li>
        </ul>
      </section>

      {/* Version */}
      <section className="flex flex-col text-end text-xs font-normal text-text-neutral-secondary xl:flex-row">
        <p>iSunCoin.com</p>
        <p>&nbsp;v{version}</p>
      </section>
    </footer>
  );
};

export default Footer;
