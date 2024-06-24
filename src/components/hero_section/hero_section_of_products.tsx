import Carousel from '../carousel/carousel';
import CarouselKv from '../carousel/carousel_kv';

const HeroSectionOfProducts = () => {
  return (
    <section className="border border-pink-500">
      {/* Carousel */}
      <Carousel />

      <CarouselKv />
    </section>
  );
};

export default HeroSectionOfProducts;
