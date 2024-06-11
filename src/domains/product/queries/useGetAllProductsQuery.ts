/**
 * @deprecated
 * v1.0.0 에서 사용되던 컴포넌트인데 추후 사용가능성을 고려하여 삭제하지 않았습니다
 * */

import { IAllProductsType } from '@/domains/product/types/allProductsType';
import { IFilterType } from '@/domains/product/types/filterType';
import { transformFilterValueToQueryString } from '@/domains/product/utils/transformFilterValueToQueryString';
import { productQueryKey } from '@/shared/queries/queryKey';
import { ResultResponse } from '@/shared/types/response';
import fetchExtend from '@/shared/utils/api';
import { throwApiError } from '@/shared/utils/error';
import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';

export const useGetAllProductsQuery = (query: IFilterType) => {
  const queryKey = productQueryKey.list('home');

  const queryFn = async ({
    pageParam
  }: {
    pageParam: { cursorId: number; cursorScore: number };
  }) => {
    const firstPage = pageParam.cursorId === -1;
    const cursorIdQueryString = firstPage ? '' : `&targetId=${pageParam.cursorId}`;
    const cursorScoreQueryString = `&targetScore=${pageParam.cursorScore}`;
    const filterValueQueryString = transformFilterValueToQueryString(query);

    const res = await fetchExtend.get(
      `/boards?${filterValueQueryString}${cursorIdQueryString}${cursorScoreQueryString}`
    );

    const { success, result, code, message }: ResultResponse<IAllProductsType> = await res.json();

    if (!res.ok || !success) {
      throwApiError({ code, message });
    }
    return result;
  };

  const getNextPageParam: GetNextPageParamFunction<
    { cursorId: number; cursorScore: number },
    IAllProductsType
  > = (lastPage) => {
    if (!lastPage.hasNext) return undefined;
    return { cursorId: lastPage.nextCursor, cursorScore: lastPage.cursorScore };
  };

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: { cursorId: -1, cursorScore: 0 },
    getNextPageParam,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    select: ({ pages }) => {
      const products = pages.map((page) => page.content).flat();
      const productCount = pages[0]?.boardCount || 0;
      const storeCount = pages[0]?.storeCount || 0;
      return { products, productCount, storeCount };
    }
  });
};
