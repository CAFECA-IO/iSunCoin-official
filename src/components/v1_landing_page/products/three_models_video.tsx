import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ThreeModelsVideo = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500, // Slide transition takes 0.5 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <section className="relative mx-auto min-h-800px max-w-1440px px-50px">
      <Image
        src={'/v1/video/pro_cool.gif'}
        width={1440}
        height={798}
        alt="Pro"
        className="absolute left-0 right-0 top-0 z-0 h-full w-full object-cover"
      ></Image>

      {/* Slider */}
      <Slider {...settings} className="relative z-10 h-full">
        {/* First Slide */}
        <div className="space-y-166px pt-200px text-center text-text-neutral-solid-light">
          <div className="space-y-8px">
            <h3 className="text-9xl font-extrabold">PRO</h3>
            <p className="text-44px font-bold">Turning imagination into reality</p>
          </div>
          <div className="flex justify-evenly font-bold">
            <div className="space-y-8px">
              <h5 className="text-64px">12</h5>
              <p className="text-48px">VCORE Phase</p>
            </div>
            <div className="space-y-8px">
              <h5 className="text-64px">1</h5>
              <p className="text-48px">VCCAUX Phase</p>
            </div>
            <div className="space-y-8px">
              <h5 className="text-64px">7600</h5>
              <p className="text-48px">MT/s</p>
            </div>
          </div>
        </div>
        {/* Second Slide */}
        <div className="space-y-166px pt-200px text-center text-text-neutral-solid-light">
          <div className="space-y-8px">
            <h3 className="text-9xl font-extrabold">MAX</h3>
            <p className="text-44px font-bold">Making wishes come true</p>
          </div>
          <div className="flex justify-evenly font-bold">
            <div className="space-y-8px">
              <h5 className="text-64px">12</h5>
              <p className="text-48px">VCORE Phase</p>
            </div>
            <div className="space-y-8px">
              <h5 className="text-64px">1</h5>
              <p className="text-48px">VCCAUX Phase</p>
            </div>
            <div className="space-y-8px">
              <h5 className="text-64px">7600</h5>
              <p className="text-48px">MT/s</p>
            </div>
          </div>
        </div>
        {/* Third Slide */}
        <div className="space-y-166px pt-200px text-center text-text-neutral-solid-light">
          <div className="space-y-8px">
            <h3 className="text-9xl font-extrabold">Enterprise</h3>
            <p className="text-44px font-bold">The power to lead the future</p>
          </div>
          <div className="flex justify-evenly font-bold">
            <div className="space-y-8px">
              <h5 className="text-64px">12</h5>
              <p className="text-48px">VCORE Phase</p>
            </div>
            <div className="space-y-8px">
              <h5 className="text-64px">1</h5>
              <p className="text-48px">VCCAUX Phase</p>
            </div>
            <div className="space-y-8px">
              <h5 className="text-64px">7600</h5>
              <p className="text-48px">MT/s</p>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default ThreeModelsVideo;
