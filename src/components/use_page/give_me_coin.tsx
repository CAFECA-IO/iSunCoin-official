import { useState, MouseEventHandler } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const wallets: WalletType[] = [
  {
    name: 'Meta Mask',
    walletAvatarUrl: '/wallet_avatar/meta_mask.svg',
    websiteUrl: 'https://metamask.io/',
    platforms: ['iOS', 'Android', 'Linux', 'Windows', 'Mac', 'Chromium'],
    languages: ['中文（台灣）', '越南文', '英文'],
  },
  {
    name: '98',
    walletAvatarUrl: '/wallet_avatar/98.svg',
    websiteUrl: 'https://coin98.com/wallet',
    platforms: ['iOS', 'Android', 'Linux'],
    languages: ['中文（台灣）', '越南文', '英文'],
  },
  {
    name: 'Binance Wallet',
    walletAvatarUrl: '/wallet_avatar/binance_wallet.svg',
    websiteUrl: 'https://www.binance.com/en/web3wallet',
    platforms: ['iOS', 'Android', 'Linux', 'Windows'],
    languages: ['中文（台灣）', '越南文', '英文'],
  },
  {
    name: 'Blocto',
    walletAvatarUrl: '/wallet_avatar/blocto.svg',
    websiteUrl: 'https://blocto.io/',
    platforms: ['iOS', 'Android', 'Linux', 'Windows', 'Mac'],
    languages: ['中文（台灣）', '越南文', '英文'],
  },
  {
    name: 'Brave Wallet',
    walletAvatarUrl: '/wallet_avatar/brave_wallet.svg',
    websiteUrl: 'https://brave.com/wallet/',
    platforms: ['iOS', 'Linux', 'Windows', 'Mac', 'Chromium'],
    languages: ['中文（台灣）', '越南文', '英文'],
  },
  {
    name: 'Coinbase Wallet',
    walletAvatarUrl: '/wallet_avatar/coinbase_wallet.svg',
    websiteUrl: 'https://www.coinbase.com/wallet',
    platforms: ['Android', 'Linux', 'Windows', 'Mac', 'Chromium'],
    languages: ['中文（台灣）', '越南文', '英文'],
  },
  {
    name: 'Math Wallet',
    walletAvatarUrl: '/wallet_avatar/math_wallet.svg',
    websiteUrl: 'https://mathwallet.org/en-us/',
    platforms: ['iOS', 'Android', 'Linux', 'Windows', 'Mac', 'Chromium'],
    languages: ['中文（台灣）', '越南文', '英文'],
  },
  {
    name: 'Opera',
    walletAvatarUrl: '/wallet_avatar/opera.svg',
    websiteUrl: 'https://www.opera.com/',
    platforms: ['iOS', 'Android', 'Windows', 'Mac', 'Chromium'],
    languages: ['中文（台灣）', '越南文', '英文'],
  },
  {
    name: 'Safepal',
    walletAvatarUrl: '/wallet_avatar/safepal.svg',
    websiteUrl: 'https://www.safepal.com/en/',
    platforms: ['iOS', 'Android', 'Linux', 'Windows', 'Mac', 'Chromium'],
    languages: ['中文（台灣）', '越南文', '英文'],
  },
  {
    name: 'TP',
    walletAvatarUrl: '/wallet_avatar/tp.svg',
    websiteUrl: 'https://www.tokenpocket.pro/',
    platforms: ['iOS', 'Android', 'Linux', 'Windows', 'Mac', 'Chromium'],
    languages: ['中文（台灣）', '越南文', '英文'],
  },
  {
    name: 'Trust',
    walletAvatarUrl: '/wallet_avatar/trust.svg',
    websiteUrl: 'https://trustwallet.com/',
    platforms: ['iOS', 'Android', 'Linux', 'Windows', 'Mac', 'Chromium'],
    languages: ['中文（台灣）', '越南文', '英文'],
  },
  {
    name: 'Wallet Connect',
    walletAvatarUrl: '/wallet_avatar/wallet_connect.svg',
    websiteUrl: 'https://walletconnect.com/',
    platforms: ['iOS', 'Android', 'Linux', 'Windows', 'Mac', 'Chromium'],
    languages: ['中文（台灣）', '越南文', '英文'],
  },
];

