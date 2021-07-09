interface Props {
  text: string;
  count: string;
  color: string;
  extras?: string;
}

const CountInfoSm = ({ text, count, color, extras }: Props) => {
  return (
    <div className={`flex flex-col ${extras}`}>
      <span className="font-semibold text-sm text-secondary">{text}</span>
      <span className={`${color} text-base`}>{count}</span>
    </div>
  );
};

export default CountInfoSm;
