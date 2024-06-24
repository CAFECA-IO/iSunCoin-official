// components/Carousel.tsx

import { useEffect, useState } from 'react';

interface Item {
  id: number;
  imageUrl: string;
  title: string;
}
const items = [
  { id: 1, imageUrl: 'bg-productsSlide1', title: 'first slide' },
  { id: 2, imageUrl: 'bg-productsSlide2', title: 'second slide' },
  { id: 3, imageUrl: 'bg-productsSlide3', title: 'third slide' },
];

// const Carousel: React.FC = () => {
//   return (
//     <div className="">
//       {items.map((item: Item) => (
//         <div
//           key={item.id}
//           className={`h-100vh w-full bg-cover bg-no-repeat ${item.imageUrl}`}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default Carousel;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === items.length - 1 ? 0 : prevSlide + 1));
    }, 3000); // 自動播放間隔時間，單位為毫秒

    return () => {
      clearInterval(timer);
    };
  }, []); // 空依賴陣列表示只在組件首次加載時設置定時器

  return (
    <div>
      {items.map((item: Item, index: number) => (
        <div
          key={item.id}
          className={`h-90vh w-full bg-contain bg-no-repeat ${item.imageUrl} ${
            index === currentSlide ? 'block' : 'hidden'
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Carousel;
