import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    color: "#333",
    boxShadow: "none",
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar className="Toolbar">
        <Typography variant="h4">Recipe App</Typography>
        <Typography variant="h5" component="nav">
          <Link to="/">Home</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
