// interface ProductDetailProps {
//   params: { productId: string };
// }

import BoardDetailsSection from '@/blocks/main/(detail)/products/[productId]/info/BoardDetailSection';
import BoardImagesSection from '@/blocks/main/(detail)/products/[productId]/info/BoardImagesSection';
import ProductOptionsSetion from '@/blocks/main/(detail)/products/[productId]/info/ProductOptionsSection';
import ReviewBadgeSection from '@/blocks/main/(detail)/products/[productId]/info/ReviewBadgeSection';
import SimpleInfoWithStoreSection from '@/blocks/main/(detail)/products/[productId]/info/SimpleInfoWithStoreSection';

const ProductDetailPage = () => (
  <>
    <BoardImagesSection />

    <SimpleInfoWithStoreSection />

    <ReviewBadgeSection />

    <ProductOptionsSetion />

    <BoardDetailsSection />
  </>
);

export default ProductDetailPage;
