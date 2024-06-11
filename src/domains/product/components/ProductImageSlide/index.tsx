import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import ImgNone from '@/domains/product/components/ProductImageSlide/ImgNone';

interface ImgSliderProps {
  boardImages?: string[];
  onChange: (_: number) => void;
}

const ProductImageSlide = ({ boardImages, onChange }: ImgSliderProps) => (
  <Swiper
    spaceBetween={10}
    slidesPerView={1}
    pagination={{ clickable: true }}
    scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
    onActiveIndexChange={(swiperCore) => {
      onChange(swiperCore.activeIndex);
    }}
  >
    {boardImages?.map((image) =>
      image ? (
        <SwiperSlide key={image}>
          <div className="w-full pb-[100%]">
            <Image src={image} alt="img" layout="fill" objectFit="cover" className="rounded-xl" />
          </div>
        </SwiperSlide>
      ) : (
        <ImgNone key={image} />
      )
    )}
  </Swiper>
);
export default ProductImageSlide;
