import React from "react";
import classes from "./Loading.module.css";

const Loading = () => (
  <div className={classes.LoadingContainer}>
    <div className={classes.Loading}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loading;
