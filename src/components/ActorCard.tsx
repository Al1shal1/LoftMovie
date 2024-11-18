import { getActorImg } from "src/utils/getActorImg";
import { Link } from "react-router-dom";

type TActorCardProps = {
  name: string;
  avatarSrc: string;
  id: string;
};

export const ActorCard = ({ avatarSrc, name, id }: TActorCardProps) => {
  const src = getActorImg(avatarSrc);

  return (
    <Link to={`/actor?id=${id}`} className="actor-card">
      <img src={src} className="actor-card__cover" loading="lazy" alt={name} />
      <p className="body-2-text text-nowrap">{name}</p>
    </Link>
  );
};
