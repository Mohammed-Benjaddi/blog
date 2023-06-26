import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../Elements/Container";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isSideBarOpen, setSideBar] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav
      className={`bg-white text-black h-16 dark:bg-slate-900 dark:text-white transition drop-shadow-md sticky top-0 z-50`}
    >
      <Container className="h-full flex justify-between">
        <div className="h-full flex items-center w-1/4 lg:w-1/3">
          <Image
            src={`/${isDark ? "light" : "dark"}.svg`}
            className="icon cursor-pointer"
            width={25}
            height={25}
            alt="light"
            onClick={() => setIsDark(!isDark)}
          />
        </div>
        <div
          className={`menu inline-block md:hidden z-50 ${
            isSideBarOpen ? "active" : ""
          }`}
          onClick={() => setSideBar(!isSideBarOpen)}
        >
          <span className="dark:bg-white before:dark:bg-white after:dark:bg-white z-50"></span>
        </div>

        <div
          className={`md:hidden w-full h-[100vh] fixed bg-slate-200 dark:bg-slate-800 left-0 transition-all bg-opacity-90 ${
            isSideBarOpen ? "top-0 delay-0" : "-top-[100vh] delay-400"
          }`}
        >
          <Container className="h-full flex items-center">
            <div className="text-slate-700 dark:text-white flex flex-col text-right w-full gap-20 text-xl font-medium">
              <span
                className={`relative transition-all duration-300 text-white ${
                  isSideBarOpen
                    ? "top-0 opacity-100 delay-200"
                    : "top-20 opacity-0 delay-300"
                }`}
              >
                <Link
                  href={"/"}
                  className={`text-black dark:text-white relative before:transition-all hover:before:w-full before:w-0 before:h-[3px] before:absolute before:bg-sky-600 dark:before:bg-green-400 before:-bottom-1 hover:text-sky-600 dark:hover:text-green-400 transition ${
                    router.pathname === "/"
                      ? "text-sky-600 dark:text-green-400 font-semibold before:transition-all before:w-full before:h-[3px] before:absolute before:bg-sky-600 dark:before:bg-green-400 before:-bottom-1"
                      : ""
                  }`}
                  onClick={() => setSideBar(false)}
                >
                  Home
                </Link>
              </span>
              <span
                className={`relative transition-all duration-300 ${
                  isSideBarOpen
                    ? "top-0 opacity-100 delay-300"
                    : "top-20 opacity-0 delay-200"
                }`}
              >
                <Link
                  href={"/posts"}
                  className={`text-black dark:text-white relative before:transition-all hover:before:w-full before:w-0 before:h-[3px] before:absolute before:bg-sky-600 dark:before:bg-green-400 before:-bottom-1 hover:text-sky-600 dark:hover:text-green-400 transition ${
                    router.pathname === "/posts"
                      ? "text-sky-600 dark:text-green-400 font-semibold before:transition-all before:w-full before:h-[3px] before:absolute before:bg-sky-600 dark:before:bg-green-400 before:-bottom-1"
                      : ""
                  }`}
                  onClick={() => setSideBar(false)}
                >
                  Posts
                </Link>
              </span>
              <span
                className={`relative transition-all duration-300 ${
                  isSideBarOpen
                    ? "top-0 opacity-100 delay-400"
                    : "top-20 opacity-0 delay-100"
                }`}
              >
                <Link
                  href={"/about"}
                  className={`text-black dark:text-white relative before:transition-all hover:before:w-full before:w-0 before:h-[3px] before:absolute before:bg-sky-600 dark:before:bg-green-400 before:-bottom-1 hover:text-sky-600 dark:hover:text-green-400 transition ${
                    router.pathname === "/about"
                      ? "text-sky-600 dark:text-green-400 font-semibold before:transition-all before:w-full before:h-[3px] before:absolute before:bg-sky-600 dark:before:bg-green-400 before:-bottom-1"
                      : ""
                  }`}
                  onClick={() => setSideBar(false)}
                >
                  About
                </Link>
              </span>
              <span
                className={`relative transition-all duration-300 ${
                  isSideBarOpen
                    ? "top-0 opacity-100 delay-500"
                    : "top-20 opacity-0 delay-0"
                }`}
              >
                <Link
                  href={"/contact"}
                  className={`text-black dark:text-white relative before:transition-all hover:before:w-full before:w-0 before:h-[3px] before:absolute before:bg-sky-600 dark:before:bg-green-400 before:-bottom-1 hover:text-sky-600 dark:hover:text-green-400 transition ${
                    router.pathname === "/contact"
                      ? "text-sky-600 dark:text-green-400 font-semibold before:transition-all before:w-full before:h-[3px] before:absolute before:bg-sky-600 dark:before:bg-green-400 before:-bottom-1"
                      : ""
                  }`}
                  onClick={() => setSideBar(false)}
                >
                  Contact
                </Link>
              </span>
            </div>
          </Container>
        </div>

        <div className="hidden h-full md:flex items-center w-3/4 lg:w-1/3 justify-between text-right">
          <span className="w-1/4">
            <Link
              href={"/"}
              className={`relative before:transition-all hover:before:w-full before:w-0 before:h-[3px] before:absolute before:bg-sky-600 dark:before:bg-green-400 before:-bottom-1 text-black dark:text-white hover:text-sky-600 dark:hover:text-green-400 transition ${
                router.asPath === "/"
                  ? "text-sky-600 dark:text-green-400 font-semibold before:transition-all before:w-full before:h-[3px] before:absolute before:bg-sky-600 dark:before:bg-green-400 before:-bottom-1"
                  : ""
              }`}
            >
              Home
            </Link>
          </span>
          <span className="w-1/4">
            <Link
              href={"/posts"}
              className={`relative before:transition-all hover:before:w-full before:w-0 before:h-[3px] before:absolute before:bg-sky-600 dark:before:bg-green-400 before:-bottom-1 text-black dark:text-white hover:text-sky-600 dark:hover:text-green-400 transition ${
                router.asPath === "/posts"
                  ? "text-sky-600 dark:text-green-400 font-semibold before:transition-all before:w-full before:h-[3px] before:absolute before:bg-sky-600 dark:before:bg-green-400 before:-bottom-1"
                  : ""
              }`}
            >
              Posts
            </Link>
          </span>
          <span className="w-1/4">
            <Link
              href={"/about"}
              className={`relative before:transition-all hover:before:w-full before:w-0 before:h-[3px] before:absolute before:bg-sky-600 dark:before:bg-green-400 before:-bottom-1 text-black dark:text-white hover:text-sky-600 dark:hover:text-green-400 transition ${
                router.asPath === "/about"
                  ? "text-sky-600 dark:text-green-400 font-semibold before:transition-all before:w-full before:h-[3px] before:absolute before:bg-sky-600 dark:before:bg-green-400 before:-bottom-1"
                  : ""
              }`}
            >
              About
            </Link>
          </span>
          <span className="w-1/4">
            <Link
              href={"/contact"}
              className={`relative before:transition-all hover:before:w-full before:w-0 before:h-[3px] before:absolute before:bg-sky-600 dark:before:bg-green-400 before:-bottom-1 text-black dark:text-white hover:text-sky-600 dark:hover:text-green-400 transition ${
                router.asPath === "/contact"
                  ? "text-sky-600 dark:text-green-400 font-semibold before:transition-all before:w-full before:h-[3px] before:absolute before:bg-sky-600 dark:before:bg-green-400 before:-bottom-1"
                  : ""
              }`}
            >
              Contact
            </Link>
          </span>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
