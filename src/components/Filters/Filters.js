import React, { useState } from "react";
import { useQuery } from "react-query";
import * as GamesApi from "../../services/GamesApi";
import Dropdown from "../UI/Dropdown/Dropdown";
import Loading from "../Loading/Loading";
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

const sortByOptions = [
  {
    value: "sort-by",
    label: "release-date",
  },
  {
    value: "sort-by",
    label: "alphabetical",
  },
  {
    value: "sort-by",
    label: "relevance",
  },
];

export function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#86c232",
      primary: "#86c232",
    },
  };
}

const Filters = ({
  handleChangePlat,
  handleChangeCat,
  onHandleChangeSortBy,
}) => {
  const [categoriesOptions, setCategoriesOptions] = useState();

  const loadCategories = async () => {
    const data = await GamesApi.getListCatOptions();

    const catobj = data.map(i => ({ label: i, value: i }));

    setCategoriesOptions(catobj);

    return catobj;
  };
  const { data, isLoading, error } = useQuery("gameList", loadCategories);

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className={classes.filtersBar}>
      <Dropdown
        options={platform}
        onChange={handleChangePlat}
        placeholder="platform"
        theme={customTheme}
      />
      <Dropdown
        options={categoriesOptions}
        onChange={handleChangeCat}
        placeholder="categories"
        theme={customTheme}
      />
      <Dropdown
        placeholder="Sort by"
        options={sortByOptions}
        onChange={onHandleChangeSortBy}
        theme={customTheme}
      />
    </div>
  );
};

Filters.propTypes = {};

export default Filters;
