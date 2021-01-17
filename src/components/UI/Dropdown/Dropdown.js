import React from "react";
import Select from "react-select";

import PropTypes from "prop-types";

const Dropdown = ({ placeholder, onChange, options, theme, ...props }) => {
  return (
    <div>
      <Select
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        theme={theme}
      />
    </div>
  );
};

Dropdown.propTypes = {};

Dropdown.defaultProps = {};

export default Dropdown;
