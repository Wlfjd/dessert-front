import { ERROR_MESSAGE } from '@/shared/constants/error';
import Service from '@/shared/queries/service';
import { ResultResponse } from '@/shared/types/response';

import { IBoardType, IDetailProductType, INewStoreType } from '../types/productDetailType';

class ProductService extends Service {
  async getStoreInfo() {
    const res = await this.fetchExtend.get(
      'https://mocki.io/v1/4310b46d-696e-4a4a-b584-6caf8ad5aed6'
    );
    const { result, success, message, code }: ResultResponse<INewStoreType> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getProductDetail() {
    const res = await this.fetchExtend.get(
      'https://mocki.io/v1/b27a0ad4-216b-4974-884b-001107a69a19'
    );
    const { result, success, message, code }: ResultResponse<IDetailProductType> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getBoardDetail() {
    const res = await this.fetchExtend.get(
      'https://mocki.io/v1/950f2ec4-a261-4d7d-bbb7-208b5670e865'
    );
    const { result, success, message, code }: ResultResponse<IBoardType> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }
}

const productService = new ProductService();
export default productService;
