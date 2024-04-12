import Header from '@/shared/components/Header';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';
import PATH from '@/shared/constants/path';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = async ({ children }: Props) => (
  <>
    <Header title="찜" />
    <ProductAndStoreTab defaultPath={PATH.wishList} />
    {children}
  </>
);

export default Layout;
