import QUERY_KEY from '@/shared/constants/queryKey';
import { useQuery } from '@tanstack/react-query';

import productService from './service';

const useGetStoreInfoQuery = () => {
  const queryKey = [QUERY_KEY.productDetailStoreInfo];
  const queryFn = () => productService.getStoreInfo();

  return useQuery({ queryKey, queryFn });
};

export default useGetStoreInfoQuery;
