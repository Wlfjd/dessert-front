'use client';

import 'swiper/css/bundle';

import React, { useState } from 'react';

import { BundleBadge } from '@/domains/product/components/ProductCard/ProductImage/BundleBadge';
import ProductImageSlide from '@/domains/product/components/ProductImageSlide';
import ImageCounter from '@/domains/product/components/ProductImageSlide/ImgCounter';
import useGetBoardDetailQuery from '@/domains/product/queries/useGetBoardDetailQuery';
import useGetProductDetailQuery from '@/domains/product/queries/useGetProductDetailQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

const BoardImagesSection = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const { data: boardDetail } = useGetBoardDetailQuery();
  const { data: ProductDetail } = useGetProductDetailQuery();

  return (
    <PaddingWrapper className="py-0">
      <div className="relative">
        <ProductImageSlide boardImages={boardDetail?.boardImages} onChange={setSwiperIndex} />
        {ProductDetail?.boardIsBundled && (
          <div className="absolute top-[10px] left-[10px] z-10 ">
            <BundleBadge />
          </div>
        )}
        {boardDetail?.boardImages && (
          <div className="absolute bottom-[10px] right-[10px] w-[37px] h-[21px] px-2.5 py-0.5 bg-black bg-opacity-60 rounded-[50px] justify-center items-center gap-2.5 inline-flex z-10">
            <ImageCounter index={swiperIndex} total={boardDetail?.boardImages.length} />
          </div>
        )}
      </div>
    </PaddingWrapper>
  );
};

export default BoardImagesSection;
