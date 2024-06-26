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

      <h2
        className="absolute left-14% top-43% rotate-180 animate-fade-in text-120px font-black text-text-neutral-tertiary"
        // style={{ animationFillMode: 'backwards' }}
      >
        PRO
      </h2>

      <Image
        src={'/elements/white_type_pc.png'}
        alt="white_type_pc"
        width={520}
        height={520}
        className="absolute left-363px top-78px w-520px"
      ></Image>

      <h2
        className="absolute left-975px top-318px animate-fade-in text-200px font-black text-text-neutral-tertiary"
        // style={{ animationFillMode: 'backwards' }}
      >
        CT
      </h2>

      <Image
        src={'/elements/black_type_pc.png'}
        alt="black_type_pc"
        width={520}
        height={520}
        className="absolute bottom-77px right-362px w-520px"
      ></Image>

      <h2
        className="absolute left-240px top-318px animate-slide-in text-200px font-black text-surface-brand-primary"
        // duration-1000 ease-linear
        // style={{ animationFillMode: 'backwards' }}
      >
        PRODU
      </h2>

      <ul
        className="absolute bottom-10% right-2% animate-fade-in text-48px font-semibold text-text-brand-secondary-lv2"
        // style={{ animationFillMode: 'backwards' }}
      >
        <li>Pro.</li>
        <li>Max.</li>
        <li>Enterprise.</li>
      </ul>
    </section>
  );
};

export default ProductAnimation;
