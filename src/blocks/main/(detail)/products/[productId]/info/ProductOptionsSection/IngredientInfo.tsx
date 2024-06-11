import { ProductType } from '@/domains/product/types/productDetailType';
import Tag from '@/shared/components/Tag';

interface Props {
  product: ProductType;
}

const IngredientInfo = ({ product }: Props) => {
  const tagsArray = (detailData: ProductType) => {
    const tags = [];
    if (detailData.glutenFreeTag) tags.push('글루텐프리');
    if (detailData.highProteinTag) tags.push('고단백');
    if (detailData.sugarFreeTag) tags.push('저당');
    if (detailData.veganTag) tags.push('비건');
    if (detailData.ketogenicTag) tags.push('키토');
    return tags;
  };

  return (
    <div className="flex gap-[4px]">
      {tagsArray(product).map((tag) => (
        <Tag>{tag}</Tag>
      ))}
    </div>
  );
};
export default IngredientInfo;
