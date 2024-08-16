import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    // On mount, check the user's preference
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsOn(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsOn(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isOn) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsOn(!isOn);
  };

  return (
    <div
      className={`flex h-36px w-66px flex-none cursor-pointer items-center rounded-full p-2px transition-colors duration-300 ease-in-out ${isOn ? 'bg-switch-surface-active' : 'bg-switch-surface-base'}`}
      onClick={toggleTheme}
    >
      <div
        className={`flex h-32px w-32px items-center justify-center rounded-full bg-white shadow-md transition-transform ease-in-out ${isOn ? 'translate-x-30px' : ''}`}
      >
        {isOn ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="none"
            viewBox="0 0 12 12"
          >
            <g clipPath="url(#a)">
              <path
                fill="#314362"
                fillRule="evenodd"
                d="M4.61.47a.75.75 0 0 1 .153.84 4.481 4.481 0 0 0 5.93 5.93.75.75 0 0 1 .992.991A5.982 5.982 0 1 1 3.771.317.75.75 0 0 1 4.61.47ZM2.878 2.798a4.481 4.481 0 0 0 6.326 6.326 5.981 5.981 0 0 1-6.326-6.326Z"
                clipRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h12v12H0z" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="none"
            viewBox="0 0 12 12"
          >
            <g clipPath="url(#a)">
              <path
                fill="#314362"
                fillRule="evenodd"
                d="M6.002.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V1a.75.75 0 0 1 .75-.75ZM2.752 6a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75Zm0 0a3.25 3.25 0 0 0 3.25 3.25.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75A3.25 3.25 0 0 0 9.252 6c0 .414.335.75.75.75h1a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0-.75.75 3.25 3.25 0 0 0-6.5 0Zm-.83-4.08a.75.75 0 0 1 1.06 0l.707.707a.75.75 0 0 1-1.06 1.06L1.92 2.98a.75.75 0 0 1 0-1.06Zm8.16 0a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 0 1-1.06-1.06l.706-.707a.75.75 0 0 1 1.061 0Zm-4.08 2.33a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM3.689 8.315a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 0 1-1.06-1.06l.706-.707a.75.75 0 0 1 1.061 0Zm4.625 0a.75.75 0 0 1 1.061 0l.707.707a.75.75 0 1 1-1.06 1.06l-.708-.707a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h12v12H0z" />
              </clipPath>
            </defs>
          </svg>
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
