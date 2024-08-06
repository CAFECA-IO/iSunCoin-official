// Deprecated: (240705 - Liz) 此動畫用絕對定位製作，已被 SliderCover 取代，先留著備用，之後這支檔案會刪除。
import Image from 'next/image';

const ProductAnimation = () => {
  return (
    <section className="relative h-875px w-1440px border border-red-500">
      <Image
        src={'/elements/circle.png'}
        alt="circle"
        width={600}
        height={600}
        className="absolute bottom-0 left-0 right-0 top-0 m-auto"
      ></Image>

      <Image
        src={'/elements/yellow_curve_line.png'}
        alt="yellow_curve_line_1"
        width={400}
        height={400}
        className="absolute bottom-0 w-400px"
      ></Image>

      <Image
        src={'/elements/yellow_curve_line.png'}
        alt="yellow_curve_line_2"
        width={200}
        height={200}
        className="absolute right-0 w-200px rotate-180"
      ></Image>

      <h2 className="absolute left-300px top-475px rotate-180 -scale-x-100 animate-fade-in-back text-200px font-extrabold text-text-neutral-tertiary opacity-50">
        PRO
      </h2>

      <Image
        src={'/elements/white_type_pc.png'}
        alt="white_type_pc"
        width={520}
        height={520}
        className="absolute left-363px top-78px w-520px"
      ></Image>

      <h2 className="absolute left-975px top-318px animate-fade-in-back text-200px font-extrabold text-text-neutral-tertiary">
        CT
      </h2>

      <Image
        src={'/elements/black_type_pc.png'}
        alt="black_type_pc"
        width={520}
        height={520}
        className="absolute bottom-77px right-362px w-520px"
      ></Image>

      <h2 className="absolute left-240px top-318px animate-slide-in-back text-200px font-extrabold text-surface-brand-primary">
        PRODU
      </h2>

      <ul className="absolute bottom-10% right-2% animate-fade-in-back text-48px font-semibold text-text-brand-secondary-lv2">
        <li>Pro.</li>
        <li>Max.</li>
        <li>Enterprise.</li>
      </ul>
    </section>
  );
};

export default ProductAnimation;