// Info: (20240815 - Liz) Tab Buttons
interface TabButtonProps {
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const TabButton = ({ isActive, onClick, text }: TabButtonProps) => {
  const activeBtnStyle = 'text-tabs-text-active border-tabs-stroke-active';
  const inactiveBtnStyle = 'text-tabs-text-default border-tabs-stroke-default';

  return (
    <button
      type="button"
      className={`flex-1 border-b-2 border-tabs-stroke-default text-tabs-text-default hover:border-tabs-stroke-hover hover:text-tabs-text-hover disabled:border-tabs-stroke-disable disabled:text-tabs-text-disable ${
        isActive ? activeBtnStyle : inactiveBtnStyle
      }`}
      onClick={onClick}
    >
      <p className="px-12px py-8px text-base font-medium">{text}</p>
    </button>
  );
};

// Info: (20240815 - Liz) Wallet
interface WalletType {
  name: string;
  walletAvatarUrl: string;
  websiteUrl: string;
  platforms: string[];
  languages: string[];
}

interface WalletProps {
  wallet: WalletType;
}

const Wallet = ({ wallet }: WalletProps) => {
  return (
    <a
      href={wallet.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-200px w-300px flex-col justify-between rounded-lg bg-white p-20px"
    >
      <div className="flex items-center gap-14px">
        <Image src={wallet.walletAvatarUrl} alt={wallet.name} width={60} height={60} />
        <p className="text-base font-semibold">{wallet.name}</p>
      </div>

      <div className="flex items-center gap-13px">
        <Image src="/icons/platform_icon.svg" alt="platform_icon" width={24} height={24}></Image>
        <p className="text-sm">{wallet.platforms.join(' · ')}</p>
      </div>

      <div className="flex items-center gap-13px">
        <Image src="/icons/language_icon.svg" alt="language_icon" width={24} height={24}></Image>
        <p className="text-sm">{wallet.languages.join(', ') + '+14'}</p>
      </div>
    </a>
  );
};

// Info: (20240815 - Liz) Wallets
interface WalletsProps {
  activeTab: string;
}

const Wallets = ({ activeTab }: WalletsProps) => {
  // Filter the wallets before rendering
  const filteredWallets =
    activeTab === 'All'
      ? wallets
      : wallets.filter((wallet) => wallet.platforms.includes(activeTab));

  return (
    <div className="flex flex-wrap justify-center gap-16px">
      {filteredWallets.map((wallet) => (
        <Wallet key={wallet.name} wallet={wallet} />
      ))}
    </div>
  );
};

const GiveMeCoin = () => {
  const { t } = useTranslation('common');
  const [activeTab, setActiveTab] = useState('All');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <section className="space-y-24px p-80px">
      {/* title */}
      <h1>{t('USE_PAGE.I_DONT_NEED_SERVICES_JUST_GIVE_ME_ISUNCOIN')}</h1>

      {/* description */}
      <p>{t('USE_PAGE.WALLETS_DESCRIPTION')}</p>

      {/* tab buttons */}
      <div className="flex gap-16px">
        <TabButton
          text={t('USE_PAGE.ALL')}
          isActive={activeTab === 'All'}
          onClick={() => {
            handleTabClick('All');
          }}
        />

        <TabButton
          text="Android"
          isActive={activeTab === 'Android'}
          onClick={() => {
            handleTabClick('Android');
          }}
        />

        <TabButton
          text="iOS"
          isActive={activeTab === 'iOS'}
          onClick={() => {
            handleTabClick('iOS');
          }}
        />

        <TabButton
          text="Linux"
          isActive={activeTab === 'Linux'}
          onClick={() => {
            handleTabClick('Linux');
          }}
        />

        <TabButton
          text="Windows"
          isActive={activeTab === 'Windows'}
          onClick={() => {
            handleTabClick('Windows');
          }}
        />

        <TabButton
          text="Mac"
          isActive={activeTab === 'Mac'}
          onClick={() => {
            handleTabClick('Mac');
          }}
        />

        <TabButton
          text="Chromium"
          isActive={activeTab === 'Chromium'}
          onClick={() => {
            handleTabClick('Chromium');
          }}
        />
      </div>

      {/* wallets */}
      <Wallets activeTab={activeTab} />
    </section>
  );
};

export default GiveMeCoin;
