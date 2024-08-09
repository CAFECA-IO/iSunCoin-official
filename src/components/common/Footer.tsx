import Image from 'next/image';
import Link from 'next/link';
import { ISUNCOIN_ROUTE_V2 } from '@/constants/url';
import packageJson from '@package';

const Footer = () => {
  const { version, releaseDate } = packageJson;

  return (
    <footer className="flex items-center justify-between gap-10px bg-surface-neutral-surface-lv2 px-20px py-24px lg:px-80px">
      {/* Logo */}
      <section className="space-y-16px">
        <div>
          <Link href={ISUNCOIN_ROUTE_V2.HOME_PAGE} className="flex items-center gap-8px">
            <Image src="/logo/isuncoin_logo.svg" alt="logo" width={40} height={40}></Image>
            <Image src="/logo/isuncoin.svg" alt="logo_string" width={90} height={18}></Image>
          </Link>
        </div>
        <p className="text-xs font-normal text-text-neutral-secondary">
          Last Updated: {releaseDate}
        </p>
      </section>

      {/* Navigation */}
      <section>
        <ul className="flex gap-24px text-sm font-medium text-button-text-secondary">
          <li>
            <p className="cursor-not-allowed px-16px py-8px">About Us</p>
          </li>
          <li>
            <p className="cursor-not-allowed px-16px py-8px">Privacy Policy</p>
          </li>
          <li>
            <p className="cursor-not-allowed px-16px py-8px">Terms of Use</p>
          </li>
          <li>
            <p className="cursor-not-allowed px-16px py-8px">Cookie Policy</p>
          </li>
          <li>
            <p className="cursor-not-allowed px-16px py-8px">Contact Us</p>
          </li>
        </ul>
      </section>

      {/* Version */}
      <section>
        <p className="text-end text-xs font-normal text-text-neutral-secondary">
          iSunCoin.com v{version}
        </p>
      </section>
    </footer>
  );
};

export default Footer;
