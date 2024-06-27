import Image from 'next/image';

const ThreeModelsVideo = () => {
  return (
    <section className="relative mx-auto min-h-800px max-w-1440px">
      <Image
        src={'/video/pro_cool.gif'}
        width={1440}
        height={798}
        alt="Pro"
        className="absolute z-0"
      ></Image>

      {/* Text */}
      <div className="relative space-y-166px pt-200px text-center text-text-neutral-solid-light">
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
    </section>
  );
};

export default ThreeModelsVideo;
