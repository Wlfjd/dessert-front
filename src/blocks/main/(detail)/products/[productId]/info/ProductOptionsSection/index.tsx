'use client';

import { useState } from 'react';

import DetailSectionWrapper from '@/domains/product/components/DetailSectionWrapper';
import useGetProductDetailQuery from '@/domains/product/queries/useGetProductDetailQuery';
import { ProductType } from '@/domains/product/types/productDetailType';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

import CategoryOption from './CategoryOption';
import IngredientInfo from './IngredientInfo';
import NutrientInfo from './NutrientInfo';
import OrderAvailableDays from './OrderAvailableDays';

const ProductOptionsSetion = () => {
  const { data: productData } = useGetProductDetailQuery();
  const [activeOption, setActiveOption] = useState<{ [key: number]: boolean }>({});

  const handleCategoryClick = (id: number) => {
    setActiveOption((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <DetailSectionWrapper title="상품 옵션">
      {productData?.products.map((product: ProductType) => (
        <div key={product.id}>
          <CategoryOption onClick={() => handleCategoryClick(product.id)} option={product} />
          {activeOption[product.id] && (
            <PaddingWrapper className="flex flex-col gap-4">
              <IngredientInfo product={product} />
              <OrderAvailableDays product={product} />
              <NutrientInfo />
            </PaddingWrapper>
          )}
        </div>
      ))}
    </DetailSectionWrapper>
  );
};

export default ProductOptionsSetion;
