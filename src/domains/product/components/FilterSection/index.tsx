'use client';

import { useRecoilState } from 'recoil';

import FilterIcon from '@/domains/product/assets/filter.svg';
import { filterValueState } from '@/domains/product/atoms';
import FilterModal from '@/domains/product/components/alert-box/FilterModal';
import OrderAvailableCheckBox from '@/domains/product/components/FilterSection/OrderAvailableCheckBox';
import ProductSortSelect from '@/domains/product/components/FilterSection/ProductSortSelect';
import { FILTER_VALUES } from '@/domains/product/constants/filterValues';
import { TAG } from '@/domains/product/constants/tag';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import { getIngredientTag, getPriceTag } from '@/domains/product/utils/getTag';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import useModal from '@/shared/hooks/useModal';

interface FilterSectionProps {
  filterFamilyId: FilterFamilyIDType;
}

const FilterSection = ({ filterFamilyId }: FilterSectionProps) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(filterFamilyId));
  const { openModal } = useModal();

  const categoryTags = FILTER_VALUES.categories.map((item) => ({
    type: TAG.category,
    content: item
  }));
  const ingredientTag = filterValue.tags && getIngredientTag(filterValue.tags);
  const priceTag = getPriceTag(filterValue.price);
  const filterTagList = [ingredientTag, priceTag, ...categoryTags];

  const handleFilterClick = (newCategory: string) => {
    setFilterValue((prev) => ({
      ...prev,
      category: newCategory
    }));
  };

  const openFilterModal = () => {
    openModal(<FilterModal filterFamilyId={filterFamilyId} />);
  };

  return (
    <PaddingWrapper className="flex flex-col  gap-[16px] pb-[12px] border-b-[1px] border-solid border-gray-100">
      <div className="flex justify-between items-center gap-[6px]">
        <div className="flex gap-[6px] overflow-x-scroll scrollbar-hide">
          {filterTagList.map(
            (item) =>
              item && (
                <button
                  key={`${item.type}/${item.content}`}
                  type="button"
                  className={`px-[12px] py-[8px] min-w-max rounded-[50px] bg-white border text-12 leading-150 tracking-tight-2
      ${
        filterValue.category === item.content ||
        item.type === TAG.ingredient ||
        item.type === TAG.price
          ? 'border-primaryOrangeRed text-primaryOrangeRed font-bold'
          : 'border-gray-200 text-gray-900 font-medium'
      }`}
                  onClick={() => handleFilterClick(item.content)}
                  disabled={item.type === TAG.ingredient || item.type === TAG.price}
                >
                  {item.content}
                </button>
              )
          )}
        </div>
        <button type="button" onClick={openFilterModal} aria-label="Open Filter">
          <FilterIcon />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <OrderAvailableCheckBox filterFamilyId={filterFamilyId} />
        <ProductSortSelect filterFamilyId={filterFamilyId} />
      </div>
    </PaddingWrapper>
  );
};

export default FilterSection;
