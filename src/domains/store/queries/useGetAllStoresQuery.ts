import { IAllStoresType } from '@/domains/store/types/allStoresType';
import QUERY_KEY from '@/shared/constants/queryKey';
import fetchExtend from '@/shared/utils/api';
import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';

export const useGetAllStoresQuery = () => {
  const queryKey = [QUERY_KEY.store, QUERY_KEY.main];

  const queryFn = async ({ pageParam }: { pageParam: number }) => {
    const res = await fetchExtend.get(`/stores?page=${pageParam}`);
    if (!res.ok) throw new Error('전체 스토어 조회 실패');

    const data: IAllStoresType = await res.json();
    return data;
  };

  const getNextPageParam: GetNextPageParamFunction<number, IAllStoresType> = (
    lastPage,
    __,
    lastPageParam
  ) => {
    const nextPageParam = lastPage.last ? undefined : lastPageParam + 1;
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
      return { stores };
    }
  });
};