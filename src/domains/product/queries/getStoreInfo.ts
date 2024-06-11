import { INewStoreType } from '@/domains/product/types/productDetailType';
import { ResultResponse } from '@/shared/types/response';
import fetchExtend from '@/shared/utils/api';
import { throwApiError } from '@/shared/utils/error';

const getStoreInfo = async () => {
  const res = await fetchExtend.get('https://mocki.io/v1/4310b46d-696e-4a4a-b584-6caf8ad5aed6');
  const { result, success, message, code }: ResultResponse<INewStoreType> = await res.json();

  if (!success) {
    throwApiError({ code, message });
  }
  return result;
};

export default getStoreInfo;
