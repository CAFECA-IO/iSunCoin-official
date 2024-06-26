import HeroSectionOfProducts from '@/components/hero_section/hero_section_of_products';

import ThreeModelsIntro from '@/components/scroll_animation/three_models_intro';

const ProductsPageBody = () => {
  return (
    <main className="mt-88px min-h-screen max-w-full overflow-x-hidden bg-surface-neutral-main-background font-barlow">
      <HeroSectionOfProducts />

      <ThreeModelsIntro />
    </main>
  );
};

export default ProductsPageBody;
