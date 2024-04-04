'use client';

import { BbangleSadIcon } from '@/components/commons/Icon';
import Button from '@/components/commons/button/client/Button';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <PaddingWrapper className="flex flex-wrap gap-x-[4%] gap-y-4">
          <div className="flex flex-col items-center justify-center w-full h-[80vh] gap-2">
            <BbangleSadIcon />
            <div className="text-gray-500 text-center font-regular text-14 leading-150 tracking-tight-2">
              <p>에러가 발생했어요!</p>
              <p>{error.message}</p>
            </div>
          </div>
          <div className="justify-evenly bg-white w-full max-w-[600px] mx-auto p-[16px] fixed flex gap-[10px] left-0 right-0 bottom-0 z-[5000]">
            <div className="flex-1">
              <Button onClick={reset} variants="primary-black">
                다시 시도하기
              </Button>
            </div>
            <div className="flex-1">
              <Button onClick={() => router.push('/')} variants="primary-white">
                홈으로 가기
              </Button>
            </div>
          </div>
        </PaddingWrapper>
      </body>
    </html>
  );
}
