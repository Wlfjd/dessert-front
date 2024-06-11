import Image from 'next/image';

import getBoardDetail from '@/domains/product/queries/getBoardDetail';

const BoardDetailsSection = async () => {
  const { boardDetails } = await getBoardDetail();

  return (
    <div className="w-full p-0 ">
      {boardDetails.map((item) => (
        <Image key={item} src={item} alt="상세" width={600} height={100} className=" m-auto" />
      ))}
    </div>
  );
};

export default BoardDetailsSection;
