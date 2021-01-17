import React from "react";

import PropTypes from "prop-types";
import Dropdown from "../UI/Dropdown/Dropdown";
import classes from "./Filters.module.css";

const platform = [
  {
    value: "platform",
    label: "pc",
  },
  {
    value: "platform",
    label: "browser",
  },
];

const cat = [
  {
    value: "platform",
    label: "mmorpg",
  },
  {
    value: "category",
    label: "shooter",
  },
  {
    value: "category",
    label: "strategy",
  },
];

const Filters = ({ handleChangePlat, handleChangeCat }) => {
  return (
    <div className={classes.filtersBar}>
      <Dropdown
        options={platform}
        onChange={handleChangePlat}
        placeholder="platform"
      />
      <Dropdown
        options={cat}
        onChange={handleChangeCat}
        placeholder="categories"
      />
      <Dropdown placeholder="Sort by" />
    </div>
  );
};

Filters.propTypes = {};

export default Filters;
