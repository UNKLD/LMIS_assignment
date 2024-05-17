/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";

function LineChart({ series, categories }) {
  const [display, setDisplay] = useState(false);
  const getChartOptions = () => {
    return {
      chart: {
        height: 250,
        // maxWidth: "100%",
        type: "line",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      tooltip: {
        enabled: true,
        x: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },

      grid: {
        show: true,
        strokeDashArray: 4
      },
      series: series ? series : [],
      legend: {
        show: false
      },
      stroke: {
        width: 6,
        curve: "smooth"
      },
      xaxis: {
        categories: categories
          ? categories.map((item) => item.slice(0, 3))
          : [],
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs fill-gray-500 dark:fill-gray-400"
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false
      }
    };
  };

  useEffect(() => {
    if (series) {
      if (
        document.getElementById("line-chart") &&
        typeof ApexCharts !== "undefined"
      ) {
        const chart = new ApexCharts(
          document.getElementById("line-chart"),
          getChartOptions()
        );
        chart.render();
        window.dispatchEvent(new Event("resize"));
      }
    }
  }, [series]);

  useEffect(() => {
    setTimeout(() => setDisplay(true), 1);
  }, []);

  if (!display) {
    return <></>;
  }

  return (
    <div className="bg-white rounded-lg dark:bg-gray-800 p-4 md:p-6 min-w-[55%] border-none">
      <div className="flex justify-between mb-5">
        <div className="grid gap-4 grid-cols-1">
          <div>
            <p className="text-gray-900 dark:text-white text-lg leading-none ml-2">
              COC Graph
            </p>
            <hr className="mt-3 w-[400%] h-px bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
        </div>
      </div>
      <div id="line-chart"></div>
    </div>
  );
}

export default LineChart;
