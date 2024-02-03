import Header from '@/components/commons/header/client/Header';
import WishDetail from '../client/WishDetail';

const ServerHome = async () => {
    return (
        <>
            <Header title="찜 상세(임시)" />
            <WishDetail />
        </>
    );
};

export default ServerHome;
