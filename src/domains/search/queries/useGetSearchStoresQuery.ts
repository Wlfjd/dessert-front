import searchService from '@/domains/search/queries/service';
import { IAllStoreType } from '@/domains/search/types';
import { storeQueryKey } from '@/shared/queries/queryKey';
import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';

interface QueryHookProps {
  keyword: string;
}

export const useGetSearchStoresQuery = ({ keyword }: QueryHookProps) => {
  const queryKey = [...storeQueryKey.list('search'), { keyword }];

  const queryFn = async ({ pageParam }: { pageParam: number }) => {
    const result = await searchService.getSearchStores({ keyword, pageParam });
    return result;
  };

  const getNextPageParam: GetNextPageParamFunction<number, IAllStoreType> = (
    lastPage,
    __,
    lastPageParam
  ) => {
    const nextPageParam = lastPage.existNextPage ? lastPageParam + 1 : undefined;
    return nextPageParam;
  };

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 0,
    getNextPageParam,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    select: ({ pages }) => {
      const stores = pages.map((page) => page.content).flat();
      const itemCount = pages[0]?.itemAllCount || 0;
      return { stores, itemCount };
    }
  });
};
