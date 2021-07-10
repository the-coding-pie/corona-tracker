interface Props {
  text: string;
  count: number;
  color: string;
}

const CountInfoLg = ({ text, count, color }: Props) => {
  return (
    <div className="flex flex-col">
      <span className="font-semibold text-sm text-secondary">{text}</span>
      <span className={`${color} text-xl`}>{count.toLocaleString()}</span>
    </div>
  );
};

export default CountInfoLg;
