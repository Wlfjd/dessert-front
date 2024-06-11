import QUERY_KEY from '@/shared/constants/queryKey';
import { useQuery } from '@tanstack/react-query';

import productService from './service';

const useGetBoardDetailQuery = () => {
  const queryKey = [QUERY_KEY.boardDetail];
  const queryFn = () => productService.getBoardDetail();

  return useQuery({ queryKey, queryFn });
};

export default useGetBoardDetailQuery;
