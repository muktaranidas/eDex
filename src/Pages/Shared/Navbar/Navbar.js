import React from "react";
import navLogo from "../../../assets/navbar/eDex.png";
import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="navbar  relative z-[999px] bg-[#6176F7] py-8  ">
      <div className="widthClass ">
        <div className="navbar-start flex item-center justify-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
            >
              <li>
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Course
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <img src={navLogo} alt="" />
          </div>
        </div>
        <div className="navbar-center  ml-[246px] mr-[270px] hidden lg:flex">
          <ul className="flex flex-row gap-[48px]">
            <li>
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Course
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className=" navbar-end ">
          <div className="flex items-center ">
            <span className="">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 8.25H4.5C4.08579 8.25 3.75 8.58579 3.75 9V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V9C20.25 8.58579 19.9142 8.25 19.5 8.25Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.625 8.25V4.875C8.625 3.97989 8.98058 3.12145 9.61351 2.48851C10.2465 1.85558 11.1049 1.5 12 1.5C12.8951 1.5 13.7535 1.85558 14.3865 2.48851C15.0194 3.12145 15.375 3.97989 15.375 4.875V8.25"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 15.375C12.6213 15.375 13.125 14.8713 13.125 14.25C13.125 13.6287 12.6213 13.125 12 13.125C11.3787 13.125 10.875 13.6287 10.875 14.25C10.875 14.8713 11.3787 15.375 12 15.375Z"
                  fill="white"
                />
              </svg>
            </span>
            <a href="#" className="mr-[24px] ml-[8px] nav-link ">
              Login
            </a>
            <div className="flex justify-center items-center w-[167px] h-[48px]">
              <Button btnText={"Sign up for Free"}></Button>
              {/* <Button></Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
