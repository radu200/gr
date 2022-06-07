import "./style.scss";

interface IProps {
  min: number;
  max: number;
  value?: number | string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterInput = ({ min, max, value, onChange, name }: IProps) => {
  return (
    <input
      className="filter-input"
      type="number"
      name={name}
      min={min}
      max={max}
      value={value || ""}
      pattern="[0-9]*"
      onChange={onChange}
    />
  );
};
export default FilterInput;
