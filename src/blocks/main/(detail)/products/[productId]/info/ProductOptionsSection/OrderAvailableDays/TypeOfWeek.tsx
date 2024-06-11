const WEEK = ['월', '화', '수', '목', '금', '토', '일'];

const TypeOfWeek = ({ availableDays }: { availableDays: any }) => {
  const availableWeekList = Object.entries(availableDays)
    .filter(([, isAvailable]) => isAvailable)
    .map(([day]) => day);

  return (
    <>
      {WEEK.map((item) => (
        <div
          key={item}
          className={`rounded-full leading-150 w-[24px] h-[24px] text-12 font-normal flex items-center justify-center  ${
            availableWeekList.includes(item)
              ? 'text-primaryOrangeRed bg-subColorPink font-medium'
              : 'text-gray-600 bg-gray-50 '
          }`}
        >
          {item}
        </div>
      ))}
    </>
  );
};

export default TypeOfWeek;
