import React, { useEffect, useState, Suspense } from "react";
import { useQuery } from "react-query";

import * as GamesApi from "../../services/GamesApi";
import Layout from "../../components/Layouts/Layout";

import Filters from "../../components/Filters/Filters";
import SearchBox from "../../components/SearchBox/SearchBox.js";
import Container from "../../components/Container/Container.js";
import ToggleTheme from "../../components/ToggleTheme/ToggleTheme.js";
import Loading from "../../components/Loading/Loading";

import classes from "./GameBuilder.module.css";
const Games = React.lazy(() => import("../../components/Games/Games"));
const GameBuilder = () => {
  const [games, setGames] = useState(null);
  const [searchText, setSearchText] = useState([]);

  const [selectedValue, setSelectedValue] = useState([]);
  const [selectedValueCat, setSelectedValueCat] = useState([]);

  useEffect(() => {
    if (searchText && searchText.length) {
      const filteredGames = data.filter(
        game => game.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
      setGames(filteredGames);
    } else {
      setGames(games);
    }
  }, [searchText, games]);

  useEffect(() => {
    getListPlatform(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    getListCat(selectedValueCat);
  }, [selectedValueCat]);

  const loadGames = async () => {
    const data = await GamesApi.getGameList();
    setGames(data);

    return data;
  };
  const getListPlatform = async selectedValue => {
    const data = await GamesApi.getListPlatform(selectedValue);
    setGames(data);

    return data;
  };

  const getListCat = async selectedValueCat => {
    const data = await GamesApi.getListCat(selectedValueCat);
    setGames(data);
    return data;
  };

  const handleChangeCat = categories => {
    setSelectedValueCat(categories);
  };

  const handleChangeFilterPlat = platform => {
    setSelectedValue(platform);
  };

  const { data, isLoading, error } = useQuery("gameList", loadGames);

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Layout>
        <ToggleTheme />
        <SearchBox
          value={searchText}
          handleChange={e => setSearchText(e.target.value)}
        />
        <Filters
          handleChangeCat={e => handleChangeCat(e)}
          handleChangePlat={e => handleChangeFilterPlat(e)}
        />

        <Container>
          <div className={classes.gameList}>
            {games.map(item => (
              <Suspense key={item.id} fallback={<Loading />}>
                <Games key={item.id} {...item} />
              </Suspense>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default GameBuilder;
