import { useState } from 'react';
import Image from 'next/image';

interface ModalProps {
  isMaxListVisible: boolean;
  isProListVisible: boolean;
  isEnterpriseListVisible: boolean;
  showProList: () => void;
  showMaxList: () => void;
  showEnterpriseList: () => void;
  closeModal: () => void;
}

interface TypeProListProps {
  openModal: () => void;
  hideMaxList: () => void;
  hideEnterpriseList: () => void;
}

interface TypeMaxListProps {
  openModal: () => void;
  hideProList: () => void;
  hideEnterpriseList: () => void;
}

interface TypeEnterpriseListProps {
  openModal: () => void;
  hideProList: () => void;
  hideMaxList: () => void;
}

const typeProData = {
  type: 'Pro',
  subtle: 'Turning imagination into reality',
  cpu: '4 Core / 8 Thread',
  mb: '2 Type-C,1 Type-A',
  mbSub: 'Supports DDR5 memory with a maximum capacity of up to 128GB',
  ram: '32GB (16GB*2)',
  ssd: '1TB/Gen3/Read2400M/Write1800M',
  hdd: '1TB',
  vga: '1',
};

const typeMaxData = {
  type: 'Max',
  subtle: 'Making wishes come true',
  cpu: '14 Core / 20 Thread',
  mb: '2 Type-C,1 Type-A',
  mbSub: 'Supports DDR5 memory with a maximum capacity of up to 128GB',
  ram: '32GB (16GB*2)',
  ssd: '2TB/Gen4/Read7400M/Write7000M',
  hdd: '4TB',
  vga: '2',
};

const typeEnterpriseData = {
  type: 'Enterprise',
  subtle: 'The power to lead the future',
  cpu: '24 Core / 32 Thread',
  mb: '14 Type-C,8 Type-A',
  mbSub: 'Supports DDR5 memory with a maximum capacity of up to 2048GB',
  ram: '64GB (32GB*2)',
  ssd: '2TB/Gen4/Read7400M/Write7000M',
  hdd: '12TB',
  vga: '4',
};

