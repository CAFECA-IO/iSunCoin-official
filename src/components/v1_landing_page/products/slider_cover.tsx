import Image from 'next/image';

const SliderCover = () => {
  return (
    <section className="relative mt-auto h-54.6875rem max-w-90rem">
      <Image
        src={'/v1/elements/circle.png'}
        alt="circle"
        width={600}
        height={600}
        className="absolute bottom-0 left-0 right-0 top-0 m-auto"
      ></Image>

      <Image
        src={'/v1/elements/yellow_curve_line.png'}
        alt="yellow_curve_line_1"
        width={400}
        height={400}
        className="absolute bottom-0 w-25rem"
      ></Image>
      {/*  */}
      <Image
        src={'/v1/elements/yellow_curve_line.png'}
        alt="yellow_curve_line_2"
        width={200}
        height={200}
        className="absolute right-0 w-12.5rem rotate-180"
      ></Image>

      <h2 className="absolute left-18.75rem top-29.6875rem rotate-180 -scale-x-100 text-200px font-extrabold text-text-neutral-tertiary opacity-50">
        PRO
      </h2>

      <Image
        src={'/v1/elements/white_type_pc.png'}
        alt="white_type_pc"
        width={520}
        height={520}
        className="absolute left-22.6875rem top-4.875rem w-32.5rem"
      ></Image>

      <h2 className="absolute left-60.9375rem top-19.875rem text-200px font-extrabold text-transparent xl:text-text-neutral-tertiary">
        CT
      </h2>

      <Image
        src={'/v1/elements/black_type_pc.png'}
        alt="black_type_pc"
        width={520}
        height={520}
        className="absolute bottom-4.8125rem right-22.625rem w-32.5rem"
      ></Image>
      {/*  */}
      <h2 className="absolute left-8rem top-19.875rem text-200px font-extrabold text-surface-brand-primary xl:left-15rem">
        PRODU
        <span className="xl:hidden">CT</span>
      </h2>

      <ul className="absolute bottom-10% right-2% text-48px font-semibold text-text-brand-secondary-lv2">
        <li>Pro.</li>
        <li>Max.</li>
        <li>Enterprise.</li>
      </ul>
    </section>
  );
};

export default SliderCover;

// Info: (240705 - Liz) 以下是絕對定位版本作為參照用
// const SliderCover = () => {
//   return (
//     <section className="relative mt-auto h-875px max-w-1440px">
//       <Image
//         src={'/v1/elements/circle.png'}
//         alt="circle"
//         width={600}
//         height={600}
//         className="absolute bottom-0 left-0 right-0 top-0 m-auto"
//       ></Image>

//       <Image
//         src={'/v1/elements/yellow_curve_line.png'}
//         alt="yellow_curve_line_1"
//         width={400}
//         height={400}
//         className="absolute bottom-0 w-400px"
//       ></Image>

//       <Image
//         src={'/v1/elements/yellow_curve_line.png'}
//         alt="yellow_curve_line_2"
//         width={200}
//         height={200}
//         className="absolute right-0 w-200px rotate-180"
//       ></Image>

//       <h2 className="absolute left-300px top-475px rotate-180 -scale-x-100 text-200px font-extrabold text-text-neutral-tertiary opacity-50">
//         PRO
//       </h2>

//       <Image
//         src={'/v1/elements/white_type_pc.png'}
//         alt="white_type_pc"
//         width={520}
//         height={520}
//         className="absolute left-363px top-78px w-520px"
//       ></Image>

//       <h2 className="absolute left-975px top-318px text-200px font-extrabold text-text-neutral-tertiary">
//         CT
//       </h2>

//       <Image
//         src={'/v1/elements/black_type_pc.png'}
//         alt="black_type_pc"
//         width={520}
//         height={520}
//         className="absolute bottom-77px right-362px w-520px"
//       ></Image>

//       <h2 className="absolute left-240px top-318px text-200px font-extrabold text-surface-brand-primary">
//         PRODU
//       </h2>

//       <ul className="absolute bottom-10% right-2% text-48px font-semibold text-text-brand-secondary-lv2">
//         <li>Pro.</li>
//         <li>Max.</li>
//         <li>Enterprise.</li>
//       </ul>
//     </section>
//   );
// };
