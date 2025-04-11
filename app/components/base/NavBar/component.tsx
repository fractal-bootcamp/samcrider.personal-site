import React, { useState } from "react";
import { Link } from "react-scroll";
import SecretModal from "../Modal/component";
import { Fields } from "./types";
import styles from "./styles.module.css";

const NavBar = ({ handleClick }: Fields) => {
  return (
    <div className="terminal-navbar border-b-2 border-primary bg-base-100 p-2">
      <div className="flex items-center justify-between">
        <div className="lg:flex-1">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost border-2 border-primary text-primary lg:hidden px-2 hover:bg-neutral"
            >
              <span className="text-secondary">{"[menu]"}</span>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm font-terminal dropdown-content bg-base-100 border-2 border-primary rounded-none z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  to="about"
                  smooth
                  duration={500}
                  className="text-secondary hover:text-primary"
                >
                  <span className="text-primary">~$</span> cd about
                </Link>
              </li>
              <li>
                <Link
                  className="text-secondary hover:text-primary opacity-50 pointer-events-none"
                  onClick={handleClick}
                  to="thoughts"
                  smooth
                  duration={500}
                >
                  <span className="text-primary">~$</span> cd thoughts
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth
                  duration={500}
                  className="text-secondary hover:text-primary"
                >
                  <span className="text-primary">~$</span> cd projects
                </Link>
              </li>
              <li>
                <Link
                  to="connect"
                  smooth
                  duration={500}
                  className="text-secondary hover:text-primary"
                >
                  <span className="text-primary">~$</span> cd connect
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex">
            <Link
              to="about"
              smooth
              duration={500}
              className="btn btn-ghost text-secondary hover:text-primary py-0 px-4 border-2 border-primary rounded-none"
            >
              <span className="text-primary font-bold mr-2">[TERM]</span>{" "}
              sam@crider:~
            </Link>
          </div>
        </div>
        <div className="flex-1 lg:hidden text-center">
          <Link
            to="about"
            smooth
            duration={500}
            className="btn btn-ghost text-secondary py-0 px-4 border-2 border-primary rounded-none"
          >
            <span className="text-primary font-bold mr-2">[TERM]</span>{" "}
            sam@crider:~
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-2 font-terminal">
            <li className="terminal-tab border-2 border-primary px-3 py-1 hover:bg-neutral transition-colors">
              <Link
                to="about"
                smooth
                duration={500}
                className="text-secondary hover:text-primary"
              >
                <span className="text-primary">~$</span> cd about
              </Link>
            </li>
            <li className="terminal-tab border-2 border-primary px-3 py-1 opacity-50 pointer-events-none">
              <Link
                onClick={handleClick}
                to="thoughts"
                smooth
                duration={500}
                className="text-secondary"
              >
                <span className="text-primary">~$</span> cd thoughts
              </Link>
            </li>
            <li className="terminal-tab border-2 border-primary px-3 py-1 hover:bg-neutral transition-colors">
              <Link
                to="projects"
                smooth
                duration={500}
                className="text-secondary hover:text-primary"
              >
                <span className="text-primary">~$</span> cd projects
              </Link>
            </li>
            <li className="terminal-tab border-2 border-primary px-3 py-1 hover:bg-neutral transition-colors">
              <Link
                to="connect"
                smooth
                duration={500}
                className="text-secondary hover:text-primary"
              >
                <span className="text-primary">~$</span> cd connect
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="text-primary mr-2 animate-terminal-blink">█</div>
          <SecretModal />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
