import { Component } from "react";
import { Page } from "src/components/Page";
import { ActorCard } from "src/components/ActorCard";
import { List } from "src/components/List";
import { MovieHero } from "src/components/MovieHero";
import { getMovie } from "src/api/api";
import { getUrlParam } from "src/Router";

class MovieClass extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      movie: null,
    };
  }

  async getMovieData() {
    const movieId = getUrlParam("id");

    if (movieId == null) {
      return;
    }

    this.setState({ isLoading: true });

    const movie = await getMovie(movieId);
    this.setState({ movie });

    this.setState({ isLoading: false });
  }

  componentDidMount() {
    this.getMovieData();
  }

  render() {
    const { isLoading, movie } = this.state;

    return (
      <Page>
        {isLoading || movie == null ? (
          <p>Загружаем информацию о фильме</p>
        ) : (
          <>
            <MovieHero {...movie.meta} />
            <List title="Актёры" type="column">
              {movie.actors.map((actor) => {
                return <ActorCard key={actor.id} {...actor} />;
              })}
            </List>
          </>
        )}
      </Page>
    );
  }
}

export { MovieClass };
