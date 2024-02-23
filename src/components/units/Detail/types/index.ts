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
      },
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
    detail: string;
    products: IProductType[];
  };
}

export interface IProductType {
  title: string;
  tags: string[];
}
