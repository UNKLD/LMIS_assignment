import { useEffect, useState } from "react";
import propTypes from "prop-types";
import ApexCharts from "apexcharts";

function PieChart({ series, labels }) {
  const [display, setDisplay] = useState(false);
  const getChartOptions = () => {
    return {
      series: series,
      colors: ["#23E7AD", "#FF6868"],
      chart: {
        height: 420,
        width: "100%",
        type: "pie"
      },
      stroke: {
        colors: ["white"],
        lineCap: ""
      },
      plotOptions: {
        pie: {
          labels: {
            show: true
          },
          size: "100%",
          dataLabels: {
            offset: -25
          }
        }
      },
      labels: labels,
      dataLabels: {
        enabled: true,
        style: {
          fontFamily: "Inter, sans-serif"
        }
      },
      legend: {
        show: true,
        position: "bottom",
        fontFamily: "Inter, sans-serif"
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + "%";
          }
        }
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            return value + "%";
          }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      }
    };
  };

  useEffect(() => {
    const chart = new ApexCharts(
      document.getElementById("pie-chart"),
      getChartOptions()
    );
    chart.render();
  }, [series]);

  useEffect(() => {
    setTimeout(() => setDisplay(true), 1);
  }, []);

  if (!display) {
    return <></>;
  }

  return (
    <div className=" w-full p-4 md:p-6">
      <div className="flex justify-between items-start w-full">
        <div className="flex-col items-center">
          <div className="flex items-center mb-1">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white me-1">
              Competency
            </h5>

            <div
              data-popover
              id="chart-info"
              role="tooltip"
              className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
            ></div>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="lastDaysdropdown"
            data-dropdown-placement="bottom"
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
            type="button"
          >
            Monthly
            <svg
              className="w-2.5 m-2.5 ms-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="py-6" id="pie-chart"></div>
    </div>
  );
}

PieChart.propTypes = {
  series: propTypes.array.isRequired,
  labels: propTypes.array.isRequired
};

export default PieChart;
