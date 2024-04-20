'use client';

import Select from '@/shared/components/Select';
import { useRecoilState } from 'recoil';
import { SORT_OPTIONS } from '../constants';
import { wishProductSortState } from '../atoms/sort';

const WishProductSortSelect = () => {
  const [sort, setSort] = useRecoilState(wishProductSortState);

  return (
    <Select options={SORT_OPTIONS} selectedOption={sort} onChange={(option) => setSort(option)} />
  );
};

export default WishProductSortSelect;
