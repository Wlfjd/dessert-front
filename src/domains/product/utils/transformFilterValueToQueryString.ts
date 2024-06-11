import { IFilterType } from '@/domains/product/types/filterType';
import {
  transformCategoryToEng,
  transformSortToEng,
  transformTagToEng
} from '@/domains/product/utils/transfromTag';

export const transformFilterValueToQueryString = (query: IFilterType) => {
  const { category, tags, price, sort, orderAvailableToday } = query;
  const categoryQuery = category && transformCategoryToEng(category);
  const tagsEng = tags?.map((tag) => transformTagToEng(tag));
  const tagsQuery = tagsEng?.reduce(
    (acc, tag) => ({
      ...acc,
      [tag]: true
    }),
    {}
  );
  const minPriceQuery = String(Math.min(...price));
  const maxPriceQuery = String(Math.max(...price));
  const sortQuery = transformSortToEng(sort);
  const orderAvailableTodayQuery = String(orderAvailableToday);

  const queryObject = {
    category: categoryQuery || '',
    ...tagsQuery,
    minPrice: minPriceQuery,
    maxPrice: maxPriceQuery,
    sort: sortQuery,
    orderAvailableToday: orderAvailableTodayQuery
  };

  return new URLSearchParams(queryObject).toString();
};
