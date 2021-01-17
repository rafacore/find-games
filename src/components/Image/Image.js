import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Image = ({ src, alt, onClick }) => {
  return <img src={src} alt={alt} onClick={onClick} />;
};

Image.defaultProps = {
  alt: "Image",
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
