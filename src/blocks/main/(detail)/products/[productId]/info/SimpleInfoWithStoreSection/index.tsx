import getBoardDetail from '@/domains/product/queries/getBoardDetail';
import getStoreInfo from '@/domains/product/queries/getStoreInfo';

import DeliveryFeeSection from './DeliveryFeeSection';
import DetailStoreInfo from './DetailStoreInfo';
import SimpleProductInfo from './SimpleProductInfo';

const SimpleInfoWithStoreSection = async () => {
  const [storeData, boardData] = await Promise.all([getStoreInfo(), getBoardDetail()]);
  return (
    <>
      <DetailStoreInfo storeData={storeData} />
      <SimpleProductInfo boardData={boardData} />
      <DeliveryFeeSection boardData={boardData} />
    </>
  );
};
export default SimpleInfoWithStoreSection;
