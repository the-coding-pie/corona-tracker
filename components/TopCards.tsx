import { SpecificData } from "../extras/types";
import Card from "./Card";
import Image from 'next/image'

interface Props {
  data: SpecificData | undefined;
  error: any;
  isValidating: boolean;
}

const TopCards = ({ data, error }: Props) => {
  if (error) {
    return <div className="w-full h-auto flex items-center justify-center" style={{
      minHeight: "194px"
    }}>Failed to load...</div>;
  }

  if (!data) {
    return <div className="w-full h-auto flex items-center justify-center" style={{
      minHeight: "194px"
    }}>loading...</div>;
  }

  return (
    <div className="top-cards px-8 py-4 w-full">
      <div className="flex items-center mb-3">
        <h1 className="text-2xl font-bold mr-3">{data.name}</h1>
        {data.flag && (
          <div className="flag flex items-center justify-center mr-4">
            <Image
              src={data.flag}
              alt={data.name}
              width={25}
              height={28}
              className="object-contain object-center"
            />
          </div>
        )}
      </div>

      <div className="flex justify-between gap-6 w-full 2xl:grid 2xl:grid-cols-2">
        <Card
          text="Total Cases"
          count={data.total}
          textColor="text-red-400"
          bgColor="bg-red-400 bg-opacity-50"
          plusCount={data.todayTotal}
        />
        <Card
          text="Active Cases"
          count={data.active}
          textColor="text-yellow-400"
          bgColor="bg-yellow-400 bg-opacity-50"
          plusCount={data.todayActive}
        />
        <Card
          text="Recovered Cases"
          count={data.recovered}
          textColor="text-green"
          bgColor="bg-[#2ce50e] bg-opacity-50"
          plusCount={data.todayRecovered}
        />
        <Card
          text="Deaths"
          count={data.deaths}
          textColor="primary-text"
          bgColor="bg-gray bg-opacity-50"
          plusCount={data.todayDeaths}
        />
      </div>
    </div>
  );
};

export default TopCards;
