import DetailSectionWrapper from '@/domains/product/components/DetailSectionWrapper';
import ReviewBadge from '@/domains/review/components/ReviewBadge';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

const ReviewBadgeSection = () => (
  <DetailSectionWrapper title="리뷰 대표 뱃지">
    <PaddingWrapper className="flex gap-3 pt-0">
      <ReviewBadge shape="good" className="flex-1 max-h-[100px]" />
      <ReviewBadge shape="sweet" className="flex-1 max-h-[100px]" />
      <ReviewBadge shape="soft" className="flex-1 max-h-[100px]" />
    </PaddingWrapper>
  </DetailSectionWrapper>
);

export default ReviewBadgeSection;
