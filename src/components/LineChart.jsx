import React, { useEffect } from "react";

function LineChart() {
  const options = {
    chart: {
      height: "100%",
      maxWidth: "100%",
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
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -26
      }
    },
    series: [
      {
        name: "Clicks",
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: "#1A56DB"
      }
    ],
    legend: {
      show: false
    },
    stroke: {
      width: 6,
      curve: "smooth"
    },
    xaxis: {
      categories: [
        "01 Feb",
        "02 Feb",
        "03 Feb",
        "04 Feb",
        "05 Feb",
        "06 Feb",
        "07 Feb"
      ],
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400"
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
  useEffect(() => {
    const chart = new ApexCharts(
      document.getElementById("line-chart"),
      options
    );
    chart.render();
  }, [options]);
  return (
    <div className="max-w-sm bg-white rounded-lg dark:bg-gray-800 p-4 md:p-6 min-w-[50%] border-none">
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
