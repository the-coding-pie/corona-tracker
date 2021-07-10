import { format } from "date-fns";
import BrowseCountries from "./BrowseCountries";
import CountInfoLg from "./CountInfoLg";
import CountInfoSm from "./CountInfoSm";
import ProgressBar from "./ProgressBar";

const LeftNavbar = () => {
  return (
    <nav className="left-nav min-h-screen max-h-screen h-screen overflow-hidden w-min z-20 card">
      {/* world wide */}
      <section className="world-wide mb-6 px-4 pt-2">
        <div className="top mb-3 flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-2">World Wide</h2>

          <CountInfoLg text="Total" count="184,158,222" color="text-red-400" />
        </div>
        <div className="middle mb-2">
          {/* progress bar */}
          <ProgressBar
            data={[
              { count: 232323, color: "bg-green" },
              { count: 23242, color: "bg-yellow-400" },
              { count: 24235, color: "bg-gray-400" },
            ]}
          />
        </div>
        <div className="bottom flex">
          <CountInfoSm
            text="Active"
            count="184,158,222"
            color="text-yellow-400"
            extras="mr-3"
          />
          <CountInfoSm
            text="Recovered"
            count="184,158,222"
            color="text-green"
            extras="mr-3"
          />
          <CountInfoSm
            text="Deaths"
            count="184,158,222"
            color="text-gray-400"
          />
        </div>
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
          Last updated: {format(new Date(), "hh:mm")}
        </span>
        <button>
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
      </div>

      <BrowseCountries />
    </nav>
  );
};

export default LeftNavbar;
