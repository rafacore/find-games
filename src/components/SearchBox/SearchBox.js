import React from "react";
import PropTypes from "prop-types";
import classes from "./SearchBox.module.css";

const SearchBox = props => {
  return (
    <>
      {" "}
      <input
        className={classes.searchBar}
        type="text"
        value={props.searchText}
        onChange={props.handleChange}
      ></input>
    </>
  );
};

SearchBox.propTypes = {
  searchTerm: PropTypes.string,
};

export default SearchBox;
