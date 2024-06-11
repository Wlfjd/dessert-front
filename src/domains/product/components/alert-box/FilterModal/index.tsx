'use client';

import ButtonSection from '@/domains/product/components/alert-box/FilterModal/ButtonSection';
import CategorySection from '@/domains/product/components/alert-box/FilterModal/CategorySection';
import PriceSection from '@/domains/product/components/alert-box/FilterModal/PriceSection';
import TagsSection from '@/domains/product/components/alert-box/FilterModal/TagsSection';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import Modal from '@/shared/components/Modal';

import IsOrderAvailableCheckbox from './IsOrderAvailableCheckbox';

interface FilterModalProps {
  filterFamilyId: FilterFamilyIDType;
}

const FilterModal = ({ filterFamilyId }: FilterModalProps) => (
  <Modal title="필터" className="py-[18px]">
    <TagsSection filterFamilyId={filterFamilyId} />
    <hr className="bg-gray-100" />
    <CategorySection filterFamilyId={filterFamilyId} />
    <hr className="bg-gray-100" />
    <PriceSection filterFamilyId={filterFamilyId} />
    <hr className="bg-gray-100" />
    <IsOrderAvailableCheckbox filterFamilyId={filterFamilyId} />
    <ButtonSection filterFamilyId={filterFamilyId} />
  </Modal>
);

export default FilterModal;