const TypeProList = ({ openModal, hideMaxList, hideEnterpriseList }: TypeProListProps) => {
  const handleClick = () => {
    openModal();
    hideMaxList();
    hideEnterpriseList();
  };

  return (
    <div className="flex-1 space-y-40px text-text-text-primary">
      <div className="space-y-8px">
        <h1 className="text-44px font-bold">
          {typeProData.type}
          <span className="text-32px font-semibold text-text-neutral-secondary"> /Type</span>
        </h1>
        <h5 className="font-semibold text-text-neutral-tertiary">{typeProData.subtle}</h5>
      </div>

      <ul className="space-y-20px">
        {/* ===== CPU ===== */}
        <li className="flex items-center gap-20px">
          {/* label */}
          <div className="flex w-fit items-center gap-3px rounded-full bg-badge-surface-soft-primary p-10px text-badge-text-primary-solid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <g clipPath="url(#a)">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M5.25 1.167v1.166m3.5-1.167v1.167m-3.5 9.334v1.166m3.5-1.167v1.167m2.917-7.583h1.167m-1.167 2.916h1.167M1.167 5.25h1.167M1.167 8.166h1.167m2.8 3.5h3.733c.98 0 1.47 0 1.844-.19a1.75 1.75 0 0 0 .765-.765c.191-.374.191-.864.191-1.845V5.133c0-.98 0-1.47-.19-1.844a1.75 1.75 0 0 0-.766-.765c-.374-.19-.864-.19-1.844-.19H5.134c-.98 0-1.47 0-1.845.19a1.75 1.75 0 0 0-.765.765c-.19.374-.19.864-.19 1.844v3.734c0 .98 0 1.47.19 1.844.168.33.436.597.765.765.375.19.865.19 1.845.19Zm1.05-2.916h1.633c.327 0 .49 0 .615-.064a.583.583 0 0 0 .255-.255c.063-.124.063-.288.063-.614V6.182c0-.327 0-.49-.063-.615a.583.583 0 0 0-.255-.255c-.125-.063-.288-.063-.615-.063H6.184c-.327 0-.49 0-.615.063a.583.583 0 0 0-.255.255c-.064.125-.064.288-.064.615v1.633c0 .327 0 .49.064.615.056.11.145.2.255.255.125.064.288.064.615.064Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h14v14H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h6 className="font-medium">CPU</h6>
          </div>
          {/* content */}
          <p className="text-lg font-semibold">{typeProData.cpu}</p>
        </li>
        {/* ===== MB ===== */}
        <li className="flex items-center gap-20px">
          {/* label */}
          <div className="flex w-fit items-center gap-3px rounded-full bg-badge-surface-soft-primary p-10px text-badge-text-primary-solid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <g clipPath="url(#a)">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7 7h.005m2.057 2.062C6.328 11.796 3.189 13.09 2.05 11.95c-1.14-1.14.153-4.279 2.887-7.012C7.671 2.204 10.81.91 11.949 2.05c1.14 1.14-.153 4.279-2.887 7.012Zm0-4.125c2.733 2.734 4.026 5.874 2.887 7.013-1.139 1.139-4.278-.154-7.012-2.888C2.203 6.33.911 3.19 2.05 2.05c1.139-1.139 4.278.154 7.012 2.887ZM7.292 7a.292.292 0 1 1-.584 0 .292.292 0 0 1 .583 0Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h14v14H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h6 className="font-medium">MB</h6>
          </div>
          {/* content */}
          <p className="text-lg font-semibold">
            {typeProData.mb} <br />
            {typeProData.mbSub}
          </p>
        </li>

        {/* ===== RAM ===== */}
        <li className="flex items-center gap-20px">
          {/* label */}
          <div className="flex w-fit items-center gap-3px rounded-full bg-badge-surface-soft-primary p-10px text-badge-text-primary-solid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M11.666 2.917c0 .966-2.089 1.75-4.666 1.75-2.578 0-4.667-.784-4.667-1.75m9.333 0c0-.967-2.089-1.75-4.666-1.75-2.578 0-4.667.783-4.667 1.75m9.333 0v8.166c0 .967-2.089 1.75-4.666 1.75-2.578 0-4.667-.783-4.667-1.75V2.917m9.333 2.722c0 .966-2.089 1.75-4.666 1.75-2.578 0-4.667-.784-4.667-1.75m9.333 2.72c0 .966-2.089 1.75-4.666 1.75-2.578 0-4.667-.784-4.667-1.75"
                />
              </svg>
            </div>
            <h6 className="font-medium">RAM</h6>
          </div>
          {/* content */}
          <p className="text-lg font-semibold">{typeProData.ram}</p>
        </li>

        {/* ===== SSD/HDD ===== */}
        <li className="flex items-center gap-20px">
          {/* label */}
          <div className="flex w-fit items-center gap-3px rounded-full bg-badge-surface-soft-primary p-10px text-badge-text-primary-solid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.917 11.666H9.8c-.98 0-1.47 0-1.844-.19a1.75 1.75 0 0 1-.765-.765C7 10.337 7 9.847 7 8.866V5.133c0-.98 0-1.47.19-1.844a1.75 1.75 0 0 1 .766-.765c.374-.19.864-.19 1.844-.19h.117m0 9.332a1.167 1.167 0 1 0 2.333 0 1.167 1.167 0 0 0-2.333 0Zm0-9.333a1.167 1.167 0 1 0 2.333 0 1.167 1.167 0 0 0-2.333 0ZM4.083 7h5.834M4.083 7A1.167 1.167 0 1 1 1.75 7a1.167 1.167 0 0 1 2.333 0Zm5.834 0a1.167 1.167 0 1 0 2.333 0 1.167 1.167 0 0 0-2.333 0Z"
                />
              </svg>
            </div>
            <h6 className="font-medium">SSD/HDD</h6>
          </div>
          {/* content */}
          <p className="text-lg font-semibold">
            <span>SSD: {typeProData.ssd}</span> <br />
            <span>HDD: {typeProData.hdd}</span>
          </p>
        </li>

        {/* ===== VGA ===== */}
        <li className="flex items-center gap-20px">
          {/* label */}
          <div className="flex w-fit items-center gap-3px rounded-full bg-badge-surface-soft-primary p-10px text-badge-text-primary-solid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.917 10.5a1.75 1.75 0 0 1-1.75-1.75v-4.2c0-.98 0-1.47.19-1.844a1.75 1.75 0 0 1 .766-.765c.374-.191.864-.191 1.844-.191h6.067c.98 0 1.47 0 1.844.19.33.169.597.436.765.766.19.374.19.864.19 1.844v4.2a1.75 1.75 0 0 1-1.75 1.75M5.08 12.25h3.84c.318 0 .477 0 .558-.065a.292.292 0 0 0 .108-.231c-.002-.103-.103-.225-.307-.47L7.36 9.18c-.123-.148-.185-.221-.259-.248a.292.292 0 0 0-.2 0c-.074.027-.135.1-.258.248l-1.92 2.305c-.204.244-.306.366-.307.469a.292.292 0 0 0 .108.231c.08.065.24.065.557.065Z"
                />
              </svg>
            </div>
            <h6 className="font-medium">VGA</h6>
          </div>
          {/* content */}
          <p className="text-lg font-semibold">{typeProData.vga}</p>
        </li>
      </ul>

      <div>
        <button
          type="button"
          className="flex items-center justify-center gap-8px rounded-xs border border-button-stroke-secondary px-24px py-10px text-button-text-secondary transition-colors duration-300 ease-in-out hover:border-button-stroke-primary-hover hover:text-button-text-primary-hover"
          onClick={handleClick}
        >
          <p className="text-base font-medium">Detail info</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <g clipPath="url(#a)">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M9.809 3.713a.938.938 0 0 1 1.326 0l5.625 5.625a.938.938 0 0 1 0 1.326l-5.625 5.625a.938.938 0 0 1-1.326-1.326l4.962-4.962-4.962-4.962a.937.937 0 0 1 0-1.326Z"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2.972 10.001c0-.518.42-.938.937-.938h11.406a.937.937 0 1 1 0 1.875H3.91a.938.938 0 0 1-.937-.937Z"
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
        </button>
      </div>
    </div>
  );
};

const TypeMaxList = ({ openModal, hideProList, hideEnterpriseList }: TypeMaxListProps) => {
  const handleClick = () => {
    openModal();
    hideProList();
    hideEnterpriseList();
  };

  return (
    <div className="flex-1 space-y-40px text-text-text-primary">
      <div className="space-y-8px">
        <h1 className="text-44px font-bold">
          {typeMaxData.type}
          <span className="text-32px font-semibold text-text-neutral-secondary"> /Type</span>
        </h1>
        <h5 className="font-semibold text-text-neutral-tertiary">{typeMaxData.subtle}</h5>
      </div>

      <ul className="space-y-20px">
        {/* ===== CPU ===== */}
        <li className="flex items-center gap-20px">
          {/* label */}
          <div className="flex w-fit items-center gap-3px rounded-full bg-badge-surface-soft-primary p-10px text-badge-text-primary-solid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <g clipPath="url(#a)">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M5.25 1.167v1.166m3.5-1.167v1.167m-3.5 9.334v1.166m3.5-1.167v1.167m2.917-7.583h1.167m-1.167 2.916h1.167M1.167 5.25h1.167M1.167 8.166h1.167m2.8 3.5h3.733c.98 0 1.47 0 1.844-.19a1.75 1.75 0 0 0 .765-.765c.191-.374.191-.864.191-1.845V5.133c0-.98 0-1.47-.19-1.844a1.75 1.75 0 0 0-.766-.765c-.374-.19-.864-.19-1.844-.19H5.134c-.98 0-1.47 0-1.845.19a1.75 1.75 0 0 0-.765.765c-.19.374-.19.864-.19 1.844v3.734c0 .98 0 1.47.19 1.844.168.33.436.597.765.765.375.19.865.19 1.845.19Zm1.05-2.916h1.633c.327 0 .49 0 .615-.064a.583.583 0 0 0 .255-.255c.063-.124.063-.288.063-.614V6.182c0-.327 0-.49-.063-.615a.583.583 0 0 0-.255-.255c-.125-.063-.288-.063-.615-.063H6.184c-.327 0-.49 0-.615.063a.583.583 0 0 0-.255.255c-.064.125-.064.288-.064.615v1.633c0 .327 0 .49.064.615.056.11.145.2.255.255.125.064.288.064.615.064Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h14v14H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h6 className="font-medium">CPU</h6>
          </div>
          {/* content */}
          <p className="text-lg font-semibold">{typeMaxData.cpu}</p>
        </li>
        {/* ===== MB ===== */}
        <li className="flex items-center gap-20px">
          {/* label */}
          <div className="flex w-fit items-center gap-3px rounded-full bg-badge-surface-soft-primary p-10px text-badge-text-primary-solid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <g clipPath="url(#a)">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7 7h.005m2.057 2.062C6.328 11.796 3.189 13.09 2.05 11.95c-1.14-1.14.153-4.279 2.887-7.012C7.671 2.204 10.81.91 11.949 2.05c1.14 1.14-.153 4.279-2.887 7.012Zm0-4.125c2.733 2.734 4.026 5.874 2.887 7.013-1.139 1.139-4.278-.154-7.012-2.888C2.203 6.33.911 3.19 2.05 2.05c1.139-1.139 4.278.154 7.012 2.887ZM7.292 7a.292.292 0 1 1-.584 0 .292.292 0 0 1 .583 0Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h14v14H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h6 className="font-medium">MB</h6>
          </div>
          {/* content */}
          <p className="text-lg font-semibold">
            {typeMaxData.mb} <br />
            {typeMaxData.mbSub}
          </p>
        </li>

        {/* ===== RAM ===== */}
        <li className="flex items-center gap-20px">
          {/* label */}
          <div className="flex w-fit items-center gap-3px rounded-full bg-badge-surface-soft-primary p-10px text-badge-text-primary-solid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M11.666 2.917c0 .966-2.089 1.75-4.666 1.75-2.578 0-4.667-.784-4.667-1.75m9.333 0c0-.967-2.089-1.75-4.666-1.75-2.578 0-4.667.783-4.667 1.75m9.333 0v8.166c0 .967-2.089 1.75-4.666 1.75-2.578 0-4.667-.783-4.667-1.75V2.917m9.333 2.722c0 .966-2.089 1.75-4.666 1.75-2.578 0-4.667-.784-4.667-1.75m9.333 2.72c0 .966-2.089 1.75-4.666 1.75-2.578 0-4.667-.784-4.667-1.75"
                />
              </svg>
            </div>
            <h6 className="font-medium">RAM</h6>
          </div>
          {/* content */}
          <p className="text-lg font-semibold">{typeMaxData.ram}</p>
        </li>

        {/* ===== SSD/HDD ===== */}
        <li className="flex items-center gap-20px">
          {/* label */}
          <div className="flex w-fit items-center gap-3px rounded-full bg-badge-surface-soft-primary p-10px text-badge-text-primary-solid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.917 11.666H9.8c-.98 0-1.47 0-1.844-.19a1.75 1.75 0 0 1-.765-.765C7 10.337 7 9.847 7 8.866V5.133c0-.98 0-1.47.19-1.844a1.75 1.75 0 0 1 .766-.765c.374-.19.864-.19 1.844-.19h.117m0 9.332a1.167 1.167 0 1 0 2.333 0 1.167 1.167 0 0 0-2.333 0Zm0-9.333a1.167 1.167 0 1 0 2.333 0 1.167 1.167 0 0 0-2.333 0ZM4.083 7h5.834M4.083 7A1.167 1.167 0 1 1 1.75 7a1.167 1.167 0 0 1 2.333 0Zm5.834 0a1.167 1.167 0 1 0 2.333 0 1.167 1.167 0 0 0-2.333 0Z"
                />
              </svg>
            </div>
            <h6 className="font-medium">SSD/HDD</h6>
          </div>
          {/* content */}
          <p className="text-lg font-semibold">
            <span>SSD: {typeMaxData.ssd}</span> <br />
            <span>HDD: {typeMaxData.hdd}</span>
          </p>
        </li>

        {/* ===== VGA ===== */}
        <li className="flex items-center gap-20px">
          {/* label */}
          <div className="flex w-fit items-center gap-3px rounded-full bg-badge-surface-soft-primary p-10px text-badge-text-primary-solid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.917 10.5a1.75 1.75 0 0 1-1.75-1.75v-4.2c0-.98 0-1.47.19-1.844a1.75 1.75 0 0 1 .766-.765c.374-.191.864-.191 1.844-.191h6.067c.98 0 1.47 0 1.844.19.33.169.597.436.765.766.19.374.19.864.19 1.844v4.2a1.75 1.75 0 0 1-1.75 1.75M5.08 12.25h3.84c.318 0 .477 0 .558-.065a.292.292 0 0 0 .108-.231c-.002-.103-.103-.225-.307-.47L7.36 9.18c-.123-.148-.185-.221-.259-.248a.292.292 0 0 0-.2 0c-.074.027-.135.1-.258.248l-1.92 2.305c-.204.244-.306.366-.307.469a.292.292 0 0 0 .108.231c.08.065.24.065.557.065Z"
                />
              </svg>
            </div>
            <h6 className="font-medium">VGA</h6>
          </div>
          {/* content */}
          <p className="text-lg font-semibold">{typeMaxData.vga}</p>
        </li>
      </ul>

      <div>
        <button
          type="button"
          className="flex items-center justify-center gap-8px rounded-xs border border-button-stroke-secondary px-24px py-10px text-button-text-secondary transition-colors duration-300 ease-in-out hover:border-button-stroke-primary-hover hover:text-button-text-primary-hover"
          onClick={handleClick}
        >
          <p className="text-base font-medium">Detail info</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <g clipPath="url(#a)">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M9.809 3.713a.938.938 0 0 1 1.326 0l5.625 5.625a.938.938 0 0 1 0 1.326l-5.625 5.625a.938.938 0 0 1-1.326-1.326l4.962-4.962-4.962-4.962a.937.937 0 0 1 0-1.326Z"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2.972 10.001c0-.518.42-.938.937-.938h11.406a.937.937 0 1 1 0 1.875H3.91a.938.938 0 0 1-.937-.937Z"
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
        </button>
      </div>
    </div>
  );
};

const TypeEnterpriseList = ({ openModal, hideProList, hideMaxList }: TypeEnterpriseListProps) => {
  const handleClick = () => {
    openModal();
    hideProList();
    hideMaxList();
  };

  return (
    <div className="space-y-40px text-text-text-primary">
      <div className="space-y-8px">
        <h1 className="text-44px font-bold">
          {typeEnterpriseData.type}
          <span className="text-32px font-semibold text-text-neutral-secondary"> /Type</span>
        </h1>
        <h5 className="font-semibold text-text-neutral-tertiary">{typeEnterpriseData.subtle}</h5>
      </div>

      <ul className="space-y-20px">
        {/* ===== CPU ===== */}
        <li className="flex items-center gap-20px">
          {/* label */}
          <div className="flex w-fit items-center gap-3px rounded-full bg-badge-surface-soft-primary p-10px text-badge-text-primary-solid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <g clipPath="url(#a)">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M5.25 1.167v1.166m3.5-1.167v1.167m-3.5 9.334v1.166m3.5-1.167v1.167m2.917-7.583h1.167m-1.167 2.916h1.167M1.167 5.25h1.167M1.167 8.166h1.167m2.8 3.5h3.733c.98 0 1.47 0 1.844-.19a1.75 1.75 0 0 0 .765-.765c.191-.374.191-.864.191-1.845V5.133c0-.98 0-1.47-.19-1.844a1.75 1.75 0 0 0-.766-.765c-.374-.19-.864-.19-1.844-.19H5.134c-.98 0-1.47 0-1.845.19a1.75 1.75 0 0 0-.765.765c-.19.374-.19.864-.19 1.844v3.734c0 .98 0 1.47.19 1.844.168.33.436.597.765.765.375.19.865.19 1.845.19Zm1.05-2.916h1.633c.327 0 .49 0 .615-.064a.583.583 0 0 0 .255-.255c.063-.124.063-.288.063-.614V6.182c0-.327 0-.49-.063-.615a.583.583 0 0 0-.255-.255c-.125-.063-.288-.063-.615-.063H6.184c-.327 0-.49 0-.615.063a.583.583 0 0 0-.255.255c-.064.125-.064.288-.064.615v1.633c0 .327 0 .49.064.615.056.11.145.2.255.255.125.064.288.064.615.064Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h14v14H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h6 className="font-medium">CPU</h6>
          </div>
          {/* content */}
          <p className="text-lg font-semibold">{typeEnterpriseData.cpu}</p>
        </li>
        {/* ===== MB ===== */}
        <li className="flex items-center gap-20px">
          {/* label */}
          <div className="flex w-fit items-center gap-3px rounded-full bg-badge-surface-soft-primary p-10px text-badge-text-primary-solid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <g clipPath="url(#a)">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7 7h.005m2.057 2.062C6.328 11.796 3.189 13.09 2.05 11.95c-1.14-1.14.153-4.279 2.887-7.012C7.671 2.204 10.81.91 11.949 2.05c1.14 1.14-.153 4.279-2.887 7.012Zm0-4.125c2.733 2.734 4.026 5.874 2.887 7.013-1.139 1.139-4.278-.154-7.012-2.888C2.203 6.33.911 3.19 2.05 2.05c1.139-1.139 4.278.154 7.012 2.887ZM7.292 7a.292.292 0 1 1-.584 0 .292.292 0 0 1 .583 0Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h14v14H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h6 className="font-medium">MB</h6>
          </div>
          {/* content */}
          <p className="text-lg font-semibold">
            {typeEnterpriseData.mb} <br />
            {typeEnterpriseData.mbSub}
          </p>
        </li>

        {/* ===== RAM ===== */}
        <li className="flex items-center gap-20px">
          {/* label */}
          <div className="flex w-fit items-center gap-3px rounded-full bg-badge-surface-soft-primary p-10px text-badge-text-primary-solid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M11.666 2.917c0 .966-2.089 1.75-4.666 1.75-2.578 0-4.667-.784-4.667-1.75m9.333 0c0-.967-2.089-1.75-4.666-1.75-2.578 0-4.667.783-4.667 1.75m9.333 0v8.166c0 .967-2.089 1.75-4.666 1.75-2.578 0-4.667-.783-4.667-1.75V2.917m9.333 2.722c0 .966-2.089 1.75-4.666 1.75-2.578 0-4.667-.784-4.667-1.75m9.333 2.72c0 .966-2.089 1.75-4.666 1.75-2.578 0-4.667-.784-4.667-1.75"
                />
              </svg>
            </div>
            <h6 className="font-medium">RAM</h6>
          </div>
          {/* content */}
          <p className="text-lg font-semibold">{typeEnterpriseData.ram}</p>
        </li>

        {/* ===== SSD/HDD ===== */}
        <li className="flex items-center gap-20px">
          {/* label */}
          <div className="flex w-fit items-center gap-3px rounded-full bg-badge-surface-soft-primary p-10px text-badge-text-primary-solid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.917 11.666H9.8c-.98 0-1.47 0-1.844-.19a1.75 1.75 0 0 1-.765-.765C7 10.337 7 9.847 7 8.866V5.133c0-.98 0-1.47.19-1.844a1.75 1.75 0 0 1 .766-.765c.374-.19.864-.19 1.844-.19h.117m0 9.332a1.167 1.167 0 1 0 2.333 0 1.167 1.167 0 0 0-2.333 0Zm0-9.333a1.167 1.167 0 1 0 2.333 0 1.167 1.167 0 0 0-2.333 0ZM4.083 7h5.834M4.083 7A1.167 1.167 0 1 1 1.75 7a1.167 1.167 0 0 1 2.333 0Zm5.834 0a1.167 1.167 0 1 0 2.333 0 1.167 1.167 0 0 0-2.333 0Z"
                />
              </svg>
            </div>
            <h6 className="font-medium">SSD/HDD</h6>
          </div>
          {/* content */}
          <p className="text-lg font-semibold">
            <span>SSD: {typeEnterpriseData.ssd}</span> <br />
            <span>HDD: {typeEnterpriseData.hdd}</span>
          </p>
        </li>

        {/* ===== VGA ===== */}
        <li className="flex items-center gap-20px">
          {/* label */}
          <div className="flex w-fit items-center gap-3px rounded-full bg-badge-surface-soft-primary p-10px text-badge-text-primary-solid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.917 10.5a1.75 1.75 0 0 1-1.75-1.75v-4.2c0-.98 0-1.47.19-1.844a1.75 1.75 0 0 1 .766-.765c.374-.191.864-.191 1.844-.191h6.067c.98 0 1.47 0 1.844.19.33.169.597.436.765.766.19.374.19.864.19 1.844v4.2a1.75 1.75 0 0 1-1.75 1.75M5.08 12.25h3.84c.318 0 .477 0 .558-.065a.292.292 0 0 0 .108-.231c-.002-.103-.103-.225-.307-.47L7.36 9.18c-.123-.148-.185-.221-.259-.248a.292.292 0 0 0-.2 0c-.074.027-.135.1-.258.248l-1.92 2.305c-.204.244-.306.366-.307.469a.292.292 0 0 0 .108.231c.08.065.24.065.557.065Z"
                />
              </svg>
            </div>
            <h6 className="font-medium">VGA</h6>
          </div>
          {/* content */}
          <p className="text-lg font-semibold">{typeEnterpriseData.vga}</p>
        </li>
      </ul>

      <div>
        <button
          type="button"
          className="flex items-center justify-center gap-8px rounded-xs border border-button-stroke-secondary px-24px py-10px text-button-text-secondary transition-colors duration-300 ease-in-out hover:border-button-stroke-primary-hover hover:text-button-text-primary-hover"
          onClick={handleClick}
        >
          <p className="text-base font-medium">Detail info</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <g clipPath="url(#a)">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M9.809 3.713a.938.938 0 0 1 1.326 0l5.625 5.625a.938.938 0 0 1 0 1.326l-5.625 5.625a.938.938 0 0 1-1.326-1.326l4.962-4.962-4.962-4.962a.937.937 0 0 1 0-1.326Z"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2.972 10.001c0-.518.42-.938.937-.938h11.406a.937.937 0 1 1 0 1.875H3.91a.938.938 0 0 1-.937-.937Z"
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
        </button>
      </div>
    </div>
  );
};

const Modal = ({
  isMaxListVisible,
  isProListVisible,
  isEnterpriseListVisible,
  showProList,
  showMaxList,
  showEnterpriseList,
  closeModal,
}: ModalProps) => {
  const handleClick = () => {
    closeModal();
    showProList();
    showMaxList();
    showEnterpriseList();
  };

  return (
    <div className="mx-auto flex max-w-500px flex-1 flex-col justify-between gap-16px rounded-lg bg-surface-neutral-surface-lv1 px-40px py-20px shadow-downDropShadowM">
      <h4 className="text-xl font-bold text-text-text-primary">Detail info.</h4>

      <p className="text-lg font-semibold text-text-neutral-primary">
        {isProListVisible && (
          <>
            The PRO model features ARGB fans and a 1TB solid-state drive, utilizing LDPC error
            correction and AES 256-bit advanced encryption technology. It offers professional-grade
            performance in both transfer power and read speed.
          </>
        )}
        {isMaxListVisible && (
          <>
            The MAX model features ARGB fans and a 1TB solid-state drive, utilizing LDPC error
            correction and AES 256-bit advanced encryption technology. It offers faster and more
            efficient transfer power and read speeds compared to the PRO model.
          </>
        )}
        {isEnterpriseListVisible && (
          <>
            The Enterprise model features a water cooling system and a 2TB solid-state drive. It has
            seven slots to accommodate high-power graphics cards, making it suitable for handling
            complex data and running multi-layer machine learning models.
          </>
        )}
      </p>

      <p className="text-lg font-semibold text-text-neutral-tertiary">
        {isProListVisible && (
          <>
            CPU: Intel i3-14100(4Core/8Thread) <br />
            MB: GIGABYTE Z790M AORUS ELITE AX ICE <br />
            RAM: Kingston 32GB(16GB*2) DDR5-5600/CL36 FURY Beast <br />
            SSD: ADATA LEGEND 710 1TB/Gen3 <br />
            HDD: Seagate 1TB <br />
            VGA: ASUS PROART-RTX4060TI-O16G*1
          </>
        )}
        {isMaxListVisible && (
          <>
            CPU: Intel i5-14100(14Core/20Thread) <br />
            MB: GIGABYTE Z790M AORUS ELITE AX ICE <br />
            RAM: Kingston 32GB(16GB*2) DDR5-5600/CL36 FURY Beast <br />
            SSD:Micron Crucial T500 2TB/Gen4 <br />
            HDD: WD 4TB <br />
            VGA: ASUS PROART-RTX4060TI-O16G*2
          </>
        )}
        {isEnterpriseListVisible && (
          <>
            CPU: Intel i9-14900(24Core/32Thread) <br />
            MB: ASUS Pro WS W790-ACE <br />
            RAM:Kingston 64GB(32GB*2) <br />
            SSD:Micron Crucial T500 2TB/Gen4 <br />
            HDD:WD 12TB/256MB <br />
            VGA: ASUS PROART-RTX4060TI-O16G*4
          </>
        )}
      </p>

      {/* Back button */}
      <button
        type="button"
        className="rounded-xs border border-button-stroke-secondary px-16px py-8px text-button-text-secondary hover:border-button-stroke-primary-hover hover:text-button-text-primary-hover"
        onClick={handleClick}
      >
        Back
      </button>
    </div>
  );
};

const ProductComparison = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Info: (240702 - Liz) 控制列表的顯示 & 決定 Modal 的內容
  const [isProListVisible, setIsProListVisible] = useState<boolean>(true);
  const [isMaxListVisible, setIsMaxListVisible] = useState<boolean>(true);
  const [isEnterpriseListVisible, setIsEnterpriseListVisible] = useState<boolean>(true);
  const showProList = () => {
    setIsProListVisible(true);
  };
  const hideProList = () => {
    setIsProListVisible(false);
  };
  const showMaxList = () => {
    setIsMaxListVisible(true);
  };
  const hideMaxList = () => {
    setIsMaxListVisible(false);
  };
  const showEnterpriseList = () => {
    setIsEnterpriseListVisible(true);
  };
  const hideEnterpriseList = () => {
    setIsEnterpriseListVisible(false);
  };

  const [isProductDefault, setIsProductDefault] = useState<boolean>(true);
  // true: Pro and Max, false: Enterprise, Default: Pro and Max
  const selectEnterprise = () => {
    setIsProductDefault(false);
    closeModal();
    showEnterpriseList();
  };
  const selectProAndMax = () => {
    setIsProductDefault(true);
    closeModal();
    showMaxList();
    showProList();
  };

  return (
    <section className="mx-auto max-w-1440px py-20px">
      <div className="my-60px space-y-20px text-center text-text-neutral-primary">
        <h2 className="text-64px font-bold">
          Which Product is<span className="text-text-brand-primary-lv2"> Right </span>for you?
        </h2>
        <h3 className="text-lg font-semibold">
          Find the right device model for you. The chart compares the performance of various models,
          helping you identify the one that meets your needs.
        </h3>
      </div>

      <div className="flex h-400px items-center justify-center">
        {/* Pro and Max Image */}
        <div className="flex items-center">
          <Image
            src={'/product/type_pro_max.png'}
            width={1000}
            height={800}
            alt="test"
            className={isProductDefault ? 'h-400px w-auto' : 'h-auto w-320px opacity-30'}
          ></Image>
          {isProductDefault && (
            <button
              type="button"
              className="rounded-xs border border-button-stroke-secondary p-16px"
              onClick={selectEnterprise}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M6.973 4.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.061l-5 5a.75.75 0 1 1-1.06-1.06l4.47-4.47-4.47-4.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          )}
        </div>

        {/* Enterprise Image */}
        <div className="flex items-center">
          {!isProductDefault && (
            <button
              type="button"
              className="rounded-xs border border-button-stroke-secondary p-16px"
              onClick={selectProAndMax}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.033 4.47a.75.75 0 0 1 0 1.061l-4.47 4.47 4.47 4.47a.75.75 0 0 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          )}

          <Image
            src={'/product/type_enterprise.png'}
            width={1000}
            height={800}
            alt="test"
            className={isProductDefault ? 'h-auto w-320px opacity-30' : 'h-400px w-auto'}
          ></Image>
        </div>
      </div>

      <div className="px-70px">
        {/* Show TypeProList & TypeMaxList  */}
        {isProductDefault && (
          <div className="flex items-center justify-center gap-70px">
            {isProListVisible && (
              <TypeProList
                openModal={openModal}
                hideMaxList={hideMaxList}
                hideEnterpriseList={hideEnterpriseList}
              />
            )}

            {isMaxListVisible && (
              <TypeMaxList
                openModal={openModal}
                hideProList={hideProList}
                hideEnterpriseList={hideEnterpriseList}
              />
            )}

            {isModalOpen && (
              <Modal
                isMaxListVisible={isMaxListVisible}
                isProListVisible={isProListVisible}
                isEnterpriseListVisible={isEnterpriseListVisible}
                showProList={showProList}
                showMaxList={showMaxList}
                showEnterpriseList={showEnterpriseList}
                closeModal={closeModal}
              />
            )}
          </div>
        )}

        {/* Show TypeEnterpriseList */}
        {!isProductDefault && (
          <div className="flex justify-center">
            <TypeEnterpriseList
              openModal={openModal}
              hideProList={hideProList}
              hideMaxList={hideMaxList}
            />

            {isModalOpen && (
              <Modal
                isMaxListVisible={isMaxListVisible}
                isProListVisible={isProListVisible}
                isEnterpriseListVisible={isEnterpriseListVisible}
                showProList={showProList}
                showMaxList={showMaxList}
                showEnterpriseList={showEnterpriseList}
                closeModal={closeModal}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductComparison;
