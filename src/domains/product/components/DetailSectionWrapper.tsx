import { ReactNode } from 'react';

import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface DetailSectionWrapperProps {
  title: string;
  children: ReactNode;
}

const DetailSectionWrapper = ({ title, children }: DetailSectionWrapperProps) => (
  <>
    <PaddingWrapper className="typo-title-14-semibold px-[16px] border-gray-100 text-gray-800">
      {title}
    </PaddingWrapper>
    {children}
  </>
);

export default DetailSectionWrapper;
