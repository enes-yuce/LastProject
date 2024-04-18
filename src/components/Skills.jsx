import React, { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import JS from "../images/js.png";
import REACT from "../images/react.png";
import REDUX from "../images/redux.png";
import NODE from "../images/node.png";
import VSCODE from "../images/vscode.png";
import FIGMA from "../images/figma.png";

const itemData = [
  { img: JS, title: "JavaScript" },
  { img: NODE, title: "React" },
  { img: REACT, title: "Redux" },
  { img: VSCODE, title: "Node.js" },
  { img: REDUX, title: "VSCode" },
  { img: FIGMA, title: "Figma" },
];

const Skills = ({ darkMode }) => {
  const StyledPaper = styled(Paper)({
    display: "flex",
    alignItems: "center",
  });

  const SkillTitle = styled("div")({
    marginLeft: "18px",
  });

  return (
    <div className={darkMode ? "skills-dark" : "skills"}>
      <div
        style={{
          height: "430px",
          padding: "84px",
          display: "flex",
        }}
      >
        <div className="skills-font">Skills</div>
        <Box style={{ marginLeft: "230px" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {itemData.map((item, index) => (
              <Grid item xs={6} key={index}>
                <StyledPaper>
                  <img src={item.img} alt={item.title} loading="lazy" />
                  <SkillTitle>{item.title}</SkillTitle>
                </StyledPaper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Skills;
