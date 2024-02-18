import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IAllProductsType } from '@/commons/types/allProductsType';
import { transformIngredientEngishTag, transformTag } from '@/commons/constants/transfromTag';

interface GetProductsQueryProps {
    category?: string;
    tags?: string[];
    sort?: string;
}

const getAllProducts = async (query: GetProductsQueryProps): Promise<IAllProductsType> => {
    const { category, tags, sort } = query;
    const categoryQuery = category ? `category=${transformTag(category)}` : '';
    const tagQuery =
        tags && tags.length > 0
            ? tags.map(tag => `${transformIngredientEngishTag(tag)}=true`).join('&')
            : '';
    const sortQuery = sort ? `sort=${sort}` : '';
    const queryString = [categoryQuery, tagQuery, sortQuery].filter(Boolean).join('&');
    const result = await API.get<{ data: IAllProductsType }>(
        `/boards${queryString ? `?${queryString}` : ''}`
    );

    return result.data;
};

export const UseGetAllProductsQuery = (query: GetProductsQueryProps) => {
    return useQuery<IAllProductsType, Error>({
        queryKey: ['products'],
        queryFn: () => getAllProducts(query)
    });
};
