/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselKv = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <Slider {...settings}>
      <div className="relative flex h-90vh border border-lime-500">
        <div className="absolute bottom-0 right-0 h-400px w-400px rotate-270 bg-yellowCurveLine bg-contain bg-center bg-no-repeat"></div>
        <div></div>
        <Image
          src={'/elements/black_pc.png'}
          width={875}
          height={875}
          style={{ width: '80vh', height: '80vh' }}
          alt="black_pc"
        ></Image>
      </div>
      <div className="h-100vh max-w-1440px border border-rose-600 bg-productsSlide1 bg-contain bg-center bg-no-repeat">
        <h3>Slide 1</h3>
      </div>
      <div className="h-100vh max-w-1440px border border-rose-600 bg-productsSlide2 bg-contain bg-center bg-no-repeat">
        <h3>Slide 2</h3>
      </div>
      <div className="h-100vh max-w-1440px border border-rose-600 bg-productsSlide3 bg-contain bg-center bg-no-repeat">
        <h3>Slide 3</h3>
      </div>
    </Slider>
  );
};

export default CarouselKv;
