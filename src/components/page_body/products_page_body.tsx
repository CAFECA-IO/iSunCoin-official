import HeroSectionOfProducts from '@/components/products/hero_section_of_products';
import ThreeModelsIntro from '@/components/products/three_models_intro';
import ThreeModelsVideo from '@/components/products/three_models_video';
import ColorTypeSelector from '@/components/products/color_type_selector';
import ProductComparison from '@/components/products/product_comparison';
import CustomerGuidance from '@/components/products/customer_guidance';

const ProductsPageBody = () => {
  return (
    <main className="mt-88px min-h-screen max-w-full overflow-x-hidden bg-surface-neutral-main-background font-barlow">
      <HeroSectionOfProducts />

      <ThreeModelsIntro />

      <ThreeModelsVideo />

      <ColorTypeSelector />

      <ProductComparison />

      <CustomerGuidance />
    </main>
  );
};

export default ProductsPageBody;
