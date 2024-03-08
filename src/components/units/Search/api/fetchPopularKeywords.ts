import API from '@/api';

type PopularKeywordsType = Array<string>;

export const fetchPopularKeywords = async (): Promise<PopularKeywordsType> => {
  const data = await API.get<{ content: PopularKeywordsType }>('/search/best-keyword', {
    cache: 'no-store'
  });
  return data.content;
};
