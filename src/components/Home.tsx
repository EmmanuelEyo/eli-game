import React, { useState } from "react";
import videoBg from "../assets/videoBg.mp4";
import dability1 from "../assets/DABILITY-logo.png";
import dability2 from "../assets/DABILITY.png";
import steamlogs from "../assets/steam_logo.png";
import game_char from "../assets/game_char-remove.png";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../components/image.css";
import { SliderData } from "./SliderData";
import company_name from "../assets/UTI_Games-LDSP-full.png";

type Provider = {
  slides: Array<any>;
};

const Home = ({ slides }: Provider) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div className="bg-[#0a192f] w-full h-screen">
      <div className="w-full h-[100vh]">
        <video
          className="w-full h-full object-cover"
          src={videoBg}
          autoPlay
          loop
          muted
        ></video>
        <div>
          <img
            src={dability2}
            alt="game_logos"
            className="absolute h-24 w-[250px] lg:w-[430px] top-80 left-[55px] lg:left-[40rem]"
          />
          <img
            src={dability1}
            alt="game_logos2"
            className="absolute top-[380px] w-[70px] lg:w-[100px] h-14 left-[293px] lg:left-[66rem]"
          />
        </div>
        <div className="absolute top-[430px] tracking-tighter left-[100px] lg:left-[41rem] lg:text-5xl text-2xl text-white uppercase">
          <h1>play for free now</h1>
        </div>
        <button
          type="button"
          className="text-white absolute bg-[#0a192f] focus:ring-4 focus:outline-none font-light text-lg px-5 py-2 top-[500px] left-[70px] lg:left-[750px] rounded-xl text-center inline-flex items-center mr-2 mb-2 uppercase"
        >
          <img
            src={steamlogs}
            alt="steam_logo"
            className="w-24 h-14 -ml-8 -mr-3"
          />
          get it on <p className="ml-2 text-2xl font-semibold">steam</p>
        </button>
      </div>
      <div className="bg-slate-800 text-gray-300 px-5 py-24 flex justify-center items-center flex-wrap mx-auto">
        <div className="h-full lg:w-[44%]">
          <div className="relative">
            <h1 className="uppercase tracking-widest lg:text-6xl text-xl">
              choose your <span>characters</span>
            </h1>
            <hr className="my-6 lg:w-80 lg:mr-[57rem] border-gray-600 dark:border-gray-700 sm:mx-auto lg:my-8" />
            <h2 className="mb-10 text-lg">
              get ready to{" "}
              <span className="text-2xl font-semibold capitalize">fight</span>{" "}
              with your favorite characters
            </h2>
            <a href="/characters">
              <button className="relative uppercase inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-slate-600 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  see characters
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="h-full">
          <div className="relative">
            <img src={game_char} className="h-[35rem]" alt="game-char" />
          </div>
        </div>
      </div>
      <div className="bg-slate-800">
        <h1 className="uppercase text-6xl text-white flex justify-center">
          classic multiplayer maps
        </h1>
        <p className="flex justify-center text-white text-xl mt-3">
          <span className="mr-1 capitalize font-bold">fight</span>your way
          through these different maps
        </p>
        <div className="h-screen relative flex justify-center items-center">
          <span className="flex">
            <FaArrowAltCircleLeft
              onClick={prevSlide}
              style={{
                position: "absolute",
                top: "50%",
                fontSize: "3rem",
                left: "32px",
                color: "#000",
                cursor: "pointer",
                zIndex: "10",
                userSelect: "none",
              }}
            />
            <FaArrowAltCircleRight
              onClick={nextSlide}
              style={{
                position: "absolute",
                top: "50%",
                fontSize: "3rem",
                right: "32px",
                color: "#000",
                cursor: "pointer",
                zIndex: "10",
                userSelect: "none",
              }}
            />
          </span>
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img
                    className=""
                    src={slide.image}
                    alt="map_image"
                    style={{
                      width: "1000px",
                      height: "500px",
                      borderRadius: "10px",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-slate-700 flex justify-center item-center py-20">
        <div className="max-w-xs bg-white border mr-5 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <video className="rounded-t-lg" src={videoBg} autoPlay loop muted />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Gameplay
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white border mr-5 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <video className="rounded-t-lg" src={videoBg} autoPlay loop muted />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Stunning Graphics
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white border mr-5 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <video className="rounded-t-lg" src={videoBg} autoPlay loop muted />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Eyes capturing Visuals
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-700">
        <div>
          <img src={game_char} className="h-[25rem] ml-32" alt="game-char" />
          {/* <h1>hello</h1> */}
        </div>
        <div className="w-[35rem] h-[15rem] ml-auto mr-24 p-4 mt-20 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Download on the go
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            Get ready to compete with millions of players worldwide in this
            intriguing game. Download the game today.
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-9 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <img
                src={steamlogs}
                alt="steam_logo"
                className="w-22 h-12 -ml-8 -mr-3"
              />
              <div className="text-left">
                <div className="mb-1 text-sm">Get in on</div>
                <div className="-mt-1 font-sans text-md font-bold">Steam</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div>
        <footer className="p-4 bg-white dark:bg-gray-900 shadow">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 ml-6 sm:mb-0">
              <img
                src={company_name}
                className="h-28 mr-3"
                alt="company-name"
              />
              {/* <span className="text-2xl font-semibold tracking-wider self-center dark:text-white whitespace-nowrap">
              UTIGAMES
            </span> */}
            </a>
            <ul className="flex flex-wrap items-center text-gray-500 dark:text-gray-400 text-sm mb-6 sm:mb-0">
              <li>
                <a className="hover:underline mr-4 md:mr-6" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:underline mr-4 md:mr-6" href="#">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a className="hover:underline mr-4 md:mr-6" href="#">
                  User Agreement
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-600 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a
              className="hover:underline mr-2
          "
              href="#"
            >
              UTIGAMES
            </a>
            Inc.All Right Resereved.
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Home;
