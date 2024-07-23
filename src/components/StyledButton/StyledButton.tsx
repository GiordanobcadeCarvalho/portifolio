import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
}

const StyledButton = ({ children }: StyledButtonProps) => {
  const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.warning.light}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",

    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
};

export default StyledButton;
