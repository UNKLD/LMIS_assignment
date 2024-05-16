import { Avatar, Navbar } from "flowbite-react";

export default function Nav() {
  return (
    <Navbar
      fluid
      className="justify-between w-full py-5 border-b-2 border-gray-200 h-24 mt-2 "
    >
      <Navbar.Brand href="/">
        <span className="whitespace-nowrap text-2xl font-bold text-green-800 mx-10 pt-5">
          Ethiopian National COC
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="flex flex-col px-5 text-slate-500">
          <h1 className="self-center font-bold ">Amanuel Belay</h1>
          <p className="self-end justify-self-end text-xs">Medical Doctor</p>
        </div>
        <Avatar
          alt="User settings"
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded
          className="cursor-default"
        />

        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-center mx-5"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-0.00915527 0.5H7.99996L3.88929 4.61068L-0.00915527 0.5Z"
            fill="#008894"
          />
        </svg>

        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
