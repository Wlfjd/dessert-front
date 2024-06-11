/**
 * @deprecated
 * Api분할로 IProductDetailType이 아닌 IDetailProductType,INewStoreType,IBoardType 새로 추가되었으니 이거 사용해주세요
 * */

export interface IProductDetailType {
  store: {
    storeName: string;
    storeId: number;
    profile: string;
    isWished: boolean;
  };
  board: {
    boardId: number;
    thumbnail: string;
    images: [
      {
        id: number;
        url: string;
      }
    ];
    title: string;
    price: number;
    orderAvailableDays: {
      mon: boolean;
      tue: boolean;
      wed: boolean;
      thu: boolean;
      fri: boolean;
      sat: boolean;
      sun: boolean;
      [key: string]: boolean;
    };
    purchaseUrl: string;
    isWished: boolean;
    isBundled: boolean;
    detail: IDetailImageType[];
    products: IProductType[];
  };
}

export interface IProductType {
  id: number;
  title: string;
  category: string;
  tags: string[];
}

export interface IDetailImageType {
  id: number;
  imgIndex: number;
  url: string;
}

// 새로운 버전
export interface IDetailProductType {
  boardIsBundled: true;
  products: ProductType[];
}

export interface ProductType {
  id: number;
  title: string;
  glutenFreeTag: boolean;
  highProteinTag: boolean;
  sugarFreeTag: boolean;
  veganTag: boolean;
  ketogenicTag: boolean;
  nutrient: {
    sugars: number;
    protein: number;
    carbohydrates: number;
    fat: number;
    weight: number;
    calories: number;
  };
  orderType: string;
  orderAvailableDate: {
    startDate: number;
    endDate: number;
  };
  orderAvailableWeek: {
    mon: boolean;
    tue: boolean;
    wed: boolean;
    thu: boolean;
    fri: boolean;
    sat: boolean;
    sun: boolean;
    [key: string]: boolean;
  };
}

export interface INewStoreType {
  id: number;
  title: string;
  profile: string;
  isWished: boolean;
}

export interface IBoardType {
  id: number;
  profile: string;
  title: string;
  price: number;
  purchaseUrl: string;
  deliveryFee: number;
  freeShippingConditions: number;
  isWished: boolean;
  boardImages: string[];
  boardDetails: string[];
}
