import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section
          className="overflow-hidden"
          style={{
            background: "url(gradia-assets/images/hero/bg.png) no-repeat",
            backgroundSize: "cover",
          }}
        >
          <section>
            <div className="flex items-center justify-between px-8 py-5">
              <div className="w-auto">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto mr-14">
                    <a href="#">
                      <img
                        src="gradia-assets/logos/gradia-name-white.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-auto">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto hidden lg:block">
                    <ul className="flex items-center mr-10">
                      <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                        <a href="#">Features</a>
                      </li>
                      <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                        <a href="#">Solutions</a>
                      </li>
                      <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                        <a href="#">Resources</a>
                      </li>
                      <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                        <a href="#">Pricing</a>
                      </li>
                      <li className="font-heading text-white hover:text-gray-200 text-lg">
                        <Link to="/payment">Payment</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-auto hidden lg:block">
                    <button className="group relative font-heading block py-2 px-5 text-lg text-white border-2 border-white overflow-hidden rounded-10">
                      <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500" />
                      <p className="relative z-10 group-hover:text-gray-800">
                        Start Free Trial
                      </p>
                    </button>
                  </div>
                  <div className="w-auto lg:hidden">
                    <a href="#">
                      <svg
                        className="navbar-burger text-gray-800"
                        width={51}
                        height={51}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width={56}
                          height={56}
                          rx={28}
                          fill="currentColor"
                        />
                        <path
                          d="M37 32H19M37 24H19"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
              <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
              <nav className="relative z-10 px-9 py-8 bg-white h-full">
                <div className="flex flex-wrap justify-between h-full">
                  <div className="w-full">
                    <div className="flex items-center justify-between -m-2">
                      <div className="w-auto p-2">
                        <a className="inline-block" href="#">
                          <img
                            src="gradia-assets/logos/gradia-name-black.svg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="w-auto p-2">
                        <a className="navbar-burger" href="#">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 18L18 6M6 6L18 18"
                              stroke="#111827"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center py-8 w-full">
                    <ul>
                      <li className="mb-12">
                        <a
                          className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                          href="#"
                        >
                          Features
                        </a>
                      </li>
                      <li className="mb-12">
                        <a
                          className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                          href="#"
                        >
                          Solutions
                        </a>
                      </li>
                      <li className="mb-12">
                        <a
                          className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                          href="#"
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                          href="#"
                        >
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-end w-full">
                    <div className="flex flex-wrap">
                      <div className="w-full">
                        <button className="p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-10">
                          <div className="py-2 px-5 rounded-10">
                            <p>Login</p>
                          </div>
                        </button>
                      </div>
                      <div className="w-full">
                        <button className="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
                          <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500" />
                          <div className="py-2 px-5 bg-white rounded-lg">
                            <p className="relative z-10">Start Free Trial</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </section>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between -m-6 pt-32 pb-40">
              <div className="w-full lg:w-5/12 xl:w-1/2 p-6">
                <p className="mb-5 font-heading text-gray-400 font-medium text-xl">
                  Launch your product quickly with the latest tech solutions.
                </p>
                <h1 className="mb-14 font-heading text-7xl md:text-9xl xl:text-11xl text-white font-bold">
                  Startup Software Development: Fast, Affordable, Excellent
                </h1>
                <div className="flex flex-wrap -m-3 mb-20">
                  <div className="w-full lg:w-auto p-3">
                    <button className="font-heading w-full px-6 py-4 text-base text-gray-900 bg-white hover:bg-gray-100 rounded-md">
                      Book a Call
                    </button>
                  </div>
                  <div className="w-full lg:w-auto p-3">
                    <button className="font-heading w-full px-6 py-4 text-base text-white bg-transparent border border-gray-500 hover:border-gray-600 rounded-md">
                      How it works
                    </button>
                  </div>
                </div>
                <div className="lg:max-w-md">
                  <div className="flex flex-wrap -m-3">
                    <div className="w-auto p-3">
                      <img
                        className="w-14 h-14"
                        src="gradia-assets/images/hero/avatar-man.png"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 p-3">
                      <p className="mb-4 text-gray-300 text-base">
                        “You made it so simple. My new team is so much faster
                        and easier to work with than my old site. I just choose
                        the page, make the change.”
                      </p>
                      <p className="font-heading text-white text-base">
                        Selay Demir, founder of Growthio
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-7/12 xl:w-1/2 p-6">
                <div className="max-w-max mx-auto">
                  <div className="flex flex-wrap justify-center -m-3 mb-3">
                    <div className="w-full p-3">
                      <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                        <div className="flex flex-wrap -m-2">
                          <div className="w-auto p-2">
                            <img
                              src="gradia-assets/images/hero/avatar-circle.png"
                              alt=""
                            />
                          </div>
                          <div className="w-auto p-2">
                            <p className="font-heading text-base text-gray-900">
                              Albert Flores
                            </p>
                            <p className="mb-2 text-sm text-gray-500">
                              Software Engineer
                            </p>
                            <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                              <svg
                                className="mr-1"
                                width={13}
                                height={13}
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                  stroke="#71717A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                  stroke="#71717A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <p className="text-xs text-gray-700 font-medium">
                                Wyoming, USA
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center max-w-max -m-3 mb-3">
                    <div className="w-full sm:w-1/2 p-3">
                      <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                        <div className="flex flex-wrap -m-2">
                          <div className="w-auto p-2">
                            <img
                              src="gradia-assets/images/hero/avatar-circle2.png"
                              alt=""
                            />
                          </div>
                          <div className="w-auto p-2">
                            <p className="font-heading text-base text-gray-900">
                              Darlene Robertson
                            </p>
                            <p className="mb-2 text-sm text-gray-500">
                              Software Tester
                            </p>
                            <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                              <svg
                                className="mr-1"
                                width={13}
                                height={13}
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                  stroke="#71717A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                  stroke="#71717A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <p className="text-xs text-gray-700 font-medium">
                                New York, USA
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 p-3">
                      <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                        <div className="flex flex-wrap -m-2">
                          <div className="w-auto p-2">
                            <img
                              src="gradia-assets/images/hero/avatar-circle3.png"
                              alt=""
                            />
                          </div>
                          <div className="w-auto p-2">
                            <p className="font-heading text-base text-gray-900">
                              Kristin Watson
                            </p>
                            <p className="mb-2 text-sm text-gray-500">
                              Project Manager
                            </p>
                            <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                              <svg
                                className="mr-1"
                                width={13}
                                height={13}
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                  stroke="#71717A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                  stroke="#71717A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <p className="text-xs text-gray-700 font-medium">
                                Pennsylvania, USA
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center max-w-max -m-3 mb-3 xl:-ml-20">
                    <div className="w-full sm:w-1/2 p-3">
                      <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                        <div className="flex flex-wrap -m-2">
                          <div className="w-auto p-2">
                            <img
                              src="gradia-assets/images/hero/avatar-circle4.png"
                              alt=""
                            />
                          </div>
                          <div className="w-auto p-2">
                            <p className="font-heading text-base text-gray-900">
                              Guy Hawkins
                            </p>
                            <p className="mb-2 text-sm text-gray-500">
                              Scrum Master
                            </p>
                            <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                              <svg
                                className="mr-1"
                                width={13}
                                height={13}
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                  stroke="#71717A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                  stroke="#71717A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <p className="text-xs text-gray-700 font-medium">
                                North Carolina, USA
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 p-3">
                      <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                        <div className="flex flex-wrap -m-2">
                          <div className="w-auto p-2">
                            <img
                              src="gradia-assets/images/hero/avatar-circle5.png"
                              alt=""
                            />
                          </div>
                          <div className="w-auto p-2">
                            <p className="font-heading text-base text-gray-900">
                              Annette Black
                            </p>
                            <p className="mb-2 text-sm text-gray-500">
                              Software Engineer
                            </p>
                            <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                              <svg
                                className="mr-1"
                                width={13}
                                height={13}
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                  stroke="#71717A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                  stroke="#71717A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <p className="text-xs text-gray-700 font-medium">
                                North Dakota, USA
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center max-w-max -m-3">
                    <div className="w-full sm:w-1/2 p-3">
                      <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                        <div className="flex flex-wrap -m-2">
                          <div className="w-auto p-2">
                            <img
                              src="gradia-assets/images/hero/avatar-circle.png"
                              alt=""
                            />
                          </div>
                          <div className="w-auto p-2">
                            <p className="font-heading text-base text-gray-900">
                              Robert Fox
                            </p>
                            <p className="mb-2 text-sm text-gray-500">
                              UI/UX Designer
                            </p>
                            <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                              <svg
                                className="mr-1"
                                width={13}
                                height={13}
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                  stroke="#71717A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                  stroke="#71717A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <p className="text-xs text-gray-700 font-medium">
                                Maine, USA
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 p-3">
                      <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                        <div className="flex flex-wrap -m-2">
                          <div className="w-auto p-2">
                            <img
                              src="gradia-assets/images/hero/avatar-circle2.png"
                              alt=""
                            />
                          </div>
                          <div className="w-auto p-2">
                            <p className="font-heading text-base text-gray-900">
                              Cody Fisher
                            </p>
                            <p className="mb-2 text-sm text-gray-500">
                              Ethical Hacker
                            </p>
                            <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                              <svg
                                className="mr-1"
                                width={13}
                                height={13}
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                  stroke="#71717A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                  stroke="#71717A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <p className="text-xs text-gray-700 font-medium">
                                Alaska, USA
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-28 pb-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <p className="mb-5 font-heading font-semibold text-xs text-gray-400 text-center uppercase tracking-px">
              The features that made us special
            </p>
            <h2 className="mb-20 font-heading font-semibold text-6xl sm:text-7xl text-gray-900 text-center">
              Here’s how it works
            </h2>
            <div className="flex flex-wrap -m-4">
              <div className="w-full md:w-1/3 p-4">
                <div className="md:max-w-xs mx-auto text-center">
                  <svg
                    className="mx-auto mb-8"
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 9.0712C26.527 7.34116 28.7611 6.25 31.25 6.25C35.8524 6.25 39.5833 9.98096 39.5833 14.5833C39.5833 19.1857 35.8524 22.9167 31.25 22.9167C28.7611 22.9167 26.527 21.8255 25 20.0955M31.25 43.75H6.25V41.6667C6.25 34.7631 11.8464 29.1667 18.75 29.1667C25.6536 29.1667 31.25 34.7631 31.25 41.6667V43.75ZM31.25 43.75H43.75V41.6667C43.75 34.7631 38.1536 29.1667 31.25 29.1667C28.9732 29.1667 26.8386 29.7754 25 30.8389M27.0833 14.5833C27.0833 19.1857 23.3524 22.9167 18.75 22.9167C14.1476 22.9167 10.4167 19.1857 10.4167 14.5833C10.4167 9.98096 14.1476 6.25 18.75 6.25C23.3524 6.25 27.0833 9.98096 27.0833 14.5833Z"
                      stroke="#18181B"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="font-heading font-medium text-xl text-gray-900">
                    We track the main problem, target audience and create a
                    roadmap with you.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="md:max-w-xs mx-auto text-center">
                  <svg
                    className="mx-auto mb-8"
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.33301 12.5C8.33301 10.1988 10.1985 8.33334 12.4997 8.33334H16.6663C18.9675 8.33334 20.833 10.1988 20.833 12.5V16.6667C20.833 18.9679 18.9675 20.8333 16.6663 20.8333H12.4997C10.1985 20.8333 8.33301 18.9679 8.33301 16.6667V12.5Z"
                      stroke="#18181B"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M29.1663 12.5C29.1663 10.1988 31.0318 8.33334 33.333 8.33334H37.4997C39.8009 8.33334 41.6663 10.1988 41.6663 12.5V16.6667C41.6663 18.9679 39.8009 20.8333 37.4997 20.8333H33.333C31.0318 20.8333 29.1663 18.9679 29.1663 16.6667V12.5Z"
                      stroke="#18181B"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.33301 33.3333C8.33301 31.0322 10.1985 29.1667 12.4997 29.1667H16.6663C18.9675 29.1667 20.833 31.0322 20.833 33.3333V37.5C20.833 39.8012 18.9675 41.6667 16.6663 41.6667H12.4997C10.1985 41.6667 8.33301 39.8012 8.33301 37.5V33.3333Z"
                      stroke="#18181B"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M29.1663 33.3333C29.1663 31.0322 31.0318 29.1667 33.333 29.1667H37.4997C39.8009 29.1667 41.6663 31.0322 41.6663 33.3333V37.5C41.6663 39.8012 39.8009 41.6667 37.4997 41.6667H33.333C31.0318 41.6667 29.1663 39.8012 29.1663 37.5V33.3333Z"
                      stroke="#18181B"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="font-heading font-medium text-xl text-gray-900">
                    We'll use the latest (and best) tech to solve the problem.
                    From AI tools to multi-platform mobile app builder.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="md:max-w-xs mx-auto text-center">
                  <svg
                    className="mx-auto mb-8"
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.33301 10.4167C8.33301 9.26608 9.26575 8.33334 10.4163 8.33334H39.583C40.7336 8.33334 41.6663 9.26608 41.6663 10.4167V14.5833C41.6663 15.7339 40.7336 16.6667 39.583 16.6667H10.4163C9.26575 16.6667 8.33301 15.7339 8.33301 14.5833V10.4167Z"
                      stroke="#18181B"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.33301 27.0833C8.33301 25.9327 9.26575 25 10.4163 25H22.9163C24.0669 25 24.9997 25.9327 24.9997 27.0833V39.5833C24.9997 40.7339 24.0669 41.6667 22.9163 41.6667H10.4163C9.26575 41.6667 8.33301 40.7339 8.33301 39.5833V27.0833Z"
                      stroke="#18181B"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M33.333 27.0833C33.333 25.9327 34.2657 25 35.4163 25H39.583C40.7336 25 41.6663 25.9327 41.6663 27.0833V39.5833C41.6663 40.7339 40.7336 41.6667 39.583 41.6667H35.4163C34.2657 41.6667 33.333 40.7339 33.333 39.5833V27.0833Z"
                      stroke="#18181B"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="font-heading font-medium text-xl text-gray-900">
                    We're experiences software engineers that learned to build
                    fast from hands-on experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-24 pb-48 overflow-hidden bg-black">
          <img
            className="absolute top-0 right-0"
            src="gradia-assets/elements/features/radial1.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 left-0"
            src="gradia-assets/elements/features/radial2.svg"
            alt=""
          />
          <div className="relative z-10 container mx-auto px-4">
            <div className="md:max-w-3xl md:mx-auto">
              <h2 className="mb-20 max-w-xl font-heading font-bold text-6xl sm:text-7xl text-white">
                What we provide.
              </h2>
              <div className="flex flex-wrap -m-5">
                <div className="w-full md:w-1/2 md:relative md:top-12 p-5">
                  <div className="h-full p-9 transform hover:-translate-y-3 bg-gradient-orange2 rounded-2xl transition ease-out duration-1000">
                    <p className="mb-4 font-heading text-base text-white text-opacity-70">
                      Advance reports
                    </p>
                    <h3 className="mb-20 font-heading font-bold text-white text-3xl">
                      Daily analytics help you to understand business growth.
                    </h3>
                    <div>
                      <div className="pr-7">
                        <div className="relative z-10 p-5 text-center bg-white rounded-10 shadow-3xl">
                          <p className="mb-3 text-3xl font-bold text-black">
                            162.9k
                          </p>
                          <p className="mb-3 text-xs font-bold text-black">
                            Last 7 Days Website Visits
                          </p>
                          <p className="text-xs text-gray-500">
                            10% Increase from Last Week
                          </p>
                        </div>
                      </div>
                      <div className="-mt-14 pl-7">
                        <div className="p-5 text-center bg-white opacity-30 rounded-10 shadow-3xl">
                          <p className="mb-3 text-3xl font-bold text-black">
                            162.9k
                          </p>
                          <p className="mb-3 text-xs font-bold text-black">
                            Last 7 Days Website Visits
                          </p>
                          <p className="text-xs text-gray-500">
                            10% Increase from Last Week
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-5">
                  <div className="flex flex-col justify-between h-full transform hover:-translate-y-3 overflow-hidden bg-gradient-blue rounded-2xl transition ease-out duration-1000">
                    <div className="p-9 pb-0">
                      <p className="mb-4 font-heading text-base text-white text-opacity-70">
                        Fast prototyping
                      </p>
                      <h3 className="mb-5 font-heading font-bold text-white text-3xl">
                        Get an MVP roadmap in a weekend.
                      </h3>
                    </div>
                    <img
                      className="mx-auto w-full"
                      src="gradia-assets/images/features/headphones.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:relative md:top-12 p-5">
                  <div className="h-full p-9 transform hover:-translate-y-3 bg-gradient-purple rounded-2xl transition ease-out duration-1000">
                    <p className="mb-4 font-heading text-base text-white text-opacity-70">
                      Fastest growth
                    </p>
                    <h3 className="mb-20 font-heading font-bold text-white text-3xl">
                      Track your results. Share with anyone without taking the
                      hassle.
                    </h3>
                    <img
                      className="mx-auto"
                      src="gradia-assets/images/features/card.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-5">
                  <div className="h-full p-9 pb-0 bg-gradient-violet2 transform hover:-translate-y-3 rounded-2xl transition ease-out duration-1000">
                    <p className="mb-4 font-heading text-base text-white text-opacity-70">
                      AI Powered
                    </p>
                    <h3 className="mb-20 font-heading font-bold text-white text-3xl">
                      We'll use AI to build fast with experts supervision.&nbsp;
                    </h3>
                    <img
                      className="mx-auto"
                      src="gradia-assets/images/features/comments.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
