import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const ColorTypeSelector = () => {
  const [selectedColor, setSelectedColor] = useState<string>('black');
  const [selectedType, setSelectedType] = useState<string>('Pro');

  const colors = { black: 'bg-surface-neutral-invert', white: 'bg-surface-neutral-surface-lv2' };
  const types = ['Pro', 'Max', 'Enterprise'];

  const getImages = (type: string, color: string) => {
    // Info: (240628 - Liz) 根據選擇的 type 和 color 回傳對應的圖片集
    // Info: (240628 - Liz) 圖片命名格式為 `type_color_1.png`, `type_color_2.png`, `type_color_3.png`
    return [
      `/product/${type.toLowerCase()}_${color}_1.png`,
      `/product/${type.toLowerCase()}_${color}_2.png`,
      `/product/${type.toLowerCase()}_${color}_3.png`,
    ];
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Slide transition takes 0.5 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Each slide stays for 1 second
    fade: true,
  };

  return (
    <section className="mx-auto w-full max-w-1440px p-20px">
      <section className="flex items-start justify-center gap-80px">
        {/* Text */}
        <div className="space-y-40px">
          <h1 className="text-64px font-bold text-text-neutral-primary">
            Show your
            <span className="text-surface-brand-primary"> Color</span>,
            <br />
            Select My
            <span className="text-surface-brand-primary"> Type</span>.
          </h1>
          <p className="text-lg font-semibold text-text-neutral-primary">
            Choose your preferred color, and it will be displayed in real-time on the device model
            to the right, providing you with a color reference.
          </p>

          {/* Button - choose type */}
          <div className="flex items-center gap-20px">
            <h6 className="text-xl font-bold text-surface-neutral-invert">Variation</h6>
            <div className="flex gap-24px">
              {types.map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`rounded-xs border border-button-stroke-secondary-hover px-24px py-10px ${selectedType === type ? 'bg-button-surface-strong-secondary text-button-text-invert' : 'text-button-stroke-secondary-hover'}`}
                  onClick={() => {
                    setSelectedType(type);
                    // setSelectedColor(null); // Reset selected color when type changes
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Button - choose color */}
          <div className="space-y-22px">
            <h6 className="text-xl font-bold text-surface-neutral-invert">Type</h6>
            <div className="flex gap-20px">
              {Object.entries(colors).map(([color, className]) => (
                <button
                  key={color}
                  type="button"
                  className={`h-40px w-40px rounded-full shadow-downDropShadowXS ${className} ${selectedColor === color ? 'ring-4 ring-stroke-brand-primary' : ''}`}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="max-w-1/2">
          <Slider {...settings}>
            {getImages(selectedType, selectedColor).map((image) => (
              <div key={image}>
                <Image
                  src={image}
                  alt={`slide-${image}`}
                  width={520}
                  height={520}
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </section>
  );
};

export default ColorTypeSelector;
