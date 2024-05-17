import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import ProgressBar from "./components/ProgressBar";
import StatsCard from "./components/StatCard";
import Table from "./components/Table";
import { Dash1, Dash2, Dash3, Dash4, Dash5 } from "./helpers/icons";
import { get_Dashboard_Data } from "./helpers/api";

export default function App() {
  const [dashData, setDashData] = useState([]);
  const statCardsInfo = [
    {
      title: "Total COC",
      value: "totalCoc",
      icon: <Dash1 />
    },
    {
      title: "Total Completed",
      value: "totalCompleted",
      icon: <Dash2 />
    },
    {
      title: "Total Regular",
      value: "totalRegular",
      icon: <Dash3 />
    },
    {
      title: "Total Distance",
      value: "totalDistance",
      icon: <Dash4 />
    },

    {
      title: "Total Passed",
      value: "totalPracticalPassed",
      icon: <Dash5 />
    }
  ];

  const cities = [
    { AA: "Addis Ababa" },
    { AD: "Adama" },
    { BJ: "Bahir Dar" },
    { DB: "Dessie" },
    { GB: "Gondar" },
    { HR: "Harar" },
    { JG: "Jigjiga" },
    { MD: "Mekelle " }
  ];

  useEffect(() => {
    get_Dashboard_Data().then((data) => {
      setDashData(data);
    });
  }, []);
  return (
    <Layout>
      <div className="flex m-10 ml-16">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex gap-2 ">
            {statCardsInfo.map((item, i) => (
              <StatsCard
                key={i}
                title={item.title}
                icon={item.icon}
                value={dashData[item.value]}
              />
            ))}
          </div>
          <div className="flex min-w-full rounded-lg shadow-lg">
            <LineChart
              series={[
                {
                  name: "COC",
                  data: dashData?.totalCocByMonth?.map(
                    (data) => data._count.month
                  ),
                  color: "#32A583"
                }
              ]}
              categories={dashData?.totalCocByMonth?.map((data) => data.month)}
            />
            <hr className="w-px h-[90%] bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="ml-1 text-center flex flex-col justify-between items-center flex-wrap">
              <h1 className="text-2xl mx-16 text-start">
                Total COC Created this month
              </h1>
              <div className="mb-5">
                <h1 className="text-7xl font-bold">
                  {dashData?.totalCocThisMonth}
                </h1>
                <p>
                  <span className="text-green-500 font-bold">+23%</span> since
                  last month
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <Table />
          </div>
        </div>
        <div className="w-1/2 px-4 ml-3">
          <div className="rounded-xl shadow-lg mb-4 px-6 pb-5">
            <h1 className="text-xl font-bold mb-6 pt-3">COC by City</h1>
            {dashData?.totalCountByCity?.map((data, i) => (
              <div className="flex items-center gap-5 w-full my-6" key={i}>
                <div className="w-1/2 font-bold text-slate-500">
                  <p>{cities[i][Object.keys(cities[i])]}</p>
                </div>
                <div className="w-[80%]">
                  <ProgressBar progress={`${data._count.city}%`} />
                </div>
                <div className="w-1/5 text-slate-500 pl-6">
                  {Number(data._count.city).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl shadow-lg">
            <PieChart />
          </div>
        </div>
      </div>
    </Layout>
  );
}
