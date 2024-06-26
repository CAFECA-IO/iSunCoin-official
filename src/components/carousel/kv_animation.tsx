import Image from 'next/image';

const KvAnimation = () => {
  return (
    <div>
      <Image
        unoptimized
        src={'/animation/products.gif'}
        alt="Animated GIF"
        width={1440}
        height={875}
      ></Image>
    </div>
  );
};

export default KvAnimation;
