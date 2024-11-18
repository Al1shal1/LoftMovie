import { convertActorId } from "./convertMovie";

export function convertActorBio(apiActorBio) {
  return {
    name: apiActorBio.name,
    description: apiActorBio?.miniBios[0]?.text,
    avatarSrc: apiActorBio?.image?.url,
    id: convertActorId(apiActorBio.id),
  };
}

export function convertActorFilography(apiActorFilography) {
  return apiActorFilography.filmography.map(convertMovie);
}

function convertMovie(apiMovie) {
  return {
    title: apiMovie.title,
    time: undefined,
    year: apiMovie.year,
    coverSrc: apiMovie?.image?.url ?? "",
    id: convertMovieId(apiMovie.id),
  };
}

export function convertMovieId(id) {
  return id.split("/")[2];
}
