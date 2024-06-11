import React, { ReactNode } from 'react';

import FixedPurchaseButtonSection from '@/blocks/main/(detail)/products/[productId]/info/FixedPurchaseButtonSection';
import getBoardDetail from '@/domains/product/queries/getBoardDetail';
import getStoreInfo from '@/domains/product/queries/getStoreInfo';
import Header from '@/shared/components/Header';
import { ShareIcon } from '@/shared/components/icons';

interface DetailInfoLayoutProps {
  // params: { productId: string };
  children: ReactNode;
}

const DetailInfoLayout = async ({ children }: DetailInfoLayoutProps) => {
  const [storeData, boardData] = await Promise.all([getStoreInfo(), getBoardDetail()]);

  return (
    <>
      <Header
        title={`[${storeData.title}] ${boardData.title}`}
        content={
          <button type="button" aria-label="공유 버튼">
            <ShareIcon />
          </button>
        }
        back
      />
      {children}
      <FixedPurchaseButtonSection boardData={boardData} />
    </>
  );
};

export default DetailInfoLayout;
