import { ActorCard } from "src/components/ActorCard";
import { List } from "src/components/List";
import { MovieCard } from "src/components/MovieCard";
import { Page } from "src/components/Page";
import { useSearch } from "src/hooks/useSearch";
import { useSearchParams } from "react-router-dom";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("searchText");
  const { isLoading, data } = useSearch(searchText);

  const isPageLoading = isLoading || !data;

  return (
    <Page>
      <h2 className="h2-text search-results__title">
        {isPageLoading
          ? "Загружаем результаты поиска:"
          : "Вы искали, а мы нашли:"}
      </h2>
      {isPageLoading ? null : (
        <>
          {data.actors.length > 0 ? (
            <List title="Актёры" type="column">
              {data.actors.map((actor) => (
                <ActorCard key={actor.id} {...actor} />
              ))}
            </List>
          ) : null}

          {data.movies.length > 0 ? (
            <List title="Фильмы и сериалы" type="grid">
              {data.movies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </List>
          ) : null}
        </>
      )}
    </Page>
  );
};
