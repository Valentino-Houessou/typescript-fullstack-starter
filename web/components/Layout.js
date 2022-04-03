import React from "react";
import { makeStyles } from "@mui/styles";
import Box from '@mui/material/Box';


const useStyles = makeStyles(
  (theme) => {

    return {
      root: {
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        //padding: "8px 8px 8px 15px",
        height: "100%",
        width: "100%",
        //boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
      },
    }


  },
  {
    name: "Layout",
  }
);
const Layout = ({ children}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>

        {children}
      </Box>
  );
};

export default Layout;
