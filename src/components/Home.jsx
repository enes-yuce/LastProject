import Switch from "react-switch";
import PROFILE from "../images/enes.png";

const handleButtonClick = (index) => {
  if (index === 0) {
    window.location.href = "https://github.com/enes-yuce";
  } else if (index === 1) {
    window.location.href = "https://www.linkedin.com/in/enes-y%C3%BCce-701532177/";
  }
};

const Home = ({
  darkMode,
  toggleDarkMode,
  language,
  toggleLanguage,
  homeData,
}) => {
  return (
    <>
      <div
        className={darkMode ? "gradient-container-dark" : "gradient-container"}
      >
        <div className="grid grid-cols-9">
          <div className="col-start-6">
            <text onClick={toggleLanguage}>
              {language === "turkish" ? "SWITCH ENG" : "TÜRKÇE'YE GEÇ"}
            </text>
          </div>
          <div className="col-start-7">
            {" "}
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              inputProps={{ "aria-label": "toggle dark mode" }}
            />
          </div>{" "}
          <div className="col-start-8" style={{ color: "#4731D3" }}>
            <b> {darkMode ? "Light Mode" : " Dark Mode"}</b>
          </div>
        </div>

        <header className="header">
          <div className="header-font-style">{homeData && homeData.header}</div>
        </header>
        <div class="grid grid-cols-5 ">
          <div class=" col-span-2 mt-6">
            <span
              style={{
                fontSize: "54px",
                fontFamily: "Inter",
                fontWeight: "700px",
                lineHeight: "59.4px",
                textAlign: "left",
              }}
            >
              {homeData && homeData.content}{" "}
            </span>

            <div class="col-span-2 ">
              <div
                style={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "400px",
                  lineHeight: "29.5px",
                  textAlign: "left",
                  marginLeft: "125px"
                }}
              >
                {homeData && homeData.leftContent}
              </div>
            </div>
            <div
              class="col-start-2 mt-5 "
              style={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "400px",
                lineHeight: "29.5px",
                textAlign: "left",
              }}
            >
              <div className="container">
                {homeData.buttons.map((buttonText, index) => (
                  <button
                    key={index}
                    style={{
                      backgroundColor: darkMode ? "black" : "white",
                      color: darkMode ? "white" : "black",
                      marginRight: "10px",
                      marginBottom: "4px",
                      padding: "8px",
                      border: "none",
                      marginLeft: "125px"
                    }}
                    onClick={() => handleButtonClick(index)}
                  >
                    <div
                    style={{display: "flex"}} className="row" key={index}>
                      <div className="col-2">{homeData.icons[index]}</div>
                      <div className="col-10">{buttonText}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div class="col-start-4">
            {" "}
            <img src={`${PROFILE}`} alt="foto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
