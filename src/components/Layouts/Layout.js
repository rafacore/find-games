import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Loading from "../Loading/Loading";
import Title from "../UI/Title/Title";
import classes from "./Layout.module.css";

const Layout = ({ isLoading, children, ...props }) => {
  return (
    <div style={props.style}>
      {isLoading && <Loading />}
      <header>
        <Title
          type="h1"
          title={"Find & track the best free-to-play games!"}
          subtitle={"Search for what to play next!"}
          className={classes.title}
        />
        <nav>
          <Link to="/" exact="true">
            Home
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        made with ❤️ <b>by Rafael</b>{" "}
      </footer>
    </div>
  );
};

Layout.defaultProps = {
  isLoading: false,
};

Layout.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.any.isRequired,
};

export default Layout;
