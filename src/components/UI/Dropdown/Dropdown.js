import React from "react";
import Select from "react-select";

import PropTypes from "prop-types";

const Dropdown = ({ placeholder, onChange, options, ...props }) => {
  return (
    <div>
      <Select options={options} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

Dropdown.propTypes = {};

Dropdown.defaultProps = {};

export default Dropdown;
