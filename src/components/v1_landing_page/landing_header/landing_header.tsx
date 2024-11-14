import Link from 'next/link';
import useOuterClick from '@/lib/hooks/use_outer_click';
import { ISUNCOIN_ROUTES } from '@/constants/url';
import ThemeToggle from '@/components/common/toggle/theme_toggle';

const languages = [
  { label: 'English', code: 'en' },
  { label: '繁體中文', code: 'tw' },
  { label: '简体中文', code: 'cn' },
];

const LandingHeader = () => {
  // ToDo: (20240618 - Liz) i18n
  //   const { t }: { t: TranslateFunction } = useTranslation('common');

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    targetRef: dropdownRef,
    componentVisible: dropdownOpen,
    setComponentVisible: setDropdownOpen,
  } = useOuterClick<HTMLDivElement>(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex max-w-full items-center gap-lv-7 bg-surface-neutral-surface-lv1 px-lv-10 py-lv-4 font-barlow shadow-header">
      {/* Navigation Links */}
      <nav>
        <ul className="flex items-center gap-lv-7">
          <li>
            <div>
              <Link href={ISUNCOIN_ROUTES.HOME_PAGE}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="139"
                  height="40"
                  fill="none"
                  viewBox="0 0 139 40"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="url(#b)"
                      d="M20 40c11.046 0 20-8.953 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                    />
                    <path
                      fill="#fff"
                      d="M32.248 17.015a6.77 6.77 0 0 0-4.818-1.989 6.767 6.767 0 0 0-4.82 1.989l-4.435 4.436-.513.512h2.21l3.844-3.843a5.214 5.214 0 0 1 3.714-1.53 5.23 5.23 0 0 1 3.714 1.53 5.214 5.214 0 0 1 1.53 3.713 5.214 5.214 0 0 1-1.53 3.714l-.153.152v.002a5.22 5.22 0 0 1-3.572 1.4h-5.642v.002h-7.112a7.112 7.112 0 0 1-7.104-7.104c0-3.917 3.067-6.983 6.882-7.101l.231-.004h.024c.886 0 1.751.16 2.576.477a7.05 7.05 0 0 1 2.469 1.604l1.338 1.307s1.107-1.105 1.107-1.1l-1.34-1.309a8.693 8.693 0 0 0-6.19-2.54 8.608 8.608 0 0 0-6.12 2.539A8.609 8.609 0 0 0 6 19.999c0 2.314.901 4.49 2.538 6.127a8.61 8.61 0 0 0 6.109 2.538h5.486v.003h2.097v-.003h5.19c1.824 0 3.54-.712 4.828-2.004l.152-.152.004-.015a6.766 6.766 0 0 0 1.834-4.659c0-1.75-.706-3.536-1.989-4.819h-.001Z"
                    />
                    <path
                      fill="#fff"
                      d="M11.084 20.236a3.788 3.788 0 0 1 3.783-3.784 3.79 3.79 0 0 1 3.654 2.803l1.28-1.28a5.435 5.435 0 0 0-4.934-3.167 5.435 5.435 0 0 0-5.428 5.428c0 2.186 1.3 4.076 3.167 4.935l1.28-1.28a3.79 3.79 0 0 1-2.802-3.655Z"
                    />
                  </g>
                  <path
                    fill="#002462"
                    d="M134.367 16.124c1.296 0 2.328.384 3.096 1.152.784.768 1.176 1.816 1.176 3.144v7.872c0 .08-.032.152-.096.216a.26.26 0 0 1-.192.072h-2.208a.351.351 0 0 1-.216-.072.351.351 0 0 1-.072-.216v-7.296c0-.736-.208-1.328-.624-1.776-.416-.464-.968-.696-1.656-.696s-1.248.224-1.68.672c-.416.448-.624 1.04-.624 1.776v7.32c0 .08-.032.152-.096.216a.26.26 0 0 1-.192.072h-2.208a.351.351 0 0 1-.216-.072.351.351 0 0 1-.072-.216V16.604a.26.26 0 0 1 .072-.192.298.298 0 0 1 .216-.096h2.208c.08 0 .144.032.192.096a.228.228 0 0 1 .096.192v.768c0 .048.016.08.048.096s.056 0 .072-.048c.656-.864 1.648-1.296 2.976-1.296Zm-10.413-1.488c-.496 0-.904-.16-1.224-.48-.32-.32-.48-.728-.48-1.224s.16-.904.48-1.224c.32-.32.728-.48 1.224-.48s.904.16 1.224.48c.32.32.48.728.48 1.224s-.16.904-.48 1.224c-.32.32-.728.48-1.224.48Zm-1.152 13.944a.351.351 0 0 1-.216-.072.351.351 0 0 1-.072-.216V16.58a.26.26 0 0 1 .072-.192.298.298 0 0 1 .216-.096h2.208c.08 0 .144.032.192.096a.228.228 0 0 1 .096.192v11.712c0 .08-.032.152-.096.216a.26.26 0 0 1-.192.072h-2.208Zm-8.56.192c-1.264 0-2.352-.32-3.264-.96-.896-.64-1.528-1.528-1.896-2.664a9.058 9.058 0 0 1-.408-2.736c0-1.024.128-1.936.384-2.736.368-1.12 1.008-1.992 1.92-2.616.912-.624 2.008-.936 3.288-.936 1.216 0 2.264.312 3.144.936.896.624 1.528 1.488 1.896 2.592.288.768.432 1.68.432 2.736 0 1.008-.136 1.92-.408 2.736-.368 1.136-1 2.032-1.896 2.688-.896.64-1.96.96-3.192.96Zm0-2.4c.592 0 1.096-.168 1.512-.504.432-.336.744-.808.936-1.416.16-.528.24-1.2.24-2.016 0-.864-.08-1.536-.24-2.016-.176-.608-.48-1.072-.912-1.392-.432-.336-.96-.504-1.584-.504-.592 0-1.104.168-1.536.504-.432.32-.744.784-.936 1.392-.16.56-.24 1.232-.24 2.016s.08 1.456.24 2.016c.176.608.48 1.08.912 1.416.448.336.984.504 1.608.504Zm-13.906 2.4c-1.2 0-2.256-.232-3.168-.696-.912-.48-1.616-1.144-2.112-1.992-.496-.848-.744-1.832-.744-2.952v-5.928c0-1.12.248-2.104.744-2.952.496-.848 1.2-1.504 2.112-1.968.912-.464 1.968-.696 3.168-.696 1.184 0 2.232.224 3.144.672.912.448 1.616 1.08 2.112 1.896.496.816.744 1.76.744 2.832 0 .08-.032.152-.096.216a.26.26 0 0 1-.192.072l-2.208.12c-.192 0-.288-.088-.288-.264 0-.944-.296-1.704-.888-2.28-.576-.576-1.352-.864-2.328-.864-.976 0-1.76.288-2.352.864-.592.576-.888 1.336-.888 2.28v6.12c0 .928.296 1.68.888 2.256.592.576 1.376.864 2.352.864s1.752-.28 2.328-.84c.592-.576.888-1.336.888-2.28 0-.176.096-.264.288-.264l2.208.096a.26.26 0 0 1 .192.072c.064.048.096.104.096.168 0 1.088-.248 2.048-.744 2.88-.496.816-1.2 1.448-2.112 1.896-.912.448-1.96.672-3.144.672ZM87.281 16.124c1.296 0 2.328.384 3.096 1.152.784.768 1.176 1.816 1.176 3.144v7.872c0 .08-.032.152-.096.216a.26.26 0 0 1-.192.072h-2.208a.351.351 0 0 1-.216-.072.351.351 0 0 1-.072-.216v-7.296c0-.736-.208-1.328-.624-1.776-.416-.464-.968-.696-1.656-.696s-1.248.224-1.68.672c-.416.448-.624 1.04-.624 1.776v7.32c0 .08-.032.152-.096.216a.26.26 0 0 1-.192.072H81.69a.351.351 0 0 1-.216-.072.351.351 0 0 1-.072-.216V16.604a.26.26 0 0 1 .072-.192.298.298 0 0 1 .216-.096h2.208c.08 0 .144.032.192.096a.228.228 0 0 1 .096.192v.768c0 .048.016.08.048.096s.056 0 .072-.048c.656-.864 1.648-1.296 2.976-1.296Zm-11.616.48a.26.26 0 0 1 .072-.192.298.298 0 0 1 .216-.096h2.184c.08 0 .144.032.192.096a.228.228 0 0 1 .096.192v11.688c0 .08-.032.152-.096.216a.26.26 0 0 1-.192.072h-2.184a.351.351 0 0 1-.216-.072.351.351 0 0 1-.072-.216v-.768c0-.048-.016-.08-.048-.096s-.064 0-.096.048c-.656.848-1.64 1.272-2.952 1.272-1.216 0-2.24-.352-3.072-1.056-.816-.704-1.224-1.704-1.224-3v-8.088a.26.26 0 0 1 .072-.192.298.298 0 0 1 .216-.096h2.208c.08 0 .144.032.192.096a.228.228 0 0 1 .096.192V23.9c0 .752.192 1.352.576 1.8.4.448.952.672 1.656.672.72 0 1.296-.224 1.728-.672.432-.448.648-1.048.648-1.8v-7.296Zm-15.74 12.168c-1.248 0-2.336-.2-3.264-.6-.928-.4-1.648-.96-2.16-1.68-.496-.72-.744-1.568-.744-2.544v-.6a.26.26 0 0 1 .072-.192.298.298 0 0 1 .216-.096h2.136c.08 0 .144.032.192.096a.228.228 0 0 1 .096.192v.456c0 .736.328 1.352.984 1.848.656.48 1.552.72 2.688.72.976 0 1.712-.208 2.208-.624.496-.416.744-.952.744-1.608 0-.448-.136-.824-.408-1.128-.272-.32-.664-.608-1.176-.864-.496-.256-1.248-.576-2.256-.96-1.136-.416-2.056-.808-2.76-1.176a5.325 5.325 0 0 1-1.776-1.488c-.464-.64-.696-1.432-.696-2.376 0-1.408.512-2.52 1.536-3.336 1.024-.816 2.392-1.224 4.104-1.224 1.2 0 2.256.208 3.168.624.928.416 1.648 1 2.16 1.752.512.736.768 1.592.768 2.568v.408c0 .08-.032.152-.096.216a.26.26 0 0 1-.192.072h-2.16a.351.351 0 0 1-.216-.072.351.351 0 0 1-.072-.216v-.264c0-.752-.312-1.384-.936-1.896-.608-.528-1.456-.792-2.544-.792-.88 0-1.568.184-2.064.552-.48.368-.72.888-.72 1.56 0 .48.128.872.384 1.176.256.304.64.584 1.152.84.512.24 1.304.552 2.376.936 1.136.432 2.04.824 2.712 1.176a5.039 5.039 0 0 1 1.752 1.488c.496.624.744 1.408.744 2.352 0 1.44-.536 2.584-1.608 3.432-1.056.848-2.504 1.272-4.344 1.272ZM49.704 14.636c-.496 0-.904-.16-1.224-.48-.32-.32-.48-.728-.48-1.224s.16-.904.48-1.224c.32-.32.728-.48 1.224-.48s.904.16 1.224.48c.32.32.48.728.48 1.224s-.16.904-.48 1.224c-.32.32-.728.48-1.224.48ZM48.552 28.58a.351.351 0 0 1-.216-.072.351.351 0 0 1-.072-.216V16.58a.26.26 0 0 1 .072-.192.298.298 0 0 1 .216-.096h2.208c.08 0 .144.032.192.096a.228.228 0 0 1 .096.192v11.712c0 .08-.032.152-.096.216a.26.26 0 0 1-.192.072h-2.208Z"
                  />
                  <defs>
                    <linearGradient
                      id="b"
                      x1="9.177"
                      x2="30.217"
                      y1="3.982"
                      y2="36.499"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFA502" />
                      <stop offset="1" stopColor="#FF705B" />
                    </linearGradient>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h40v40H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </li>
          <li className="group text-tabs-text-default">
            <div>
              <Link href={ISUNCOIN_ROUTES.HOME_PAGE}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="42"
                  fill="none"
                  viewBox="0 0 96 42"
                >
                  <g clipPath="url(#a)">
                    <path
                      // icon
                      className="group-hover:text-tabs-stroke-hover group-active:text-tabs-text-active"
                      stroke="currentColor"
                      // stroke="#58667F"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M23.473 19.167h4c.933 0 1.4 0 1.756.181.314.16.569.415.729.729.181.356.181.823.181 1.756V27.5m-6.666 0V15.167c0-.934 0-1.4-.182-1.757a1.666 1.666 0 0 0-.729-.728c-.356-.182-.823-.182-1.756-.182h-3c-.934 0-1.4 0-1.757.182-.313.16-.568.414-.728.728-.182.357-.182.823-.182 1.757V27.5m15.834 0H14.305m3.75-11.667h2.5m-2.5 3.334h2.5m-2.5 3.333h2.5"
                    />
                  </g>
                  <path
                    // string
                    className="group-hover:text-tabs-text-hover group-active:text-tabs-text-active"
                    fill="currentColor"
                    // fill="#58667F"
                    d="M48.751 26c-.096 0-.16-.043-.192-.128L47.983 24c-.01-.032-.032-.048-.064-.048h-4.496c-.032 0-.053.016-.064.048l-.576 1.872c-.032.085-.096.128-.192.128h-1.296c-.117 0-.16-.059-.128-.176l3.504-10.896c.032-.085.096-.128.192-.128h1.6c.096 0 .16.043.192.128l3.536 10.896.016.064c0 .075-.048.112-.144.112h-1.312Zm-4.992-3.344a.068.068 0 0 0 0 .064c.022.01.043.016.064.016h3.68c.022 0 .038-.005.048-.016.021-.021.027-.043.016-.064l-1.856-5.936c-.01-.021-.026-.032-.048-.032-.021 0-.037.01-.048.032l-1.856 5.936Zm14.814-2.688c.171.544.256 1.19.256 1.936 0 .8-.101 1.483-.304 2.048-.234.693-.608 1.232-1.12 1.616-.501.373-1.136.56-1.904.56a2.43 2.43 0 0 1-1.04-.224 2.512 2.512 0 0 1-.832-.624c-.021-.021-.042-.027-.064-.016-.01.01-.016.027-.016.048v.528c0 .107-.053.16-.16.16h-1.216c-.106 0-.16-.053-.16-.16V14.96c0-.107.054-.16.16-.16h1.216c.107 0 .16.053.16.16v3.568a.07.07 0 0 0 .016.048c.022.01.043.005.064-.016.235-.267.512-.47.832-.608a2.5 2.5 0 0 1 1.04-.224c.8 0 1.456.197 1.968.592.512.395.88.944 1.104 1.648Zm-1.696 3.952c.267-.501.4-1.163.4-1.984 0-.875-.17-1.579-.512-2.112-.309-.512-.784-.768-1.424-.768-.597 0-1.05.272-1.36.816-.277.49-.416 1.173-.416 2.048s.128 1.547.384 2.016c.32.576.79.864 1.408.864.704 0 1.211-.293 1.52-.88Zm7.358 2.208c-.789 0-1.477-.197-2.064-.592-.586-.405-.997-.965-1.232-1.68-.192-.576-.288-1.227-.288-1.952 0-.757.091-1.397.272-1.92.235-.704.646-1.253 1.232-1.648.587-.405 1.286-.608 2.096-.608.768 0 1.435.203 2 .608.576.395.987.939 1.232 1.632.192.544.288 1.184.288 1.92 0 .747-.096 1.403-.288 1.968-.234.715-.64 1.275-1.216 1.68-.576.395-1.253.592-2.032.592Zm0-1.328c.427 0 .8-.117 1.12-.352.32-.245.55-.587.688-1.024.118-.405.176-.907.176-1.504s-.053-1.093-.16-1.488c-.138-.437-.368-.773-.688-1.008-.32-.245-.709-.368-1.168-.368-.437 0-.816.123-1.136.368-.32.235-.549.57-.688 1.008-.117.373-.176.87-.176 1.488 0 .619.059 1.12.176 1.504.128.437.352.779.672 1.024.331.235.726.352 1.184.352Zm10.555-6.784c0-.107.054-.16.16-.16h1.2c.107 0 .16.053.16.16v7.824c0 .107-.053.16-.16.16h-1.2c-.106 0-.16-.053-.16-.16v-.592c0-.021-.01-.032-.032-.032-.01-.01-.026-.005-.048.016-.426.587-1.082.88-1.968.88a3.49 3.49 0 0 1-1.456-.304 2.538 2.538 0 0 1-1.056-.896c-.266-.395-.4-.875-.4-1.44v-5.456c0-.107.054-.16.16-.16h1.2c.107 0 .16.053.16.16v4.976c0 .555.144.992.432 1.312.299.32.715.48 1.248.48.534 0 .96-.16 1.28-.48.32-.33.48-.768.48-1.312v-4.976Zm7.938.944c0 .107-.054.16-.16.16H80.84c-.043 0-.064.021-.064.064v4.24c0 .448.101.773.304.976.202.192.517.288.944.288h.464c.106 0 .16.053.16.16v.992c0 .107-.054.16-.16.16-.342.021-.587.032-.736.032-.811 0-1.424-.144-1.84-.432-.406-.299-.608-.843-.608-1.632v-4.784c0-.043-.022-.064-.064-.064h-.976c-.107 0-.16-.053-.16-.16v-.944c0-.107.053-.16.16-.16h.976c.042 0 .064-.021.064-.064v-1.888c0-.107.053-.16.16-.16h1.152c.106 0 .16.053.16.16v1.888c0 .043.021.064.064.064h1.728c.106 0 .16.053.16.16v.944Z"
                  />
                  <path
                    // underline
                    className="text-tabs-stroke-default group-hover:text-tabs-stroke-hover group-active:text-tabs-stroke-active"
                    fill="currentColor"
                    // fill="#CDD1D9"
                    d="M.639 40h95v2h-95z"
                  />
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M12.64 10h20v20h-20z" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </li>
          <li className="group text-tabs-text-default">
            <div>
              <Link href={ISUNCOIN_ROUTES.HOME_PAGE}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="179"
                  height="42"
                  fill="none"
                  viewBox="0 0 179 42"
                >
                  <g clipPath="url(#a)">
                    <path
                      // icon
                      className="group-hover:text-tabs-stroke-hover group-active:text-tabs-text-active"
                      stroke="currentColor"
                      // stroke="#58667F"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16.39 28.333v-4.166m0-8.334v-4.166m-2.084 2.083h4.167m-4.167 12.5h4.167m5-13.75-1.446 3.758c-.235.61-.352.916-.535 1.173a2.5 2.5 0 0 1-.589.589c-.257.182-.562.3-1.173.535L15.972 20l3.758 1.445c.61.235.916.353 1.173.535.228.162.427.361.59.59.182.256.3.562.534 1.173l1.445 3.757 1.446-3.757c.235-.611.352-.917.535-1.174a2.5 2.5 0 0 1 .589-.588c.257-.183.562-.3 1.173-.536L30.973 20l-3.758-1.445c-.61-.235-.916-.353-1.173-.535a2.502 2.502 0 0 1-.59-.589c-.182-.257-.3-.563-.534-1.174L23.473 12.5Z"
                    />
                  </g>
                  <path
                    // string
                    className="group-hover:text-tabs-text-hover group-active:text-tabs-text-active"
                    fill="currentColor"
                    // fill="#58667F"
                    d="M45.551 26.128c-.768 0-1.45-.15-2.048-.448a3.43 3.43 0 0 1-1.376-1.296c-.32-.565-.48-1.21-.48-1.936v-4.096c0-.736.16-1.381.48-1.936.33-.555.79-.981 1.376-1.28.597-.31 1.28-.464 2.048-.464s1.445.15 2.032.448c.587.299 1.04.715 1.36 1.248.33.523.496 1.115.496 1.776v.176c0 .107-.053.16-.16.16h-1.216c-.107 0-.16-.053-.16-.16v-.144c0-.64-.218-1.157-.656-1.552-.426-.405-.992-.608-1.696-.608-.715 0-1.29.208-1.728.624-.426.416-.64.97-.64 1.664v4.192c0 .693.224 1.248.672 1.664.448.416 1.035.624 1.76.624.704 0 1.259-.181 1.664-.544.416-.373.624-.88.624-1.52v-1.232c0-.043-.021-.064-.064-.064h-2.16c-.107 0-.16-.053-.16-.16v-.992c0-.107.053-.16.16-.16h3.6c.107 0 .16.053.16.16v2.032c0 1.227-.352 2.17-1.056 2.832-.693.661-1.637.992-2.832.992Zm9.749-8.352c.341 0 .65.07.928.208.074.032.101.096.08.192l-.256 1.2c-.011.096-.075.128-.192.096a1.673 1.673 0 0 0-.64-.112l-.224.016c-.502.021-.918.197-1.248.528-.32.32-.48.741-.48 1.264v4.672c0 .107-.054.16-.16.16h-1.216c-.107 0-.16-.053-.16-.16v-7.824c0-.107.053-.16.16-.16h1.216c.106 0 .16.053.16.16v.848c0 .032.005.053.016.064.021 0 .037-.01.048-.032.48-.747 1.136-1.12 1.968-1.12Zm5.732 8.352c-.79 0-1.477-.197-2.064-.592-.587-.405-.997-.965-1.232-1.68-.192-.576-.288-1.227-.288-1.952 0-.757.09-1.397.272-1.92.235-.704.645-1.253 1.232-1.648.587-.405 1.285-.608 2.096-.608.768 0 1.435.203 2 .608.576.395.987.939 1.232 1.632.192.544.288 1.184.288 1.92 0 .747-.096 1.403-.288 1.968-.234.715-.64 1.275-1.216 1.68-.576.395-1.253.592-2.032.592Zm0-1.328c.427 0 .8-.117 1.12-.352.32-.245.55-.587.688-1.024.117-.405.176-.907.176-1.504s-.053-1.093-.16-1.488c-.139-.437-.368-.773-.688-1.008-.32-.245-.71-.368-1.168-.368-.437 0-.816.123-1.136.368-.32.235-.55.57-.688 1.008-.117.373-.176.87-.176 1.488 0 .619.059 1.12.176 1.504.128.437.352.779.672 1.024.33.235.726.352 1.184.352Zm10.555-6.784c0-.107.053-.16.16-.16h1.2c.107 0 .16.053.16.16v7.824c0 .107-.053.16-.16.16h-1.2c-.106 0-.16-.053-.16-.16v-.592c0-.021-.01-.032-.032-.032-.01-.01-.027-.005-.048.016-.427.587-1.083.88-1.968.88a3.49 3.49 0 0 1-1.456-.304 2.538 2.538 0 0 1-1.056-.896c-.267-.395-.4-.875-.4-1.44v-5.456c0-.107.053-.16.16-.16h1.2c.107 0 .16.053.16.16v4.976c0 .555.144.992.432 1.312.299.32.715.48 1.248.48.534 0 .96-.16 1.28-.48.32-.33.48-.768.48-1.312v-4.976Zm7.554-.272c.874 0 1.568.256 2.08.768.512.501.768 1.184.768 2.048v5.28c0 .107-.054.16-.16.16h-1.216c-.107 0-.16-.053-.16-.16v-4.976c0-.533-.155-.965-.464-1.296-.31-.33-.72-.496-1.232-.496-.502 0-.912.165-1.232.496-.32.33-.48.757-.48 1.28v4.992c0 .107-.054.16-.16.16h-1.216c-.107 0-.16-.053-.16-.16v-7.824c0-.107.053-.16.16-.16h1.216c.106 0 .16.053.16.16v.576c0 .021.005.037.016.048.02.01.037.005.048-.016.458-.587 1.136-.88 2.032-.88Zm10.162-2.784c0-.107.053-.16.16-.16h1.216c.106 0 .16.053.16.16v10.88c0 .107-.054.16-.16.16h-1.216c-.107 0-.16-.053-.16-.16v-.528c0-.021-.011-.037-.032-.048-.011-.01-.027-.005-.048.016a2.512 2.512 0 0 1-.832.624 2.43 2.43 0 0 1-1.04.224c-.768 0-1.408-.187-1.92-.56-.502-.384-.87-.923-1.104-1.616-.203-.565-.304-1.248-.304-2.048 0-.747.085-1.392.256-1.936.224-.704.592-1.253 1.104-1.648.512-.395 1.168-.592 1.968-.592.362 0 .704.075 1.024.224.33.139.613.341.848.608.021.021.037.027.048.016.021-.01.032-.027.032-.048V14.96Zm-.4 8.976c.245-.448.368-1.12.368-2.016 0-.896-.134-1.579-.4-2.048-.31-.544-.763-.816-1.36-.816-.64 0-1.115.256-1.424.768-.342.533-.512 1.237-.512 2.112 0 .821.133 1.483.4 1.984.309.587.816.88 1.52.88.618 0 1.088-.288 1.408-.864Zm11.359 2.192c-.822 0-1.536-.128-2.144-.384-.598-.256-1.062-.619-1.392-1.088-.32-.47-.48-1.019-.48-1.648v-.464c0-.107.053-.16.16-.16h1.168c.106 0 .16.053.16.16v.384c0 .544.234.992.704 1.344.469.352 1.114.528 1.936.528.736 0 1.29-.155 1.664-.464.373-.31.56-.715.56-1.216 0-.33-.096-.613-.288-.848-.192-.235-.475-.448-.848-.64-.363-.203-.896-.443-1.6-.72-.78-.299-1.398-.57-1.856-.816a3.482 3.482 0 0 1-1.12-.96c-.3-.405-.448-.912-.448-1.52 0-.917.325-1.637.976-2.16.66-.523 1.552-.784 2.672-.784.789 0 1.482.133 2.08.4.597.267 1.056.64 1.376 1.12.33.48.496 1.035.496 1.664v.32c0 .107-.054.16-.16.16h-1.2c-.107 0-.16-.053-.16-.16v-.24c0-.555-.224-1.013-.672-1.376-.438-.373-1.046-.56-1.824-.56-.662 0-1.174.139-1.536.416-.363.267-.544.656-.544 1.168 0 .352.09.64.272.864.18.224.448.427.8.608.362.17.912.395 1.648.672.757.299 1.37.576 1.84.832a3.4 3.4 0 0 1 1.168.992c.309.405.464.912.464 1.52 0 .939-.347 1.685-1.04 2.24-.683.544-1.627.816-2.832.816Zm9.934-7.168c0 .107-.054.16-.16.16h-1.728c-.043 0-.064.021-.064.064v4.24c0 .448.101.773.304.976.202.192.517.288.944.288h.464c.106 0 .16.053.16.16v.992c0 .107-.054.16-.16.16-.342.021-.587.032-.736.032-.811 0-1.424-.144-1.84-.432-.406-.299-.608-.843-.608-1.632v-4.784c0-.043-.022-.064-.064-.064h-.976c-.107 0-.16-.053-.16-.16v-.944c0-.107.053-.16.16-.16h.976c.042 0 .064-.021.064-.064v-1.888c0-.107.053-.16.16-.16h1.152c.106 0 .16.053.16.16v1.888c0 .043.021.064.064.064h1.728c.106 0 .16.053.16.16v.944Zm5.026-1.232c.651 0 1.216.117 1.696.352.491.224.864.544 1.12.96.267.405.4.87.4 1.392v5.408c0 .107-.053.16-.16.16h-1.216c-.107 0-.16-.053-.16-.16v-.576c0-.053-.027-.064-.08-.032a2.853 2.853 0 0 1-1.024.672 3.73 3.73 0 0 1-1.328.224c-.789 0-1.445-.197-1.968-.592-.512-.405-.768-1.013-.768-1.824 0-.832.288-1.483.864-1.952.587-.48 1.403-.72 2.448-.72h1.792c.043 0 .064-.021.064-.064v-.432c0-.47-.139-.832-.416-1.088-.267-.267-.677-.4-1.232-.4-.448 0-.816.09-1.104.272-.277.17-.448.405-.512.704-.032.107-.096.155-.192.144L112.15 20c-.107-.021-.155-.064-.144-.128.085-.63.421-1.141 1.008-1.536.587-.405 1.323-.608 2.208-.608Zm-.416 7.104c.565 0 1.056-.15 1.472-.448.416-.299.624-.677.624-1.136v-.944c0-.043-.021-.064-.064-.064h-1.504c-.629 0-1.131.123-1.504.368s-.56.587-.56 1.024c0 .395.139.693.416.896.288.203.661.304 1.12.304Zm9.434-7.056c.341 0 .65.07.928.208.074.032.101.096.08.192l-.256 1.2c-.011.096-.075.128-.192.096a1.677 1.677 0 0 0-.64-.112l-.224.016c-.502.021-.918.197-1.248.528-.32.32-.48.741-.48 1.264v4.672c0 .107-.054.16-.16.16h-1.216c-.107 0-.16-.053-.16-.16v-7.824c0-.107.053-.16.16-.16h1.216c.106 0 .16.053.16.16v.848c0 .032.005.053.016.064.021 0 .037-.01.048-.032.48-.747 1.136-1.12 1.968-1.12Zm6.321 8.368c-.768 0-1.45-.15-2.048-.448a3.436 3.436 0 0 1-1.376-1.296c-.32-.565-.48-1.21-.48-1.936V18.32c0-.725.16-1.36.48-1.904.331-.555.79-.981 1.376-1.28.598-.31 1.28-.464 2.048-.464s1.446.15 2.032.448c.587.288 1.04.699 1.36 1.232.331.533.496 1.152.496 1.856v.016a.173.173 0 0 1-.048.128.153.153 0 0 1-.112.048l-1.216.064c-.106 0-.16-.048-.16-.144v-.048c0-.683-.213-1.232-.64-1.648-.426-.416-.997-.624-1.712-.624-.714 0-1.29.208-1.728.624-.426.416-.64.965-.64 1.648v4.256c0 .683.214 1.232.64 1.648.438.416 1.014.624 1.728.624.715 0 1.286-.208 1.712-.624.427-.416.64-.965.64-1.648v-.032c0-.096.054-.144.16-.144l1.216.064c.107 0 .16.053.16.16 0 .704-.165 1.328-.496 1.872a3.28 3.28 0 0 1-1.36 1.248c-.586.299-1.264.448-2.032.448Zm9.719-8.4c.875 0 1.568.256 2.08.768.512.501.768 1.184.768 2.048v5.28c0 .107-.053.16-.16.16h-1.216c-.107 0-.16-.053-.16-.16v-4.976c0-.533-.155-.965-.464-1.296-.309-.33-.72-.496-1.232-.496-.501 0-.912.165-1.232.496-.32.33-.48.757-.48 1.28v4.992c0 .107-.053.16-.16.16h-1.216c-.107 0-.16-.053-.16-.16V14.96c0-.107.053-.16.16-.16h1.216c.107 0 .16.053.16.16v3.632c0 .021.005.037.016.048.021.01.037.005.048-.016.459-.587 1.136-.88 2.032-.88Zm8.176-.016c.65 0 1.216.117 1.696.352.49.224.864.544 1.12.96.266.405.4.87.4 1.392v5.408c0 .107-.054.16-.16.16h-1.216c-.107 0-.16-.053-.16-.16v-.576c0-.053-.027-.064-.08-.032a2.862 2.862 0 0 1-1.024.672c-.395.15-.838.224-1.328.224-.79 0-1.446-.197-1.968-.592-.512-.405-.768-1.013-.768-1.824 0-.832.288-1.483.864-1.952.586-.48 1.402-.72 2.448-.72h1.792c.042 0 .064-.021.064-.064v-.432c0-.47-.139-.832-.416-1.088-.267-.267-.678-.4-1.232-.4-.448 0-.816.09-1.104.272-.278.17-.448.405-.512.704-.032.107-.096.155-.192.144L145.384 20c-.107-.021-.155-.064-.144-.128.085-.63.421-1.141 1.008-1.536.586-.405 1.322-.608 2.208-.608Zm-.416 7.104c.565 0 1.056-.15 1.472-.448.416-.299.624-.677.624-1.136v-.944c0-.043-.022-.064-.064-.064h-1.504c-.63 0-1.131.123-1.504.368-.374.245-.56.587-.56 1.024 0 .395.138.693.416.896.288.203.661.304 1.12.304Zm6.793-8.256a.998.998 0 0 1-.736-.288.997.997 0 0 1-.288-.736c0-.299.096-.544.288-.736a.998.998 0 0 1 .736-.288c.299 0 .544.096.736.288a.997.997 0 0 1 .288.736.997.997 0 0 1-.288.736.996.996 0 0 1-.736.288Zm-.64 9.408c-.106 0-.16-.053-.16-.16v-7.808c0-.107.054-.16.16-.16h1.216c.107 0 .16.053.16.16v7.808c0 .107-.053.16-.16.16h-1.216Zm7.583-8.24c.874 0 1.568.256 2.08.768.512.501.768 1.184.768 2.048v5.28c0 .107-.054.16-.16.16h-1.216c-.107 0-.16-.053-.16-.16v-4.976c0-.533-.155-.965-.464-1.296-.31-.33-.72-.496-1.232-.496-.502 0-.912.165-1.232.496-.32.33-.48.757-.48 1.28v4.992c0 .107-.054.16-.16.16h-1.216c-.107 0-.16-.053-.16-.16v-7.824c0-.107.053-.16.16-.16h1.216c.106 0 .16.053.16.16v.576c0 .021.005.037.016.048.021.01.037.005.048-.016.458-.587 1.136-.88 2.032-.88Z"
                  />
                  <path
                    // underline
                    className="text-tabs-stroke-default group-hover:text-tabs-stroke-hover group-active:text-tabs-stroke-active"
                    fill="currentColor"
                    // fill="#CDD1D9"
                    d="M.639 40h178v2h-178z"
                  />
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M12.64 10h20v20h-20z" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </li>
          <li className="group text-tabs-text-default">
            <div>
              <Link href={ISUNCOIN_ROUTES.HOME_PAGE}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="118"
                  height="42"
                  fill="none"
                  viewBox="0 0 118 42"
                >
                  <g clipPath="url(#a)">
                    <path
                      // icon
                      className="group-hover:text-tabs-stroke-hover group-active:text-tabs-text-active"
                      stroke="currentColor"
                      // stroke="#58667F"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m30.973 24.583-.577-8.358c-.09-1.313-.136-1.969-.42-2.466a2.5 2.5 0 0 0-1.082-1.01c-.515-.249-1.173-.249-2.488-.249h-7.533c-1.316 0-1.973 0-2.489.25a2.5 2.5 0 0 0-1.082 1.009c-.284.497-.33 1.153-.42 2.466l-.576 8.358m16.666 0a2.917 2.917 0 0 1-2.916 2.917H17.222a2.917 2.917 0 0 1-2.916-2.917m16.666 0a2.917 2.917 0 0 0-2.916-2.916H17.222a2.917 2.917 0 0 0-2.916 2.916m3.333 0h.009m4.991 0h5"
                    />
                  </g>
                  <path
                    // string
                    className="group-hover:text-tabs-text-hover group-active:text-tabs-text-active"
                    fill="currentColor"
                    // fill="#58667F"
                    d="M46.335 14.784c.65 0 1.221.139 1.712.416.502.267.886.645 1.152 1.136.278.49.416 1.056.416 1.696 0 .64-.139 1.2-.416 1.68a2.86 2.86 0 0 1-1.184 1.12c-.501.267-1.083.4-1.744.4h-2.816c-.042 0-.064.021-.064.064v4.544c0 .107-.053.16-.16.16h-1.216c-.107 0-.16-.053-.16-.16V14.944c0-.107.053-.16.16-.16h4.32Zm-.208 5.2c.587 0 1.056-.176 1.408-.528.363-.352.544-.816.544-1.392 0-.587-.181-1.056-.544-1.408-.352-.363-.821-.544-1.408-.544h-2.672c-.042 0-.064.021-.064.064v3.744c0 .043.022.064.064.064h2.672Zm8.844-2.208c.342 0 .651.07.929.208.074.032.1.096.08.192l-.256 1.2c-.011.096-.075.128-.192.096a1.673 1.673 0 0 0-.64-.112l-.225.016c-.5.021-.917.197-1.248.528-.32.32-.48.741-.48 1.264v4.672c0 .107-.053.16-.16.16h-1.216c-.106 0-.16-.053-.16-.16v-7.824c0-.107.054-.16.16-.16h1.216c.107 0 .16.053.16.16v.848c0 .032.006.053.017.064.02 0 .037-.01.047-.032.48-.747 1.136-1.12 1.968-1.12Zm5.733 8.352c-.79 0-1.477-.197-2.064-.592-.587-.405-.997-.965-1.232-1.68-.192-.576-.288-1.227-.288-1.952 0-.757.09-1.397.272-1.92.235-.704.645-1.253 1.232-1.648.587-.405 1.285-.608 2.096-.608.768 0 1.435.203 2 .608.576.395.987.939 1.232 1.632.192.544.288 1.184.288 1.92 0 .747-.096 1.403-.288 1.968-.235.715-.64 1.275-1.216 1.68-.576.395-1.253.592-2.032.592Zm0-1.328c.427 0 .8-.117 1.12-.352.32-.245.55-.587.688-1.024.117-.405.176-.907.176-1.504s-.053-1.093-.16-1.488c-.139-.437-.368-.773-.688-1.008-.32-.245-.71-.368-1.168-.368-.437 0-.816.123-1.136.368-.32.235-.55.57-.688 1.008-.117.373-.176.87-.176 1.488 0 .619.059 1.12.176 1.504.128.437.352.779.672 1.024.33.235.725.352 1.184.352Zm10.763-9.84c0-.107.053-.16.16-.16h1.216c.107 0 .16.053.16.16v10.88c0 .107-.053.16-.16.16h-1.216c-.107 0-.16-.053-.16-.16v-.528c0-.021-.01-.037-.032-.048-.01-.01-.027-.005-.048.016a2.51 2.51 0 0 1-.832.624 2.42 2.42 0 0 1-1.04.224c-.768 0-1.408-.187-1.92-.56-.501-.384-.87-.923-1.104-1.616-.203-.565-.304-1.248-.304-2.048 0-.747.085-1.392.256-1.936.224-.704.592-1.253 1.104-1.648.512-.395 1.168-.592 1.968-.592.363 0 .704.075 1.024.224.33.139.613.341.848.608.021.021.037.027.048.016.021-.01.032-.027.032-.048V14.96Zm-.4 8.976c.245-.448.368-1.12.368-2.016 0-.896-.133-1.579-.4-2.048-.31-.544-.763-.816-1.36-.816-.64 0-1.115.256-1.424.768-.341.533-.512 1.237-.512 2.112 0 .821.133 1.483.4 1.984.31.587.816.88 1.52.88.619 0 1.088-.288 1.408-.864Zm9.196-5.92c0-.107.053-.16.16-.16h1.2c.106 0 .16.053.16.16v7.824c0 .107-.053.16-.16.16h-1.2c-.107 0-.16-.053-.16-.16v-.592c0-.021-.01-.032-.032-.032-.01-.01-.027-.005-.048.016-.427.587-1.083.88-1.968.88a3.49 3.49 0 0 1-1.456-.304 2.538 2.538 0 0 1-1.056-.896c-.267-.395-.4-.875-.4-1.44v-5.456c0-.107.053-.16.16-.16h1.2c.106 0 .16.053.16.16v4.976c0 .555.144.992.432 1.312.299.32.715.48 1.248.48s.96-.16 1.28-.48c.32-.33.48-.768.48-1.312v-4.976Zm7.185 8.112c-.81 0-1.504-.203-2.08-.608a3.132 3.132 0 0 1-1.184-1.68c-.16-.49-.24-1.136-.24-1.936 0-.736.08-1.381.24-1.936a3.054 3.054 0 0 1 1.184-1.632c.587-.405 1.28-.608 2.08-.608s1.499.203 2.096.608c.597.405.987.917 1.168 1.536.064.17.107.347.128.528 0 .085-.048.139-.144.16l-1.2.176h-.032c-.075 0-.128-.048-.16-.144l-.048-.256c-.085-.363-.293-.667-.624-.912-.33-.245-.73-.368-1.2-.368-.459 0-.848.123-1.168.368-.32.245-.528.57-.624.976-.096.384-.144.89-.144 1.52 0 .619.048 1.12.144 1.504.107.427.315.763.624 1.008.32.245.71.368 1.168.368.47 0 .87-.123 1.2-.368.341-.245.555-.565.64-.96.01-.01.01-.021 0-.032 0-.021.005-.037.016-.048v-.064c.032-.085.09-.117.176-.096l1.2.192c.085.021.128.064.128.128v.064c0 .096-.026.213-.08.352-.181.65-.57 1.173-1.168 1.568-.597.395-1.296.592-2.096.592Zm9.334-7.168c0 .107-.053.16-.16.16h-1.728c-.043 0-.064.021-.064.064v4.24c0 .448.101.773.304.976.203.192.517.288.944.288h.464c.107 0 .16.053.16.16v.992c0 .107-.053.16-.16.16a13.44 13.44 0 0 1-.736.032c-.81 0-1.424-.144-1.84-.432-.405-.299-.608-.843-.608-1.632v-4.784c0-.043-.021-.064-.064-.064h-.976c-.107 0-.16-.053-.16-.16v-.944c0-.107.053-.16.16-.16h.976c.043 0 .064-.021.064-.064v-1.888c0-.107.053-.16.16-.16h1.152c.107 0 .16.053.16.16v1.888c0 .043.021.064.064.064h1.728c.107 0 .16.053.16.16v.944Zm4.914 7.136c-.64 0-1.205-.096-1.696-.288-.48-.192-.853-.453-1.12-.784a1.78 1.78 0 0 1-.4-1.12v-.176c0-.107.054-.16.16-.16h1.152c.107 0 .16.053.16.16v.08c0 .299.16.56.48.784.331.224.747.336 1.248.336.48 0 .87-.101 1.168-.304.299-.213.448-.48.448-.8a.732.732 0 0 0-.416-.688c-.277-.16-.725-.325-1.344-.496-.608-.17-1.12-.341-1.536-.512a3.067 3.067 0 0 1-1.04-.752c-.277-.33-.416-.752-.416-1.264 0-.715.278-1.28.832-1.696.566-.427 1.312-.64 2.24-.64.619 0 1.163.101 1.632.304.48.192.848.464 1.104.816.256.352.384.747.384 1.184v.048c0 .107-.053.16-.16.16h-1.12c-.106 0-.16-.053-.16-.16v-.048c0-.31-.154-.565-.464-.768-.298-.213-.709-.32-1.232-.32-.469 0-.853.09-1.152.272-.288.181-.432.427-.432.736 0 .31.139.544.416.704.288.16.747.33 1.376.512.619.17 1.131.341 1.536.512.416.16.768.405 1.056.736.288.32.432.741.432 1.264 0 .725-.288 1.301-.864 1.728-.565.427-1.322.64-2.272.64Z"
                  />
                  <path
                    // underline
                    className="text-tabs-stroke-default group-hover:text-tabs-stroke-hover group-active:text-tabs-stroke-active"
                    fill="currentColor"
                    // fill="#CDD1D9"
                    d="M.639 40h117v2h-117z"
                  />
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M12.64 10h20v20h-20z" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </li>
        </ul>
      </nav>

      {/* Divider */}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="56"
          fill="none"
          viewBox="0 0 21 56"
        >
          <path stroke="#1D283A" strokeLinecap="round" d="M10.139 55.5V.5" />
        </svg>
      </div>

      {/* Search Bar */}
      <div className="flex grow items-center justify-between rounded-sm border border-input-stroke-input bg-input-surface-input-background">
        <div className="grow">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-sm bg-input-surface-input-background px-3 py-2.5 text-base font-medium placeholder:text-input-text-input-placeholder focus:outline-none"
          />
        </div>
        <div className="cursor-pointer px-3 py-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <g clipPath="url(#a)">
              <path
                fill="#314362"
                fillRule="evenodd"
                d="M9.586 3.251a6.333 6.333 0 1 0 4.386 10.902.76.76 0 0 1 .182-.182 6.333 6.333 0 0 0-4.568-10.72Zm6.044 11.317a7.833 7.833 0 1 0-1.06 1.06l2.402 2.404a.75.75 0 1 0 1.06-1.061l-2.402-2.403Z"
                clipRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h20v20H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      {/* Language Selector Button */}
      <div className="p-12px">
        <div onClick={toggleDropdown} className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            className="hover:cursor-pointer hover:text-stroke-brand-primary"
          >
            <path
              // fill="#001840"
              fill="currentColor"
              fillRule="evenodd"
              d="M4.038 13.001a12.36 12.36 0 0 0-.367 3c0 1.035.127 2.04.367 3h5.904a21.4 21.4 0 0 1-.271-3.02c.02-1.004.112-2 .27-2.98H4.039Zm.688-2h5.64a21.403 21.403 0 0 1 3.366-7.124A12.353 12.353 0 0 0 4.726 11ZM16.004 4.2a19.4 19.4 0 0 0-3.564 6.802h7.128A19.4 19.4 0 0 0 16.004 4.2Zm4.033 8.802h-8.066a19.405 19.405 0 0 0-.3 3c.022 1.012.123 2.015.3 3h8.066c.177-.985.278-1.988.3-3a19.405 19.405 0 0 0-.3-3Zm2.029 6a21.41 21.41 0 0 0 .271-3.02 21.409 21.409 0 0 0-.271-2.98h5.904c.24.96.367 1.965.367 3s-.127 2.04-.367 3h-5.904Zm-2.498 2H12.44a19.4 19.4 0 0 0 3.564 6.802A19.4 19.4 0 0 0 19.568 21Zm-5.836 7.125A21.404 21.404 0 0 1 10.365 21H4.726a12.353 12.353 0 0 0 9.006 7.125Zm4.544 0A21.404 21.404 0 0 0 21.643 21h5.639a12.353 12.353 0 0 1-9.006 7.125ZM27.282 11h-5.64a21.403 21.403 0 0 0-3.366-7.124A12.353 12.353 0 0 1 27.282 11ZM1.671 16c0-7.916 6.417-14.333 14.333-14.333S30.337 8.085 30.337 16 23.92 30.334 16.004 30.334 1.67 23.917 1.67 16.001Z"
              clipRule="evenodd"
            />
          </svg>
          {/* dropmenu */}
          <ul
            className={`absolute left-0.5 top-80px flex h-200px w-160px -translate-x-1/2 flex-col items-center justify-evenly rounded-xs border bg-surface-neutral-surface-lv2 px-24px text-center shadow-downDropShadowS ${dropdownOpen ? 'block' : 'hidden'}`}
          >
            {languages.map((lang: { label: string; code: string }) => (
              <li
                key={lang.code}
                className="cursor-pointer text-base font-medium text-button-text-secondary"
                // onClick={() => changeLanguage(lang.code)} // ToDo: (20240618 - Liz) i18n
              >
                {lang.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Theme Toggle (Day/Night mode) Button */}
      <ThemeToggle />
    </header>
  );
};

export default LandingHeader;
