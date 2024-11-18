const PLACEHOLDER_URL = "./assets/images/actor-placeholder.png";

export function getActorImg(avatarSrc) {
  const src = avatarSrc === "" ? PLACEHOLDER_URL : avatarSrc;

  return src;
}
