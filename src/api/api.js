/* 
  Файл хранит запросы на функции и конфигурацию запросов на backend (Rapid API),
  а также функции, эмулируюзие эти запросы
*/
import { stall } from "src/utils/stall";
import { convertSearchResults } from "./converters/convertSearchResults";
import {
  convertActorBio,
  convertActorFilography,
} from "./converters/convertActor";
import {
  convertMovieFind,
  convertMovieCharnameList,
} from "./converters/convertMovie";
import { SearchResultsMock } from "./dummy-data/searchResultsMock";
import { actorBioMock, actorFilmografyMock } from "./dummy-data/actorMock";
import { movieFindMock, movieCharnameListMock } from "./dummy-data/movieMock";

const isDummyResponse = false;

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3fb7fdf0f9mshba16e4b7d545f2fp1cb438jsnbb04ffba0aa5",
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
  },
};

export async function getSearchResults(searchText) {
  if (isDummyResponse) {
    await stall();
    return convertSearchResults(SearchResultsMock);
  }

  const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${encodeURI(
    searchText
  )}`;

  try {
    const response = await fetch(url, options);
    const searchResults = await response.json();

    return convertSearchResults(searchResults);
  } catch (error) {
    console.error(error);
  }
}

export function getActor(actorId) {
  return Promise.all([getActorBio(actorId), getActorFilmography(actorId)]).then(
    (response) => {
      return {
        bio: response[0],
        movies: response[1],
      };
    }
  );
}
async function getActorBio(actorId) {
  if (isDummyResponse) {
    await stall();
    return convertActorBio(actorBioMock);
  }

  const url = `https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${actorId}`;

  try {
    const response = await fetch(url, options);
    const actorBio = await response.json();

    return convertActorBio(actorBio);
  } catch (error) {
    console.error(error);
  }
}

async function getActorFilmography(actorId) {
  if (isDummyResponse) {
    await stall();
    return convertActorFilography(actorFilmografyMock);
  }

  const url = `https://imdb8.p.rapidapi.com/actors/get-all-filmography?nconst=${actorId}`;

  try {
    const response = await fetch(url, options);
    const actorFilmografy = await response.json();

    return convertActorFilography(actorFilmografy);
  } catch (error) {
    console.error(error);
  }
}

export async function getMovie(movieId) {
  const movieMeta = await getMovieMeta(movieId);
  const characters = await getMovieCharacters(movieId, movieMeta.actorIds);

  return {
    meta: movieMeta,
    actors: characters,
  };
}

async function getMovieMeta(movieId) {
  if (isDummyResponse) {
    await stall();
    return convertMovieFind(movieFindMock);
  }

  const url = `https://imdb8.p.rapidapi.com/title/find?q=${movieId}`;

  try {
    const response = await fetch(url, options);
    const movieMeta = await response.json();

    return convertMovieFind(movieMeta);
  } catch (error) {
    console.error(error);
  }
}

async function getMovieCharacters(movieId, actorIds) {
  if (isDummyResponse) {
    await stall();
    return convertMovieCharnameList(movieCharnameListMock);
  }

  const url = `https://imdb8.p.rapidapi.com/title/get-charname-list?tconst=${movieId}&id=${actorIds.join(
    "&id="
  )}`;

  try {
    const response = await fetch(url, options);
    const actors = await response.json();

    return convertMovieCharnameList(actors);
  } catch (error) {
    console.error(error);
  }
}
