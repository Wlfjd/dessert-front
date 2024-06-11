import { IDetailProductType } from '@/domains/product/types/productDetailType';
import { ResultResponse } from '@/shared/types/response';
import fetchExtend from '@/shared/utils/api';
import { throwApiError } from '@/shared/utils/error';

const getProductDetail = async () => {
  // const res = await fetchExtend.get(`/boards/${productId}`);
  const res = await fetchExtend.get('https://mocki.io/v1/b27a0ad4-216b-4974-884b-001107a69a19');
  const { result, success, message, code }: ResultResponse<IDetailProductType> = await res.json();

  if (!success) {
    throwApiError({ code, message });
  }
  return result;
};

export default getProductDetail;
