import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const MyButton = () => {
  // const CustomButton = styled(Button)(({ theme }) => ({
  //   padding: "5px 25px",
  //   color: theme.palette.otherColor.main,
  //   border: "1px solid lightblue",
  //   borderRadius: "0",
  //   "&:hover": {
  //     color: "white",
  //     backgroundColor: theme.palette.primary.light,
  //     transition: "0.7s",
  //   },
  // }));
  const CustomButton = styled(Button)({
    backgroundColor: "blue",
    padding: "5px 25px",
    color: "white",
    border: "1px solid lightblue",
    borderRadius: "0",
    "&:hover": {
      backgroundColor: "lightblue",
      transition: "0.7s",
    },
  });
  return <CustomButton>Click</CustomButton>;
};

export default MyButton;
