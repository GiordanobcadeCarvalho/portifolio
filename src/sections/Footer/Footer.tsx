import { Box, Link, styled } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const StyledFooter = styled("footer")(({ theme }) => ({
  display: "flex",
  height: "100px",
  background: theme.palette.primary.dark,
  alignItems: "center",
  justifyContent: "center",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  transition: "0.2s ease",

  "&:hover": {
    color: theme.palette.success.light,
  },
}));

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Box display="flex" gap={24}>
          <StyledLink
            color="primary.contrastText"
            href="https://github.com/GiordanobcadeCarvalho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{width: "32px", height: "32px"}}/>
          </StyledLink>
          <StyledLink
            href="https://www.linkedin.com/in/giordano-bruno-carreiro-alencar-de-carvalho-a6094486/"
            color="primary.contrastText"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{width: "32px", height: "32px"}}/>
          </StyledLink>
          <StyledLink
            color="primary.contrastText"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailOutlinedIcon sx={{width: "32px", height: "32px"}}/>
          </StyledLink>
        </Box>
      </StyledFooter>
    </>
  );
};

export default Footer;
