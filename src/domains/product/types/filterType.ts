import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';

export type ICategoryType = string | undefined;
export type ITagsType = string[] | undefined;
export type IPriceType = number[];
export type ISortType = string;
export type IOrderAvailableToday = boolean;

export interface IFilterType {
  category?: ICategoryType;
  tags?: ITagsType;
  price: IPriceType;
  sort: ISortType;
  orderAvailableToday: IOrderAvailableToday;
}

export type FilterFamilyIDType = typeof FILTER_FAMILY_ID.main | typeof FILTER_FAMILY_ID.search;
