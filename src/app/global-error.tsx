'use client';

import Icon from '@/components/commons/Icon';
import Button from '@/components/commons/button/client/Button';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex flex-wrap w-[92%] m-auto gap-x-[4%] gap-y-4">
          <div className="flex flex-col items-center justify-center w-full h-[80vh] gap-2">
            <Icon.bbangleSad />
            <div className="text-color-Gray500 text-center">
              <p className="text-sm font-regular">에러가 발생했어요!</p>
              <p className="text-sm font-regular">{error.message}</p>
            </div>
          </div>
          <div className="bg-white w-full max-w-[600px] mx-auto p-[16px] fixed flex gap-[10px] left-0 right-0 bottom-0 z-[5000]">
            <div className="flex-1">
              <Button onClick={reset} variants="primary-black">
                다시 시도하기
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
