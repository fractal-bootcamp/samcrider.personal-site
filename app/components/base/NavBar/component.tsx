import React, { useState } from "react";
import { Link } from "react-scroll";
import SecretModal from "../Modal/component";
import { Fields } from "./types";
import styles from "./styles.module.css";

const NavBar = ({ handleClick }: Fields) => {
  return (
    <div className={`navbar bg-base-100 p-6 ${styles.navbar}`}>
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
            className="menu menu-sm dropdown-content font-semibold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="about" smooth duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link
                className="opacity-50 pointer-events-none"
                onClick={handleClick}
                to="thoughts"
                smooth
                duration={500}
              >
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
        <div className="hidden lg:flex lg:navbar-start">
          <Link
            to="about"
            smooth
            duration={500}
            className="btn btn-ghost text-xl"
          >
            Sam Crider
          </Link>
        </div>
      </div>
      <div className="navbar-center lg:hidden">
        <Link
          to="about"
          smooth
          duration={500}
          className="btn btn-ghost text-xl"
        >
          Sam Crider
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold px-1">
          <li>
            <Link to="about" smooth duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              className="opacity-50 pointer-events-none"
              to="thoughts"
              smooth
              duration={500}
            >
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
