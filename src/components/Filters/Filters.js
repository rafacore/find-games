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

export function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#86c232",
      primary: "green",
    },
  };
}

const Filters = ({ handleChangePlat, handleChangeCat }) => {
  return (
    <div className={classes.filtersBar}>
      <Dropdown
        options={platform}
        onChange={handleChangePlat}
        placeholder="platform"
        theme={customTheme}
      />
      <Dropdown
        options={cat}
        onChange={handleChangeCat}
        placeholder="categories"
        theme={customTheme}
      />
      <Dropdown
        placeholder="Sort by"
        //  onChange={handleChangeSort}
        theme={customTheme}
      />
    </div>
  );
};

Filters.propTypes = {};

export default Filters;
