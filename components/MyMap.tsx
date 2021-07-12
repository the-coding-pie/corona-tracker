import {
  MapContainer,
  TileLayer,
  Circle,
  Tooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { BASE_URL } from "../extras/constants";
import axios from "axios";
import useSWR from "swr";
import { LatLong } from "../extras/types";
import { LatLngExpression } from "leaflet";
import Loader from "./Loader";

const defaultView: LatLong = [24, 30];

interface Props {
  latLong: LatLong | undefined;
}

interface CustomCompProps {
  latLong: LatLong | undefined;
}

const getCountries = () =>
  axios.get(`${BASE_URL}/countries`).then((response) => {
    const data = response.data;
    let countries = [];

    if (data.length > 0) {
      countries = data.map((country: any) => {
        return {
          name: country.country,
          total: country.cases,
          active: country.active,
          recovered: country.recovered,
          deaths: country.deaths,
          latLong: [country.countryInfo.lat, country.countryInfo.long],
          population: country.population,
        };
      });
    }

    return countries;
  });

const CustomComp = ({ latLong }: CustomCompProps) => {
  const map = useMap();

  if (latLong) {
    map.flyTo(latLong as LatLngExpression, 4);
  } else {
    map.flyTo(defaultView as LatLngExpression, 2);
  }
  return null;
};

const MyMap = ({ latLong }: Props) => {
  const { data, error } = useSWR("allCountries", getCountries);

  if (error) {
    return <div className="h-full flex-1 flex items-center justify-center">Failed to load...</div>;
  }

  if (!data) {
    return <div className="h-full flex-1 flex items-center justify-center">
       <Loader />
    </div>;
  }

  return (
    <MapContainer
      className="map flex-1 z-50 h-full w-full"
      center={defaultView}
      minZoom={2}
      maxZoom={8}
      zoom={2}
      // maxBounds={[[-90, -180], [90, 180]]}
      // maxBoundsViscosity={1}
      worldCopyJump={true}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* data */}
      {data &&
        data.length > 0 &&
        data.map((country: any) => {
          return (
            <Circle
              key={country.name}
              radius={country.total / 15}
              center={country.latLong}
              fillColor={"#ff0000"}
            >
              <Tooltip direction="auto">
                <div
                  className="bg-white text-sm"
                  style={{
                    minWidth: "176px",
                  }}
                >
                  <h3 className="font-bold pb-1 text-center">{country.name}</h3>

                  <div className="total pb-1 mb-1 border-b text-red-500 flex justify-between items-center">
                    <span>Total Cases: </span>
                    <span>{country?.total?.toLocaleString()}</span>
                  </div>
                  <div className="active flex items-center ">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                    <div className="flex items-center justify-between w-full">
                      <span>Active: </span>
                      <span className="text-yellow-500">
                        {country?.active?.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="recovered flex items-center ">
                    <div className="w-2 h-2 rounded-full bg-green mr-2"></div>
                    <div className="flex items-center justify-between w-full">
                      <span>Recovered: </span>
                      <span className="text-green">
                        {country?.recovered?.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="deaths flex items-center ">
                    <div className="w-2 h-2 rounded-full bg-gray mr-2"></div>
                    <div className="flex items-center justify-between w-full">
                      <span>Deaths: </span>
                      <span className="primary-text">
                        {country?.deaths?.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="total pt-1 mt-1 border-t flex justify-between w-full items-center">
                    <span>Population: </span>
                    <span>{country?.population?.toLocaleString()}</span>
                  </div>
                </div>
              </Tooltip>
            </Circle>
          );
        })}
      <CustomComp latLong={latLong} />
    </MapContainer>
  );
};

export default MyMap;
