import { Avatar } from "flowbite-react";
import { cities } from "../helpers/helper";
import TableHeader from "./TableHeader";

/* eslint-disable react/prop-types */
function Table({ data }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <TableHeader title="Name" />
            <TableHeader title="Assessed" />
            <TableHeader title="Reg.No" />
            <TableHeader title="Location" />
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item, i) => (
            <tr
              key={i}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.id}
              </th>
              <th scope="row" className="px-6 py-4 flex items-center gap-1">
                <Avatar
                  alt={item.first_name + " " + item.father_name}
                  size="sm"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                  className="cursor-default"
                />
                {item.first_name + " " + item.father_name}
              </th>
              <td className="px-6 py-4">
                {item.assessed ? "Assessed" : "Not Assessed"}
              </td>
              <td className="px-6 py-4">{item.reg_no}</td>
              <td className="px-6 py-4">
                {cities[i][Object.keys(cities[i])]} {item.location}
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex items-center gap-1"
                >
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_868)">
                      <rect
                        y="0.951691"
                        width="12"
                        height="12"
                        rx="1.33333"
                        fill="white"
                      />
                      <path
                        d="M3.36682 7.11912C3.36682 7.11912 4.26228 5.35986 5.82978 5.35986C7.39693 5.35986 8.29275 7.11912 8.29275 7.11912C8.29275 7.11912 7.39693 8.87838 5.82978 8.87838C4.26228 8.87838 3.36682 7.11912 3.36682 7.11912Z"
                        stroke="#4F5E74"
                        strokeWidth="0.666667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.99703 8.87766V9.58137C8.99703 9.768 8.92289 9.94699 8.79092 10.079C8.65895 10.2109 8.47996 10.2851 8.29333 10.2851H3.3674C3.18077 10.2851 3.00178 10.2109 2.86981 10.079C2.73784 9.94699 2.6637 9.768 2.6637 9.58137V8.87766M8.99703 5.35914V4.65544C8.99703 4.46881 8.92289 4.28982 8.79092 4.15785C8.65895 4.02588 8.47996 3.95174 8.29333 3.95174H3.3674C3.18077 3.95174 3.00178 4.02588 2.86981 4.15785C2.73784 4.28982 2.6637 4.46881 2.6637 4.65544V5.35914M5.83036 7.47025C5.92368 7.47025 6.01317 7.43318 6.07916 7.3672C6.14514 7.30121 6.18221 7.21172 6.18221 7.1184C6.18221 7.02509 6.14514 6.93559 6.07916 6.86961C6.01317 6.80362 5.92368 6.76655 5.83036 6.76655C5.73705 6.76655 5.64755 6.80362 5.58157 6.86961C5.51558 6.93559 5.47851 7.02509 5.47851 7.1184C5.47851 7.21172 5.51558 7.30121 5.58157 7.3672C5.64755 7.43318 5.73705 7.47025 5.83036 7.47025Z"
                        stroke="#4F5E74"
                        strokeWidth="0.666667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <rect
                      x="0.333333"
                      y="1.28502"
                      width="11.3333"
                      height="11.3333"
                      rx="1"
                      stroke="#4F5E74"
                      strokeWidth="0.666667"
                    />
                    <defs>
                      <clipPath id="clip0_1_868">
                        <rect
                          y="0.951691"
                          width="12"
                          height="12"
                          rx="1.33333"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
