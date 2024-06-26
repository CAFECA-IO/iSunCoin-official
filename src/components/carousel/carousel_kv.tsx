import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KvAnimation from '@/components/carousel/kv_animation';

const CarouselKv = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Slide transition takes 0.5 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500, // Each slide stays for 4.5 seconds
    fade: true,
  };

  return (
    <div className="flex items-start justify-center">
      <div className="mb-30px w-full max-w-1440px">
        <Slider {...settings}>
          <KvAnimation />
          <section className="relative flex min-h-875px py-80px">
            <div className="absolute bottom-0 right-0 z-0 h-400px w-400px rotate-270 bg-yellowCurveLine bg-contain bg-center bg-no-repeat"></div>
            <div className="z-10 flex gap-54px">
              <div className="flex basis-1/2 flex-col gap-40px pl-80px">
                <div>
                  <h3 className="pb-16px text-9xl font-extrabold text-text-text-primary">PRO</h3>
                  <p className="text-32px font-semibold text-text-neutral-secondary">
                    Turning imagination into reality
                  </p>
                </div>
                <div>
                  <p className="max-w-500px text-lg font-semibold text-text-neutral-tertiary">
                    The PRO model features ARGB fans and a 1TB solid-state drive, utilizing LDPC
                    error correction and AES 256-bit advanced encryption technology. It offers
                    professional-grade performance in both transfer power and read speed.
                  </p>
                </div>
                <div className="flex flex-col gap-40px">
                  <p>
                    <span className="text-44px font-bold text-text-neutral-primary">4 </span>
                    <span className="text-xl font-bold text-text-neutral-tertiary">core</span>
                  </p>
                  <p>
                    <span className="text-44px font-bold text-text-neutral-primary">8 </span>
                    <span className="text-xl font-bold text-text-neutral-tertiary">threads</span>
                  </p>
                  <p>
                    <span className="text-44px font-bold text-text-neutral-primary">3.5 </span>
                    <span className="text-32px font-bold text-text-neutral-secondary">GHZ </span>
                    <span className="text-xl font-bold text-text-neutral-tertiary">
                      base processor frequency
                    </span>
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-8px rounded-xs border border-button-stroke-secondary px-32px py-14px text-button-text-secondary transition-colors duration-300 ease-in-out hover:border-button-stroke-primary-hover hover:text-button-text-primary-hover"
                  >
                    <p className="text-lg font-medium">See More Detail</p>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g clipPath="url(#a)">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M6.201 8.052c-1.533 1.28-2.604 2.781-3.144 3.636a3.315 3.315 0 0 0-.126.209.172.172 0 0 0-.018.044l-.002.012a.527.527 0 0 0 .002.107.173.173 0 0 0 .018.045c.02.04.052.092.126.209.54.855 1.61 2.356 3.144 3.636 1.532 1.279 3.482 2.301 5.802 2.301 2.321 0 4.27-1.022 5.802-2.301 1.534-1.28 2.604-2.781 3.145-3.636.073-.117.105-.168.126-.209a.176.176 0 0 0 .018-.045l.001-.01a.526.526 0 0 0 0-.109.176.176 0 0 0-.019-.044 3.299 3.299 0 0 0-.127-.209c-.54-.855-1.61-2.356-3.144-3.636-1.532-1.279-3.481-2.301-5.802-2.301-2.32 0-4.27 1.022-5.802 2.3ZM5.241 6.9c1.7-1.419 3.978-2.649 6.762-2.649 2.785 0 5.063 1.23 6.763 2.65 1.7 1.417 2.867 3.06 3.452 3.986l.022.035c.118.187.25.394.317.688.054.235.054.547 0 .782-.067.294-.199.5-.317.688l-.022.035c-.585.926-1.753 2.569-3.452 3.987-1.7 1.419-3.978 2.649-6.763 2.649-2.784 0-5.062-1.23-6.763-2.65-1.698-1.417-2.866-3.06-3.451-3.986l-.022-.035c-.119-.187-.25-.394-.317-.688a1.91 1.91 0 0 1 0-.782c.067-.294.198-.5.317-.688l.022-.035C2.374 9.961 3.542 8.318 5.24 6.9Zm6.762 2.851a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.75 2.25a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"
                            clipRule="evenodd"
                          />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" d="M0 0h24v24H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex basis-1/2 items-center justify-center">
                <Image
                  src={'/elements/model_pro_black.png'}
                  alt="model_pro_black"
                  width={875}
                  height={875}
                  className="z-10 w-full object-contain"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </section>
          <section className="relative flex min-h-875px py-80px">
            <div className="absolute bottom-0 right-0 z-0 h-400px w-400px rotate-270 bg-yellowCurveLine bg-contain bg-center bg-no-repeat"></div>
            <div className="z-10 flex gap-54px">
              <div className="flex basis-1/2 flex-col gap-40px pl-80px">
                <div>
                  <h3 className="pb-16px text-9xl font-extrabold text-text-text-primary">MAX </h3>
                  <p className="text-32px font-semibold text-text-neutral-secondary">
                    Making wishes come true
                  </p>
                </div>
                <div>
                  <p className="max-w-500px text-lg font-semibold text-text-neutral-tertiary">
                    The MAX model features ARGB fans and a 1TB solid-state drive, utilizing LDPC
                    error correction and AES 256-bit advanced encryption technology. It offers
                    faster and more efficient transfer power and read speeds compared to the PRO
                    model.
                  </p>
                </div>
                <div className="flex flex-col gap-40px">
                  <p>
                    <span className="text-44px font-bold text-text-neutral-primary">8 </span>
                    <span className="text-xl font-bold text-text-neutral-tertiary">core</span>
                  </p>
                  <p>
                    <span className="text-44px font-bold text-text-neutral-primary">20 </span>
                    <span className="text-xl font-bold text-text-neutral-tertiary">threads</span>
                  </p>
                  <p>
                    <span className="text-44px font-bold text-text-neutral-primary">3.7 </span>
                    <span className="text-32px font-bold text-text-neutral-secondary">GHZ </span>
                    <span className="text-xl font-bold text-text-neutral-tertiary">
                      base processor frequency
                    </span>
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-8px rounded-xs border border-button-stroke-secondary px-32px py-14px text-button-text-secondary transition-colors duration-300 ease-in-out hover:border-button-stroke-primary-hover hover:text-button-text-primary-hover"
                  >
                    <p className="text-lg font-medium">See More Detail</p>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g clipPath="url(#a)">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M6.201 8.052c-1.533 1.28-2.604 2.781-3.144 3.636a3.315 3.315 0 0 0-.126.209.172.172 0 0 0-.018.044l-.002.012a.527.527 0 0 0 .002.107.173.173 0 0 0 .018.045c.02.04.052.092.126.209.54.855 1.61 2.356 3.144 3.636 1.532 1.279 3.482 2.301 5.802 2.301 2.321 0 4.27-1.022 5.802-2.301 1.534-1.28 2.604-2.781 3.145-3.636.073-.117.105-.168.126-.209a.176.176 0 0 0 .018-.045l.001-.01a.526.526 0 0 0 0-.109.176.176 0 0 0-.019-.044 3.299 3.299 0 0 0-.127-.209c-.54-.855-1.61-2.356-3.144-3.636-1.532-1.279-3.481-2.301-5.802-2.301-2.32 0-4.27 1.022-5.802 2.3ZM5.241 6.9c1.7-1.419 3.978-2.649 6.762-2.649 2.785 0 5.063 1.23 6.763 2.65 1.7 1.417 2.867 3.06 3.452 3.986l.022.035c.118.187.25.394.317.688.054.235.054.547 0 .782-.067.294-.199.5-.317.688l-.022.035c-.585.926-1.753 2.569-3.452 3.987-1.7 1.419-3.978 2.649-6.763 2.649-2.784 0-5.062-1.23-6.763-2.65-1.698-1.417-2.866-3.06-3.451-3.986l-.022-.035c-.119-.187-.25-.394-.317-.688a1.91 1.91 0 0 1 0-.782c.067-.294.198-.5.317-.688l.022-.035C2.374 9.961 3.542 8.318 5.24 6.9Zm6.762 2.851a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.75 2.25a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"
                            clipRule="evenodd"
                          />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" d="M0 0h24v24H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex basis-1/2 items-center justify-center">
                <Image
                  src={'/elements/model_max_white.png'}
                  alt="model_max_white"
                  width={875}
                  height={875}
                  className="z-10 w-full object-contain"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </section>
          <section className="relative flex min-h-875px py-80px">
            <div className="absolute bottom-0 right-0 z-0 h-400px w-400px rotate-270 bg-yellowCurveLine bg-contain bg-center bg-no-repeat"></div>
            <div className="z-10 flex">
              <div className="flex basis-1/4 flex-col gap-40px pl-80px">
                <div>
                  <h3 className="pb-16px text-9xl font-extrabold text-text-text-primary">
                    Enterprise{' '}
                  </h3>
                  <p className="text-32px font-semibold text-text-neutral-secondary">
                    The power to lead the future
                  </p>
                </div>
                <div>
                  <p className="max-w-500px text-lg font-semibold text-text-neutral-tertiary">
                    The Enterprise model features a water cooling system and a 2TB solid-state
                    drive. It has seven slots to accommodate high-power graphics cards, making it
                    suitable for handling complex data and running multi-layer machine learning
                    models.
                  </p>
                </div>
                <div className="flex flex-col gap-40px">
                  <p>
                    <span className="text-44px font-bold text-text-neutral-primary">24 </span>
                    <span className="text-xl font-bold text-text-neutral-tertiary">core</span>
                  </p>
                  <p>
                    <span className="text-44px font-bold text-text-neutral-primary">5.8 </span>
                    <span className="text-32px font-bold text-text-neutral-secondary">GHZ </span>
                    <span className="text-xl font-bold text-text-neutral-tertiary">
                      base processor frequency
                    </span>
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-8px rounded-xs border border-button-stroke-secondary px-32px py-14px text-button-text-secondary transition-colors duration-300 ease-in-out hover:border-button-stroke-primary-hover hover:text-button-text-primary-hover"
                  >
                    <p className="text-lg font-medium">See More Detail</p>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g clipPath="url(#a)">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M6.201 8.052c-1.533 1.28-2.604 2.781-3.144 3.636a3.315 3.315 0 0 0-.126.209.172.172 0 0 0-.018.044l-.002.012a.527.527 0 0 0 .002.107.173.173 0 0 0 .018.045c.02.04.052.092.126.209.54.855 1.61 2.356 3.144 3.636 1.532 1.279 3.482 2.301 5.802 2.301 2.321 0 4.27-1.022 5.802-2.301 1.534-1.28 2.604-2.781 3.145-3.636.073-.117.105-.168.126-.209a.176.176 0 0 0 .018-.045l.001-.01a.526.526 0 0 0 0-.109.176.176 0 0 0-.019-.044 3.299 3.299 0 0 0-.127-.209c-.54-.855-1.61-2.356-3.144-3.636-1.532-1.279-3.481-2.301-5.802-2.301-2.32 0-4.27 1.022-5.802 2.3ZM5.241 6.9c1.7-1.419 3.978-2.649 6.762-2.649 2.785 0 5.063 1.23 6.763 2.65 1.7 1.417 2.867 3.06 3.452 3.986l.022.035c.118.187.25.394.317.688.054.235.054.547 0 .782-.067.294-.199.5-.317.688l-.022.035c-.585.926-1.753 2.569-3.452 3.987-1.7 1.419-3.978 2.649-6.763 2.649-2.784 0-5.062-1.23-6.763-2.65-1.698-1.417-2.866-3.06-3.451-3.986l-.022-.035c-.119-.187-.25-.394-.317-.688a1.91 1.91 0 0 1 0-.782c.067-.294.198-.5.317-.688l.022-.035C2.374 9.961 3.542 8.318 5.24 6.9Zm6.762 2.851a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.75 2.25a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"
                            clipRule="evenodd"
                          />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" d="M0 0h24v24H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex basis-3/4 items-end justify-center">
                <Image
                  src={'/elements/model_enterprise_black.png'}
                  alt="model_enterprise_black"
                  width={964}
                  height={575}
                  className="z-10 w-full object-contain"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </section>
        </Slider>
      </div>
    </div>
  );
};

export default CarouselKv;
