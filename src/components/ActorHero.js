import { getActorImg } from "src/utils/getActorImg";
import { BookmarkIcon } from "src/icons/BookmarkIcon";
import { useFavouritesModal } from "src/hooks/useFavouritesModal";
import { favouritesStore } from "src/favouritesStore";

export const ActorHero = ({ name, description, avatarSrc, id }) => {
  const src = getActorImg(avatarSrc);
  const { Modal, showModal } = useFavouritesModal();

  const handleBookmarkClick = () => {
    showModal();

    favouritesStore.addActor({ name, avatarSrc, id });
  };

  return (
    <section className="actor-hero">
      <img src={src} className="actor-hero__img" loading="lazy" alt={name} />
      <div className="actor-info">
        <div className="actor-info__name">
          <h1 className="h1-text text-nowrap">{name}</h1>
          <button onClick={handleBookmarkClick}>
            <BookmarkIcon />
          </button>
        </div>
        {description ? (
          <div className="actor-info__description">
            <p className="body-text">{description}</p>
            <button className="tag-text">Подробнее</button>
          </div>
        ) : null}
      </div>
      <Modal />
    </section>
  );
};
