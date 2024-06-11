/**
 * @deprecated
 * v1.0.0 에서 사용되던 컴포넌트인데 추후 사용가능성을 고려하여 삭제하지 않았습니다
 * */

'use client';

import { useState } from 'react';

import ProductTag from '@/domains/product/components/ProductTag';
import { IProductDetailType } from '@/domains/product/types/productDetailType';
import MoreButton from '@/shared/components/MoreButton';

interface DetailProductCompositionProps {
  data: IProductDetailType;
}
const DetailProductComposition = ({ data }: DetailProductCompositionProps) => {
  const [clickMore, setClickMore] = useState(false);
  return (
    <div className="relative">
      <div
        className={`flex flex-col p-[0px] ${
          clickMore ? 'overflow-y-visible ' : 'overflow-y-hidden h-[151px]'
        }`}
      >
        {data.board.products.map((item) => (
          <div className="mb-[10px]" key={item.id}>
            <div className="font-normal leading-120 text-12 text-gray-800 mb-[4px]">
              {item.title}
            </div>
            <div className="mb-[4px] h-[21px] justify-start gap-1 inline-flex ">
              {item.tags.map((tag) => (
                <ProductTag key={tag} tag={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {data.board.products.length > 2 && (
        <MoreButton
          isMore={clickMore}
          onClick={() => {
            setClickMore(!clickMore);
          }}
        />
      )}
    </div>
  );
};
export default DetailProductComposition;
