import React, { useState } from "react";
import { Link } from "react-scroll";
import SecretModal from "../Modal/component";
import { Fields } from "./types";

const NavBar = ({ setMessage }: Fields) => {
  const [counter, setCounter] = useState<number>(0);

  const handleClick = () => {
    switch (counter) {
      case 0:
        setMessage((prev) => [
          ...prev,
          "I have no idea what you're trying to do, don't click that.",
        ]);

        setCounter(1);

        break;
      case 1:
        setMessage((prev) => [
          ...prev,
          "Seriously, that button is off limits.",
        ]);
        setCounter(2);
        break;

      case 2:
        setMessage((prev) => [...prev, "Nope, still off limits."]);
        setCounter(3);
        break;

      case 3:
        setMessage((prev) => [
          ...prev,
          "By the way, have you found the secret modal yet?",
        ]);
        setCounter(0);
        break;

      default:
        setMessage((prev) => [...prev, ""]);
        setCounter(0);
    }
  };

  return (
    <div className="navbar bg-base-100 p-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="about" smooth duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="thoughts" smooth duration={500}>
                Thoughts
              </Link>
            </li>
            <li>
              <Link to="projects" smooth duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="connect" smooth duration={500}>
                Connect
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Sam Crider</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="about" smooth duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="thoughts" smooth duration={500}>
              Thoughts
            </Link>
          </li>
          <li>
            <Link to="projects" smooth duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="connect" smooth duration={500}>
              Connect
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <SecretModal />
      </div>
    </div>
  );
};

export default NavBar;
