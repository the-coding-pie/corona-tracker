interface Props {
  text: string;
  count: number;
  color: string;
  extras?: string;
}

const CountInfoSm = ({ text, count, color, extras }: Props) => {
  return (
    <div className={`flex flex-col ${extras}`}>
      <span className="font-semibold text-xs text-secondary">{text}</span>
      <span className={`${color} text-base`}>{count.toLocaleString()}</span>
    </div>
  );
};

export default CountInfoSm;
