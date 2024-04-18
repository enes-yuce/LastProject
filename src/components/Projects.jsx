import * as React from "react";
import İMAGE from "../images/redux-movie-list.png";
import İMAGEE from "../images/shopping-card.png";
import PİZZA from "../images/pizza.png";

export default function Projects({
  darkMode,
  language,
  toggleLanguage,
  projectsData,
}) {
  return (
    <div className={darkMode ? "projects-dark" : "projects"}>
      <div className="projectsHeader">
        <h2
          className="projectsTypography"
          style={{
            height: "430px",
            padding: "84px",
            display: "flex",
          }}
        >
          {" "}
          {projectsData && projectsData[3].header}
        </h2>
      </div>
      <div className="px-2 py-20 w-full flex justify-center">
        <div
          className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg"
          style={{
            width: "960px",
            height: "360px",
            top: "1992px",
            left: "240px",
            gap: "16px",
            borderRadius: "12px 0px 0px 0px",
            opacity: "0px",
          }}
        >
          <div className="lg:w-1/2">
            <div
              className="lg:h-full  border"
              style={{
                backgroundImage: `url(${İMAGE})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div
            style={{ background: darkMode ? "#2b2727" : "#ffffff" }}
            className=" py-8  max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg "
          >
            <h2 className="text-3xl  text-indigo-700 font-bold">
              {projectsData && projectsData[0].title}
            </h2>
            <p className="mt-4 text-gray-600">
              {projectsData && projectsData[0].description}
            </p>
            <div className="mt-8">
              <div class="flex flex-row">
                <div class="basis-1/6">
                  <a
                    href="#"
                    className="bg-[#4731D3] text-gray-100 px-5 py-3 font-semibold rounded-full"
                  >
                    react{" "}
                  </a>
                </div>
                <div class="basis-1/5">
                  <a
                    href="#"
                    className="bg-[#4731D3] text-gray-100 px-5 py-3 font-semibold rounded-full"
                  >
                    redux
                  </a>
                </div>
                <div class="basis-1/5">
                  <a
                    href="#"
                    className="bg-[#4731D3] text-gray-100 px-5 py-3 font-semibold rounded-full"
                  >
                    vercel
                  </a>
                </div>
                <div class="basis-1/5">
                  <a
                    href="#"
                    className="bg-[#4731D3] text-gray-100 px-5 py-3 font-semibold rounded-full"
                  >
                    router{" "}
                  </a>
                </div>
                <div class="basis-1/4">
                  <a
                    href="#"
                    className="bg-[#4731D3] text-gray-100 px-5 py-3 font-semibold rounded-full"
                  >
                    tailwindcss{" "}
                  </a>
                </div>
              </div>
              <div class=" mt-8 grid grid-cols-6 ">
                <div>
                  <a
                    href="https://film-project-eight.vercel.app/movies"
                    class=" text-neutral-800 underline "
                  >
                    {projectsData && projectsData[0].link}
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/enes-yuce/Book-Store--S11-G1-T1-.git"
                    class="text-neutral-800 underline "
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 py-20 w-full flex justify-center">
        <div
          className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg mt-8"
          style={{
            width: "960px",
            height: "360px",
            top: "2388px",
            left: "240px",
            gap: "16px",
            borderRadius: "12px 0px 0px 0px",
            opacity: "0px",
          }}
        >
          <div className="lg:w-1/2">
            <div
              className="lg:h-full  border"
              style={{
                backgroundImage: `url(${İMAGEE})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div
            style={{ background: darkMode ? "#2b2727" : "#ffffff" }}
            className="py-8  max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg"
          >
            <h2 className="text-3xl  text-indigo-700 font-bold">
              {projectsData && projectsData[1].title}
            </h2>

            <p className="mt-2 text-gray-600">
              {projectsData && projectsData[1].description}
            </p>
            <div className="mt-8">
              <div class="flex flex-row">
                <div class="basis-1/5">
                  <a
                    href="#"
                    className="bg-[#4731D3] text-gray-100 px-5 py-3 font-semibold rounded-full"
                  >
                    react
                  </a>
                </div>
                <div class="basis-1/5">
                  <a
                    href="#"
                    className="bg-[#4731D3] text-gray-100 px-5 py-3 font-semibold rounded-full"
                  >
                    styled_components
                  </a>
                </div>
                <div class="basis-1/5">
                  <a
                    href="#"
                    className="bg-[#4731D3] text-gray-100 px-5 py-3 font-semibold rounded-full"
                  >
                    router{" "}
                  </a>
                </div>
              </div>
              <div class=" mt-8 grid grid-cols-6 ">
                <div>
                  <a
                    href="https://shopping-cart-six-xi.vercel.app
                    "
                    class=" text-neutral-800 underline "
                  >
                    {projectsData && projectsData[0].link}
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/enes-yuce/fsweb-s10g3-redux-watchlist-solution.git#"
                    class=" text-neutral-800 underline "
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 py-20 w-full flex justify-center">
        <div
          className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg mt-8"
          style={{
            width: "960px",
            height: "360px",
            top: "2388px",
            left: "240px",
            gap: "16px",
            borderRadius: "12px 0px 0px 0px",
            opacity: "0px",
          }}
        >
          <div className="lg:w-1/2">
            <div
              className="lg:h-full  border"
              style={{
                backgroundImage: `url(${PİZZA})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div
            style={{ background: darkMode ? "#2b2727" : "#ffffff" }}
            className="py-8  max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg"
          >
            <h2 className="text-3xl  text-indigo-700 font-bold">
              {projectsData && projectsData[2].title}
            </h2>

            <p className="mt-2 text-gray-600">
              {projectsData && projectsData[2].description}
            </p>
            <div className="mt-8">
              <div class="flex flex-row">
                <div class="basis-1/5">
                  <a
                    href="#"
                    className="bg-[#4731D3] text-gray-100 px-5 py-3 font-semibold rounded-full"
                  >
                    react
                  </a>
                </div>
                <div class="basis-1/5">
                  <a
                    href="#"
                    className="bg-[#4731D3] text-gray-100 px-5 py-3 font-semibold rounded-full"
                  >
                    axios
                  </a>
                </div>
                <div class="basis-1/5">
                  <a
                    href="#"
                    className="bg-[#4731D3] text-gray-100 px-5 py-3 font-semibold rounded-full"
                  >
                    router
                  </a>
                </div>
                <div class="basis-1/5">
                  <a
                    href="#"
                    className="bg-[#4731D3] text-gray-100 px-5 py-3 font-semibold rounded-full"
                  >
                    netlify{" "}
                  </a>
                </div>
              </div>
              <div class=" mt-8 grid grid-cols-6 ">
                <div>
                  <a
                    href="https://symphonious-tartufo-9cc8db.netlify.app/"
                    class=" text-neutral-800 underline "
                  >
                    {projectsData && projectsData[0].link}
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/enes-yuce/fsweb-s7-challenge-pizza.git"
                    class=" text-neutral-800 underline "
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
