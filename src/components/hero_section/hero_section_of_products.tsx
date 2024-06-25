import CarouselKv from '@/components/carousel/carousel_kv';
import ProductAnimation from '@/components/carousel/product_animation';

const HeroSectionOfProducts = () => {
  return (
    <section className="">
      {/* Carousel */}
      <CarouselKv />

      {/* First Slide Animation */}
      <ProductAnimation />
    </section>
  );
};

export default HeroSectionOfProducts;
