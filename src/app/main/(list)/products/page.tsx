import MainProductList from '@/blocks/main/(list)/MainProductList';
import FilterSection from '@/domains/product/components/FilterSection';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';

const ProductListPage = () => (
  <>
    <FilterSection filterFamilyId={FILTER_FAMILY_ID.main} />
    <MainProductList />
  </>
);

export default ProductListPage;
