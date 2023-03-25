import React, { useState } from "react";
import Dark from "../assets/dark_image.png";
import back from "../assets/back.png";
import "../components/characters.css";
import { CharacterData } from "./CharacterData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../components/image.css";
import company_name from "../assets/UTI_Games-LDSP-full.png";

type Provide = {
  slides: Array<any>;
};

const Characters = ({ slides }: Provide) => {
  const [active, setActive] = useState(0);

  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const newSlide = () => {
    setActive(active === length - 1 ? 0 : active + 1);
  };

  const oldSlide = () => {
    setActive(active === 0 ? length - 1 : active - 1);
  };

  const filterName = (e: any) => {
    const search = e.target.value.toLowerCase();
    const filteredChar = CharacterData.find((names) =>
      names.text.toLowerCase().includes(search)
    );
    const indexChar = CharacterData.findIndex(
      (character) => character.id === filteredChar?.id
    );

    setActive(indexChar);
  };

  return (
    <>
      <div>
        <img
          src={Dark}
          style={{ width: "80rem", height: "40rem" }}
          alt="dark_image"
        />
        <div className="absolute top-80 left-[10rem]">
          <h1
            style={{
              WebkitTextStroke: "1px #fff",
              backgroundImage: `url(${back})`,
              WebkitBackgroundClip: "text",
              backgroundPosition: "0 0",
              animation: "back 20s linear infinite",
            }}
            className="uppercase text-transparent text-7xl"
          >
            Your favorite characters
          </h1>
        </div>
        <div className="relative bg-gray-800 h-[35rem] flex">
          <span className="flex">
            <FaArrowAltCircleLeft
              onClick={oldSlide}
              style={{
                position: "absolute",
                fontSize: "3rem",
                zIndex: "10",
                color: "#000",
                left: "60px",
                top: "44%",
                cursor: "pointer",
              }}
            />
            <FaArrowAltCircleRight
              onClick={newSlide}
              style={{
                position: "absolute",
                fontSize: "3rem",
                zIndex: "10",
                color: "#000",
                right: "28rem",
                top: "44%",
                cursor: "pointer",
              }}
            />
          </span>
          {CharacterData.map((slide, index) => {
            return (
              <div
                className={index === active ? "slide active" : "slide"}
                key={index}
              >
                {index === active && (
                  <>
                    <img
                      src={slide.image}
                      alt="character_image"
                      style={{ width: "600px" }}
                      className="ml-[8.7rem] mt-24"
                    />
                    <h3 className="ml-96 absolute mt-6 text-3xl" key={slide.id}>
                      {slide.text}
                    </h3>
                  </>
                )}
              </div>
            );
          })}
          <div className="relative ml-56 mt-64">
            <input
              onChange={(e) => filterName(e)}
              className="input-field"
              type="text"
              placeholder="Search for characters"
              autoComplete="off"
              // className="h-10 ml-56 mt-64 w-72 outline-none"
              style={{
                width: "80%",
                outline: "0",
                border: "0",
                borderBottom: "2px solid #999999",
                padding: "10px 0",
                background: "transparent",
                color: "#fff",
                fontSize: "2em",
                transition: "0.3s ease",
              }}
            />
            <label
              className="input-label"
              style={{
                display: "block",
                position: "absolute",
                color: "#999999",
                textTransform: "uppercase",
                transition: "0.3s ease",
                fontSize: "1em",
              }}
              htmlFor="name"
            >
              Search for characters
            </label>
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
    </>
  );
};

export default Characters;
