import axios from "axios";
import { format } from "date-fns";
import React from "react";
import useSWR, { mutate } from "swr";
import { BASE_URL } from "../extras/constants";
import { WorldWideData } from "../extras/types";
import CountInfoLg from "./CountInfoLg";
import CountInfoSm from "./CountInfoSm";
import ProgressBar from "./ProgressBar";
import Link from "next/link";

const getWorldData = () =>
  axios.get(`${BASE_URL}/all`).then((response) => {
    const { cases: total, active, recovered, deaths } = response.data;

    return {
      total,
      active,
      recovered,
      deaths,
    };
  });

const WorldData = () => {
  const { data, error, isValidating } = useSWR<WorldWideData>(
    "worlddata",
    getWorldData
  );

  if (error) {
    return (
      <div
        className="flex items-center justify-center"
        style={{
          minWidth: "233px",
          minHeight: "285px",
        }}
      >
        Failed to load...
      </div>
    );
  }

  if (!data) {
    return (
      <div
        className="flex items-center justify-center"
        style={{
          minWidth: "233px",
          minHeight: "285px",
        }}
      >
        loading...
      </div>
    );
  }

  return (
    <div>
      {/* world wide */}
      <section className="world-wide mb-6 px-4 pt-2 cursor-pointer">
        <Link href="/">
          <a>
            <div className="top mb-3 flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-2">World Wide</h2>

              <CountInfoLg
                text="Total"
                count={data.total}
                color="text-red-400"
              />
            </div>
            <div className="middle mb-2">
              {/* progress bar */}
              <ProgressBar
                data={[
                  { count: data.recovered, color: "bg-green" },
                  { count: data.active, color: "bg-yellow-400" },
                  { count: data.deaths, color: "bg-gray-400" },
                ]}
              />
            </div>
            <div className="bottom flex">
              <CountInfoSm
                text="Active"
                count={data.active}
                color="text-yellow-400"
                extras="mr-3"
              />
              <CountInfoSm
                text="Recovered"
                count={data.recovered}
                color="text-green"
                extras="mr-3"
              />
              <CountInfoSm
                text="Deaths"
                count={data.deaths}
                color="text-gray-400"
              />
            </div>
          </a>
        </Link>
      </section>

      <div
        className="last-updated flex items-center justify-between border-gray px-4 pb-2 mb-6"
        style={{
          borderBottomWidth: "0.8px",
        }}
      >
        <span
          className="font-extralight"
          style={{
            fontSize: "0.7rem",
          }}
        >
          Last fetched: {format(new Date(), "hh:mm a")}
        </span>
        {isValidating ? (
          <button disabled={true}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 animate-spin disabled:opacity-50 cursor-not-allowed"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        ) : (
          <button
            onClick={() => {
              mutate("worlddata");
              mutate("countries");
              mutate("allCountries");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default WorldData;
