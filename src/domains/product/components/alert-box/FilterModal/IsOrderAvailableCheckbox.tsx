import { useRecoilState } from 'recoil';

import { orderAvailableTodayTempState } from '@/domains/product/atoms';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import CheckBox from '@/shared/components/Checkbox';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface OrderAvailableCheckBoxProps {
  filterFamilyId: FilterFamilyIDType;
}

const IsOrderAvailableCheckbox = ({ filterFamilyId }: OrderAvailableCheckBoxProps) => {
  const [isAvailableOrder, setIsAvailableOrder] = useRecoilState(
    orderAvailableTodayTempState(filterFamilyId)
  );

  const handleCheckChange = () => {
    setIsAvailableOrder((prev) => !prev);
  };
  return (
    <PaddingWrapper>
      <CheckBox className="text-gray-800" isChecked={isAvailableOrder} onChange={handleCheckChange}>
        주문가능상품만 보기
      </CheckBox>
    </PaddingWrapper>
  );
};

export default IsOrderAvailableCheckbox;
