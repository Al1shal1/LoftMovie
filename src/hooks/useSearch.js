import { useState, useEffect } from "react";
import { getSearchResults } from "src/api/api";

const isMovie = (entity) => "year" in entity;

const getActorsFromResults = (results) => {
  if (!results) {
    return [];
  }

  return results.filter((result) => !isMovie(result));
};

const getMoviesFromResilts = (results) => {
  if (!results) {
    return [];
  }

  return results.filter((result) => isMovie(result));
};

export function useSearch(searchText) {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const getResults = async () => {
    setIsLoading(true);

    if (searchText !== "") {
      const results = await getSearchResults(searchText);

      const actors = getActorsFromResults(results);
      const movies = getMoviesFromResilts(results);

      setData({
        all: results,
        actors,
        movies,
      });
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getResults();
  }, [searchText]);

  return {
    isLoading,
    data,
  };
}
