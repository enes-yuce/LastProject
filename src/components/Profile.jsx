import React from "react";
import PROFILEE from "../images/eness.png";

export default function Profile({
  darkMode,
  language,
  toggleLanguage,
  profileData,
}) {
  return (
    <div className={darkMode ? "profile-dark" : "profile"}>
      <div
        style={{
          padding: "84px",
          display: "flex",
        }}
        className="profile-font"
      >
        Profile
      </div>
      <div class="grid grid-rows-3 grid-flow-col gap-4 ml-60">
        <div class=" row-span-2">
          <div class="start-0">{profileData && profileData.title}</div>

          <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
            <div class="grid grid-flow-row auto-rows-max">
              <div>{profileData && profileData.basicInformation.birthDate}</div>
              <div>{profileData && profileData.basicInformation.city}</div>
              <div>{profileData && profileData.basicInformation.education}</div>
              <div>{profileData && profileData.basicInformation.preferred}</div>
              <div>
                {profileData && profileData.basicInformation.preferredRole}
              </div>
            </div>
            <div class="col-span-2">
              <div class="grid grid-flow-row auto-rows-max">
                <div>1995</div>
                <div>Antalya</div>
                <div>Süleyman Demirel Ünv.</div>
                <div>Frontend,UI</div>
              </div>
            </div>
          </div>
        </div>
        <div class=" row-span-2"
        style={{}}>
          {" "}
          <img src={`${PROFILEE}`} alt="foto" />
        </div>
        <div class=" row-span-2">
          <div class="grid  grid-rows-3  ">
            <div>{profileData && profileData.header}</div>
            <div> {profileData && profileData.aboutMe.section1}</div>
            <div>{profileData && profileData.aboutMe.section2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
