import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Unstable_Grid2";
import PermanentDrawerLeft from "./drawer.js"
import Types from "./starter.js"


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default class Home extends Component {
  render() {
    return (
      <PermanentDrawerLeft />
    );
  }
}
