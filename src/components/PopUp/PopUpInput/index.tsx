const PopUpInput = ({
  title,
  type,
  value,
  onChange,
  valueStart,
  valueEnd,
  onChangeStart,
  onChangeEnd,
}: {
  title: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueStart?: string;
  valueEnd?: string;
  onChangeStart?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEnd?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="pop-up-input">
      <label className="question">{title}</label>
      {type === "text" && (
        <input
          type="text"
          className="input"
          placeholder="Write the answer"
          value={value}
          onChange={onChange}
        />
      )}
      {type === "date" && (
        <div className="date-range-input">
          <input
            type="date"
            className="input"
            value={valueStart}
            onChange={onChangeStart}
          />
          <input
            type="date"
            className="input"
            value={valueEnd}
            onChange={onChangeEnd}
          />
        </div>
      )}
    </div>
  );
};

export default PopUpInput;
