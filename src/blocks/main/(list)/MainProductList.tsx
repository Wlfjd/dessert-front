'use client';

import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { useRecoilValue } from 'recoil';

import { filterValueState } from '@/domains/product/atoms';
import ProductCard from '@/domains/product/components/ProductCard';
import SkeletonProductCardList from '@/domains/product/components/SkeletonProductCardList';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { useGetAllProductsQuery } from '@/domains/product/queries/useGetAllProductsQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import SadBbangleBox from '@/shared/components/SadBbangleBox';

const MainProductList = () => {
  const filterValue = useRecoilValue(filterValueState(FILTER_FAMILY_ID.main));
  const { data, isError, isLoading, fetchNextPage, hasNextPage } =
    useGetAllProductsQuery(filterValue);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return <SkeletonProductCardList />;
  }
  if (isError) {
    return (
      <SadBbangleBox>
        <p>오류가 발생했어요!</p>
      </SadBbangleBox>
    );
  }
  if (!data || data.products.length === 0) {
    return (
      <SadBbangleBox>
        <p>상품이 없어요!</p>
      </SadBbangleBox>
    );
  }

  return (
    <PaddingWrapper className="px-0">
      <div className="grid grid-cols-2 gap-x-[16px] px-[16px] gap-y-[16px] pb-[36px]">
        {data.products.map((product) => (
          <ProductCard key={`${product.boardId}`} product={product} />
        ))}
      </div>
      {hasNextPage && (
        <div ref={ref} className="pb-[36px]">
          <SkeletonProductCardList row={1} col={2} />
        </div>
      )}
    </PaddingWrapper>
  );
};

export default MainProductList;
