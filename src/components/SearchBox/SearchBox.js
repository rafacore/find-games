import React from "react";
import PropTypes from "prop-types";
import classes from "./SearchBox.module.css";

const SearchBox = (props, placeholderText) => {
  const { placeholder } = props;
  return (
    <>
      {" "}
      <input
        className={classes.searchBar}
        type="text"
        value={props.searchText}
        onChange={props.handleChange}
        placeholder={placeholder}
      ></input>
    </>
  );
};

SearchBox.propTypes = {
  searchTerm: PropTypes.string,
};

export default SearchBox;
