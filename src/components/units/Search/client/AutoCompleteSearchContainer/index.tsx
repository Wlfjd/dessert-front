'use client';

import Link from 'next/link';
import { useGetAutoCompleteSearchTextsQuery } from '@/components/units/Search/hooks/useGetAutoCompleteSearchTextsQuery';

interface AutoCompleteSearchItemProps {
  text: string;
  keyword: string;
}

interface AutoCompleteSearchContainerProps {
  keyword: string;
}

const AutoCompleteSearchItem = ({ text, keyword }: AutoCompleteSearchItemProps) => {
  const keywordStartIdx = text.indexOf(keyword);
  const keywordLastIdx = keywordStartIdx + keyword.length - 1;

  const startText = text.slice(0, keywordStartIdx);
  const endText = text.slice(keywordLastIdx + 1);
  const highlightedText = text.slice(keywordStartIdx, keywordLastIdx + 1);

  const noMatched = keywordStartIdx === -1;

  return (
    <Link href={`/search/products?query=${text}`}>
      <div className="p-[10px] border-b border-solid border-color-Gray100 bg-white text-[14px] text-color-Gray900">
        {noMatched ? (
          text
        ) : (
          <>
            {startText}
            <span className="text-[14px] text-color-PrimaryOrangeRed">{highlightedText}</span>
            {endText}
          </>
        )}
      </div>
    </Link>
  );
};

const AutoCompleteSearchContainer = ({ keyword }: AutoCompleteSearchContainerProps) => {
  const { data: autoCompleteSearchTexts } = useGetAutoCompleteSearchTextsQuery(keyword);

  return (
    <div className="shadow-md shadow-color-Gray100">
      {!!autoCompleteSearchTexts?.length &&
        autoCompleteSearchTexts.map(text => {
          return <AutoCompleteSearchItem key={text} text={text} keyword={keyword} />;
        })}
    </div>
  );
};

export default AutoCompleteSearchContainer;
