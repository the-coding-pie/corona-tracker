import Head from "next/head";
import dynamic from "next/dynamic";
import { BASE_URL, WORLD_WIDE } from "../extras/constants";
import axios from "axios";
import { LatLong, SpecificData } from "../extras/types";
import { useRouter } from "next/dist/client/router";
import LeftNavbar from "../components/LeftNavbar";
import useSWR from "swr";
import TopCards from "../components/TopCards";
import { useEffect, useState } from "react";

const DMap = dynamic(() => import("../components/MyMap"), {
  ssr: false,
  loading() {
    return (
      <div className="h-full flex-1 flex items-center justify-center px-4 py-2">
        Loading...
      </div>
    );
  },
});

const getSpecificData = (url: string, country: string) => {
  if (country === WORLD_WIDE) {
    return axios.get(`${BASE_URL}/all?yesterday=true`).then((res) => {
      const data = res.data;

      return {
        name: "World Wide",
        flag: undefined,
        iso3: undefined,
        total: data.cases,
        todayTotal: data.todayCases,
        active: data.active,
        todayActive: undefined,
        recovered: data.recovered,
        todayRecovered: data.todayRecovered,
        deaths: data.deaths,
        todayDeaths: data.todayDeaths,
        latLong: undefined,
      };
    });
  } else {
    return axios
      .get(`${BASE_URL}/countries/${country}?yesterday=true&strict=true`)
      .then((res) => {
        const data = res.data;

        return {
          name: data.country,
          flag: data.countryInfo.flag,
          iso3: data.countryInfo.iso3,
          total: data.cases,
          todayTotal: data.todayCases,
          active: data.active,
          todayActive: undefined,
          recovered: data.recovered,
          todayRecovered: data.todayRecovered,
          deaths: data.deaths,
          todayDeaths: data.todayDeaths,
          latLong: [data.countryInfo.lat, data.countryInfo.long],
        };
      });
  }
};

const Home = () => {
  const { query } = useRouter();

  const { data, error, isValidating } = useSWR<SpecificData>(
    ["specificData", query.country ? query.country : WORLD_WIDE],
    getSpecificData
  );

  const [latLong, setLatLong] = useState<LatLong | undefined>(undefined);

  useEffect(() => {
    setLatLong(data?.latLong);
  }, [data]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="body flex">
        {/* left nav */}
        <LeftNavbar />

        {/* home screen */}
        <main className="flex-1 pb-16 w-full flex flex-col justify-between">
          {/* top cards */}
          <TopCards {...{ data, error, isValidating }} />

          {/* map */}
          <div className="map px-4 py-2 h-full w-full rounded">
            <DMap {...{ latLong }} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
