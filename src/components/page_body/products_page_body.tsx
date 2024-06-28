import HeroSectionOfProducts from '@/components/hero_section/hero_section_of_products';
import ThreeModelsIntro from '@/components/three_models/three_models_intro';
import ThreeModelsVideo from '@/components/three_models/three_models_video';
import ColorTypeSelector from '@/components/three_models/color_type_selector';

const ProductsPageBody = () => {
  return (
    <main className="mt-88px min-h-screen max-w-full overflow-x-hidden bg-surface-neutral-main-background font-barlow">
      <HeroSectionOfProducts />

      <ThreeModelsIntro />

      <ThreeModelsVideo />

      <ColorTypeSelector />
    </main>
  );
};

export default ProductsPageBody;
