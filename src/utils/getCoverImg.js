const PLACEHOLDER_URL = "./assets/images/movie-placeholder.jpg";

export function getCoverImg(coverSrc) {
  const src = coverSrc === "" ? PLACEHOLDER_URL : coverSrc;

  return src;
}
