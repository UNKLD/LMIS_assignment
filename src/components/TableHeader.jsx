import PropTypes from "prop-types";

function TableHeader({ title }) {
  return (
    <th scope="col" className="px-6 py-3">
      <div className="flex items-center gap-2">
        {title}
        <a href="#">
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1.45169L5 5.45169L1 1.45169"
              stroke="#212121"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </th>
  );
}

TableHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default TableHeader;
