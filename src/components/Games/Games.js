import React, { Suspense } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import classes from "./Games.module.css";
import Title from "../UI/Title/Title";
const Image = React.lazy(() => import("../Image/Image"));

const Games = ({
  id,
  title,
  shortDescription,
  genre,
  platform,
  publisher,
  developer,
  releaseDate,
  thumbnail,
}) => {
  return (
    <section className={classes.game}>
      <Title type="h2" title={title} />
      <Suspense>
        <Image src={thumbnail} alt={title} />
      </Suspense>
      <div className={classes.cardContent}>
        <p>{shortDescription}</p>
        <p>
          <b>Genre:</b>
          {genre}
        </p>
        <p>
          <b>Platform:</b>
          {platform}
        </p>
        <p>
          <b>Publisher:</b>
          {publisher}
        </p>
        <p>
          <b>Developer:</b>
          {developer}
        </p>
        <p>
          <b>Release:</b>
          {releaseDate}
        </p>
        <div className={classes.showDetailsLink}>
          <Link to={`/game/${id}`}>Show Details > </Link>
        </div>
      </div>
    </section>
  );
};

Games.defaultProps = {
  description: "",
  publisher: "",
  developer: "",
  releaseDate: "",
  thumbnail: "",
};

Games.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  publisher: PropTypes.string,
  developer: PropTypes.string,
  releaseDate: PropTypes.string,
  thumbnail: PropTypes.string.isRequired,
};

export default Games;
