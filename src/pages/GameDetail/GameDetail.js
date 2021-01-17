import React, { useEffect, useState, Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import * as GamesApi from "../../services/GamesApi";

import Container from "../../components/Container/Container";

import Modal from "../../components/UI/Modal/Modal";

import Layout from "../../components/Layouts/Layout";
import Title from "../../components/UI/Title/Title";

import classes from "./GameDetail.module.css";

const Image = React.lazy(() => import("../../components/Image/Image"));

const GameDetail = () => {
  const [game, setGame] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    GamesApi.getDetails(id).then(data => setGame(data));
  }, []);

  return (
    <Layout isLoading={!game}>
      <Container>
        <div className={classes.gameInfo}>
          <div className={classes.one}>
            <Suspense fallback={<p>Loading...</p>}>
              <Image src={game?.thumbnail} />
            </Suspense>

            <p>
              <label>status:</label>
              {game?.status}
            </p>
            <p>
              <label>genere: </label>
              {game?.genre}
            </p>
            <p>
              <label>platform: </label>
              {game?.platform}
            </p>
            <p>
              <label>publisher: </label>
              {game?.publisher}
            </p>
            <p>
              <label>developer: </label>
              {game?.developer}
            </p>
          </div>
          <div className={classes.two}>
            <div className={classes.tone}>
              <Title type="h1" title={game?.title} />

              <p>{game?.description}</p>
            </div>
            <div className={classes.ttwo}>
              <Title type="h2" title={"  Minimum System Requirements"} />

              <p>
                <label> OS:</label>

                {game?.minimumSystemRequirements?.os}
              </p>

              <p>
                <label>processor: </label>

                {game?.minimumSystemRequirements?.processor}
              </p>
              <p>
                {" "}
                <label> memory: </label>
                memory
                {game?.minimumSystemRequirements?.memory}
              </p>

              <p>
                <label>graphics: </label>

                {game?.minimumSystemRequirements?.graphics}
              </p>

              <p>
                <label> storage:</label>
                {game?.minimumSystemRequirements?.storage}
              </p>

              <p>
                <label>release date:</label>

                {game?.releaseDate}
              </p>
            </div>{" "}
            <Link to={"/"}> Games List </Link>
          </div>
        </div>

        <div className={classes.screenshotSection}>
          {game?.screenshots?.map(screenshot => (
            <div key={screenshot.id} className={classes.thumbCard}>
              <Suspense>
                <Modal
                  open={isOpen}
                  src={screenshot.image}
                  onClose={() => setIsOpen(false)}
                ></Modal>
                <Image
                  onClick={key => setIsOpen(true)}
                  src={screenshot.image}
                  alt={game?.title}
                />
              </Suspense>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default GameDetail;
