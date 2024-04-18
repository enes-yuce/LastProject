// App.jsx

import React, { useState } from "react";
import "./App.css";
import "./output.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import HomeDatas from "./components/HomeDatas";
import FooterDatas from "./components/FooterDatas";
import ProjectDatas from "./components/ProjectDatas";
import ProfileDatas from "./components/ProfileDatas";

function App() {
  const [language, setLanguage] = useState("turkish");
  const [darkMode, setDarkMode] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language == "turkish" ? "english" : "turkish");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="app">
      <Home
        homeData={HomeDatas[language]}
        language={language}
        toggleLanguage={toggleLanguage}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Skills darkMode={darkMode} />
      <Profile
        profileData={ProfileDatas[language]}
        language={language}
        toggleLanguage={toggleLanguage}
        darkMode={darkMode}
      />
      <Projects
        projectsData={ProjectDatas[language]}
        language={language}
        toggleLanguage={toggleLanguage}
        darkMode={darkMode}
      />
      <Footer
        FooterData={FooterDatas[language]}
        language={language}
        toggleLanguage={toggleLanguage}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
