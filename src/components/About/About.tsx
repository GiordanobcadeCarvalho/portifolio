import React, { forwardRef } from "react";
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import theme from "../../theme";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
}

const StyledAbout = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  background: theme.palette.info.dark,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "24px",
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.success.light}`,
  borderRadius: "8px",
  padding: "16px",
  backgroundColor: theme.palette.primary.dark,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.1s ease",
  cursor: "default",

  "&:hover": {
    backgroundColor: theme.palette.info.dark,
  },
}));

const skills = [
  "Firebase",
  "Material-UI",
  "Playwright Tests",
  "Styled-components",
  "Contentstack",
  "Cypress",
  "Express",
  "GatsbyJS",
  "GraphQL",
  "Next.js",
  "Node.js",
  "React",
  "Redux.js",
  "TypeScript",
  "Webpack",
];

const About = forwardRef<HTMLDivElement, AboutProps>(
  ({ aboutRef, skillsRef }: AboutProps) => {
    return (
      <StyledAbout ref={aboutRef}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            color="primary.contrastText"
            fontWeight="600"
            sx={{ mb: 4, mt: 4, textAlign: "center", cursor: "default" }}
          >
            About Me
          </Typography>
          <Grid
            padding="32px"
            container
            alignItems="flex-start"
            justifyContent="center"
            gap={4}
          >
            <StyledGridItem item xs={12} sm={4}>
              <Typography variant="h5" gutterBottom fontWeight="600">
                Experience
              </Typography>
              <Typography variant="body1" fontWeight="600">
                2+ Years Experience in Web Development
              </Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12} sm={4}>
              <Typography variant="h5" gutterBottom fontWeight="600">
                Education
              </Typography>
              <Typography variant="body1" fontWeight="600">
                Bachelor's Degree in Computer Science
              </Typography>
            </StyledGridItem>
          </Grid>
          <Box padding="32px">
            <Typography
              variant="h6"
              textAlign="center"
              fontWeight="600"
              sx={{ cursor: "default" }}
            >
              Experienced Front-End Developer with a focus on enhancing code
              quality, creating accurate UI designs, and optimizing web
              performance. Skilled in using modern tools and technologies to
              build dependable applications. Enjoy working closely with
              designers and cross-functional teams to improve user experiences.
              Eager to contribute my skills and collaborate with a talented
              team.
            </Typography>
          </Box>
          <Box
            component="hr"
            sx={{
              width: "100%",
              border: 0,
              borderTop: `1px solid ${theme.palette.success.light}`,
            }}
          />
          <Box padding="32px" ref={skillsRef}>
            <Typography
              variant="h4"
              color="primary.contrastText"
              fontWeight="600"
              sx={{ mb: 4, textAlign: "center", cursor: "default" }}
            >
              Skills
            </Typography>
            <Grid
              container
              spacing={2}
              alignItems="flex-start"
              justifyContent="center"
              gap={2}
              pb="32px"
            >
              {skills.map((skill) => (
                <StyledGridItem item key={skill} xs={12} sm={4} md={3}>
                  <Typography variant="body1" fontWeight="600">
                    {skill}
                  </Typography>
                </StyledGridItem>
              ))}
            </Grid>
          </Box>
        </Container>
      </StyledAbout>
    );
  }
);

export default About;
