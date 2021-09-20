export const getGameList = async (filter = {}) => {
  const url = "/api/games";

  const query = Object.entries(filter)
    .map(([k, v]) => `${k}=${v}`)
    .join("&");

  if (query.length) {
    return fetch(`${url}?${query}`).then(res => res.json());
  } else {
    return fetch(url).then(res => res.json());
  }
};

export const getListPlatform = async (filter = {}) => {
  const url = "/api/games";

  const query = Object.values(filter).join("=");

  if (query.length) {
    return fetch(`${url}?${query}`).then(res => res.json());
  } else {
    return fetch(url).then(res => res.json());
  }
};

export const getListCat = async (filter = { category: "shooter" }) => {
  const url = "/api/games";

  const query = Object.values(filter).join("=");

  if (query.length) {
    return fetch(`${url}?${query}`).then(res => res.json());
  } else {
    return fetch(url).then(res => res.json());
  }
};
export const getListCatOptions = async (filter = {}) => {
  const url = "/api/categories";

  return fetch(`${url}`).then(res => res.json());
};

export const getListSortBy = async (filter = { category: "shooter" }) => {
  const url = "/api/games";

  const query = Object.values(filter).join("=");

  if (query.length) {
    return fetch(`${url}?${query}`).then(res => res.json());
  } else {
    return fetch(url).then(res => res.json());
  }
};

export const getDetails = async id => {
  if (isNaN(id)) {
    throw new Error("ID must be a Number!");
  }
  return fetch(`/api/game?id=${id}`).then(res => res.json());
};
