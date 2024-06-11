import { ProductType } from '@/domains/product/types/productDetailType';
import BellIcons from '@/shared/components/icons/BellIcons';

import TypeOfDate from './TypeOfDate';
import TypeOfWeek from './TypeOfWeek';

interface DetailOrderAvailableDaysProps {
  product: ProductType;
}

const OrderAvailableDays = ({ product }: DetailOrderAvailableDaysProps) => {
  const renderContent = (type: string) => {
    switch (type) {
      case 'WEEK':
        return <TypeOfWeek availableDays={product.orderAvailableWeek} />;
      case 'DATE':
        return <TypeOfDate availableDays={product.orderAvailableDate} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-gray-500 text-12 leading-150 font-semibold pb-0">주문 가능일</h2>
      <div className="flex justify-between items-center ">
        <div className="flex gap-[4px]">{renderContent(product.orderType)}</div>
        <button
          type="button"
          className="p-[6px] flex gap-[2px] border border-gray-200 rounded-[4px]"
        >
          <BellIcons shape="off" />
          <span className="typo-body-12-medium text-gray-900">빵켓팅 알림 신청</span>
        </button>
      </div>
    </div>
  );
};
export default OrderAvailableDays;
