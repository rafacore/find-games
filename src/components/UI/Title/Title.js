import React, { useState } from "react";
import PropTypes from "prop-types";
import { classes } from "./Title.module.css";

const Title = ({ type, title, subtitle, ...props }) => {
  if (type === "h1") {
    return (
      <div>
        <h1 className={props.className}>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    );
  }
  if (type === "h2") {
    return <h2 className={props.className}>{title}</h2>;
  }

  return <h1 className={props.className}>{title}</h1>;
};

Title.defaultProps = {
  type: "h1",
  className: null,
  right: null,
  center: null,
};

Title.propTypes = {
  type: PropTypes.oneOf(["h1", "h2"]),
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  right: PropTypes.bool,
  center: PropTypes.bool,
};

export default Title;
