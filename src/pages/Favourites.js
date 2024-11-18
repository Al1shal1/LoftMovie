import { useState } from "react";
import { FavouritesFilter } from "src/components/FavouritesFilter";
import { Page } from "src/components/Page";
import { List } from "src/components/List";
import { ActorCard } from "src/components/ActorCard";
import { MovieCard } from "src/components/MovieCard";
import { favouritesStore } from "src/favouritesStore";

export const Favourites = () => {
  const [activeFilter, setactiveFilter] = useState("all");
  const { actors, movies } = favouritesStore.favourites;

  const handleItemClick = (value) => {
    setactiveFilter(value);
  };

  const showActors = ["actors", "all"].includes(activeFilter);
  const showMovies = ["movies", "all"].includes(activeFilter);

  return (
    <Page>
      <FavouritesFilter
        activeFilter={activeFilter}
        onItemClick={handleItemClick}
      />
      {showActors ? (
        <List title="Актеры" type="column">
          {actors.map((actor) => {
            return <ActorCard {...actor} key={actor.id} />;
          })}
        </List>
      ) : null}
      {showMovies ? (
        <List title="Фильмы и сериалы" type="grid">
          {movies.map((movie) => {
            return <MovieCard {...movie} key={movie.id} />;
          })}
        </List>
      ) : null}
    </Page>
  );
};
