import { IBoardType } from '@/domains/product/types/productDetailType';
import { ResultResponse } from '@/shared/types/response';
import fetchExtend from '@/shared/utils/api';
import { throwApiError } from '@/shared/utils/error';

const getBoardDetail = async () => {
  const res = await fetchExtend.get('https://mocki.io/v1/950f2ec4-a261-4d7d-bbb7-208b5670e865');
  const { result, success, message, code }: ResultResponse<IBoardType> = await res.json();

  if (!success) {
    throwApiError({ code, message });
  }
  return result;
};

export default getBoardDetail;
