interface Props {
  availableDays: {
    startDate: number;
    endDate: number;
  };
}

const TypeOfDate = ({ availableDays: { startDate, endDate } }: Props) => (
  <div className="typo-title-14-regular text-gray-700">
    {startDate} ~ {endDate}
  </div>
);
export default TypeOfDate;
