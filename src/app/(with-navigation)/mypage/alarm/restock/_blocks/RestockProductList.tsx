'use client';

import useWebView from '@/shared/hooks/useWebView';
import usePopup from '@/shared/hooks/usePopup';
import { useGetAlarmQuery } from '@/domains/alarm/queries/useGetAlarmQuery';
import { useAddAlarmMutation } from '@/domains/alarm/queries/useAddAlarmMutation';
import { useCancelAlarmMutation } from '@/domains/alarm/queries/useCancelAlarmMutation';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Loading from '@/shared/components/Loading';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import AlarmCard from '@/domains/alarm/components/AlarmCard';
import NoAlarm from '@/domains/alarm/components/NoAlarm';
import MobileAppPopup from '@/domains/alarm/components/alert-box/MobileAppPopup';
import ReadyForServicePopup from '@/domains/alarm/components/alert-box/ReadyForServicePopup';
import AddAlarmPopup from '@/domains/alarm/components/alert-box/AddAlarmPopup';
import CancelAlarmPopup from '@/domains/alarm/components/alert-box/CancelAlarmPopup';
import DeleteAlarmPopup from '@/domains/alarm/components/alert-box/DeleteAlarmPopup';

const RestockProductList = () => {
  const { openPopup } = usePopup();
  const { isWebView } = useWebView();
  const { data: products, isFetching, isError } = useGetAlarmQuery({ pushCategory: 'restock' });
  const { mutate: addAlarm } = useAddAlarmMutation({ pushCategory: 'restock' });
  const { mutate: cancelAlarm } = useCancelAlarmMutation({ pushCategory: 'restock' });

  /* eslint-disable */
  const handleAlarm = (isAlarming: boolean, productOptionId: number) => {
    if (!isWebView) {
      openPopup(<MobileAppPopup type="restock" />);
      return;
    }

    if (isAlarming)
      openPopup(
        <CancelAlarmPopup type="restock" cancelAlarm={() => cancelAlarm({ productOptionId })} />
      );
    else
      openPopup(
        <AddAlarmPopup
          type="restock"
          addAlarm={({ fcmToken }) => addAlarm({ fcmToken, productOptionId })}
        />
      );
  };
  /* eslint-enable */

  const handleDelete = (productOptionId: number) => {
    openPopup(<DeleteAlarmPopup type="restock" productOptionId={productOptionId} />);
  };

  if (isFetching) {
    return <Loading />;
  }
  if (isError) {
    return (
      <SadBbangleBox>
        <p>오류가 발생했어요!</p>
      </SadBbangleBox>
    );
  }
  if (!products || products.length === 0) return <NoAlarm type="restock" />;

  return (
    <PaddingWrapper className="flex flex-col gap-y-[16px]">
      {products.map((product) => (
        <AlarmCard
          key={product.productId}
          type="restock"
          data={product}
          // onAlarm={() => handleAlarm(product.subscribed, product.productId)}
          onAlarm={() => openPopup(<ReadyForServicePopup type="restock" />)}
          onDelete={() => handleDelete(product.productId)}
        />
      ))}
    </PaddingWrapper>
  );
};

export default RestockProductList;