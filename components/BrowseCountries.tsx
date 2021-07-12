import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { BASE_URL } from "../extras/constants";
import { Country } from "../extras/types";
import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const getCountries = () =>
  axios.get(`${BASE_URL}/countries?sort=cases`).then((response) => {
    const data = response.data;
    let countries = [];

    if (data.length > 0) {
      countries = data.map((country: any) => {
        return {
          name: country.country,
          flag: country.countryInfo.flag,
          total: country.cases,
          iso3: country.countryInfo.iso3,
        };
      });
    }

    return countries;
  });

const BrowseCountries = () => {
  const { data, error } = useSWR<Country[]>("countries", getCountries);

  const [countries, setCountries] = useState<Country[]>([]);

  const [input, setInput] = useState<string>("");

  const { query } = useRouter();

  useEffect(() => setCountries(data as Country[]), [data]);

  if (error) {
    return <div className="h-full flex-1 text-center">Failed to load...</div>;
  }

  if (!data) {
    return <div className="h-full flex-1 text-center">loading...</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.trim().toLowerCase();

    setInput(e.target.value);

    // alter countries
    const matchCountries = data.filter((c) =>
      c.name.toLowerCase().includes(search)
    );

    setCountries(matchCountries);

    if (search === "") {
      setCountries(data);
    }
  };

  return (
    <section className="countries h-full flex-1">
      <h3 className="text-sm font-semibold text-primary px-4 mb-2">
        Browse Countries
      </h3>

      <div className="search-box px-4 mb-3">
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => handleChange(e)}
          className="bg-gray text-secondary text-xs w-full px-2 py-2 rounded outline-none"
        />
      </div>

      <div className="countries h-full overflow-auto" id="countries" style={{
        paddingBottom: "370px"
      }}>
        {countries &&
          countries.length > 0 &&
          countries.map((country) => (
            <Link href={`?country=${country.iso3}`}>
              <div
                className={`country flex items-center bg-gray-hover px-4 py-2 cursor-pointer ${
                  country.iso3 === query.country
                    ? "sidebar-link-active bg-green-800 bg-opacity-50"
                    : ""
                }`}
              >
                {country.flag && (
                  <div className="flag flex items-center justify-center mr-4">
                    <Image
                      src={country.flag}
                      alt={country.name}
                      width={28}
                      height={28}
                      className="object-contain object-center"
                    />
                  </div>
                )}

                <div className="details text-sm">
                  <div className="font-bold text-primary mb-0.5">
                    {country.name}
                  </div>
                  <div className="text-xs">
                    <span className="text-secondary">Total: </span>
                    <span className="text-red-400">
                      {country.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default BrowseCountries;
