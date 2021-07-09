import CountInfoLg from "./CountInfoLg";
import CountInfoSm from "./CountInfoSm";
import PieChart from "./PieChart";

const LeftNavbar = () => {
  return (
    <nav className="left-nav min-h-screen overflow-x-hidden w-min z-20 card px-4 py-2">
      {/* world wide */}
      <section className="world-wide">
        <div className="top mb-2">
          <div className="left">
            <h2 className="text-xl font-bold mb-2">World Wide</h2>

            <CountInfoLg
              text="Total"
              count="184,158,222"
              color="text-red-400"
            />
          </div>
          <div className="right">
            <PieChart
              data={[
                {
                  id: "Created",
                  label: "Created",
                  value: 1823323,
                  link: "",
                  color: "hsl(213, 70%, 50%)",
                },
                {
                  id: "New",
                  label: "Created",
                  value: 1823323,
                  link: "",
                  color: "hsl(213, 70%, 50%)",
                },
                {
                  id: "Ok",
                  label: "Created",
                  value: 1823323,
                  link: "",
                  color: "hsl(213, 70%, 50%)",
                },
              ]}
              chartColor={"yellow_green"}
            />
          </div>
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
    </nav>
  );
};

export default LeftNavbar;
