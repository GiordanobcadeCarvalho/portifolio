import React from "react";
import {
  AppBar,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

interface NavBarProps {
  aboutRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
}

const NavBar = ({ aboutRef, skillsRef, projectsRef }: NavBarProps) => {
  const handleScrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    background: theme.palette.primary.dark,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20%",
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    transition: "0.2s ease",

    "&:hover": {
      color: `${theme.palette.success.light}`,
    },
  }));

  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <MenuItem onClick={() => handleScrollToSection(aboutRef)}>
          <StyledTypography variant="h6" textTransform="uppercase">
            About Me
          </StyledTypography>
        </MenuItem>
        <MenuItem onClick={() => handleScrollToSection(skillsRef)}>
          <StyledTypography variant="h6" textTransform="uppercase">
            Skills
          </StyledTypography>
        </MenuItem>
        <MenuItem onClick={() => handleScrollToSection(projectsRef)}>
          <StyledTypography variant="h6" textTransform="uppercase">
            Projects
          </StyledTypography>
        </MenuItem>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
