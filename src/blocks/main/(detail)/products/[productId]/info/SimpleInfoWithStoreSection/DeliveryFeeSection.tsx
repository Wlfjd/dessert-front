import { IBoardType } from '@/domains/product/types/productDetailType';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface Props {
  boardData: IBoardType;
}

const DeliveryFeeSection = ({ boardData }: Props) => (
  <PaddingWrapper className="w-full flex items-center gap-[4px] bg-gray-50 border-b border-t border-gray-100">
    <div className="typo-title-14-medium text-gray-600">배송비</div>
    <div className="typo-title-14-regular text-gray-800">{boardData.deliveryFee}원</div>
    <div className="typo-body-12-regular text-gray-500">
      {`(${boardData.freeShippingConditions}원 이상 구매 시 무료)`}
    </div>
  </PaddingWrapper>
);

export default DeliveryFeeSection;
