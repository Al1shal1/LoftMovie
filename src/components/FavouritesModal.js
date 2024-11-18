import { CrossIcon } from "src/icons/CrossIcon";

export const FavouritesModal = ({ closeModal }) => {
  return (
    <div className="modal">
      <button className="modal__button" onClick={closeModal}>
        <CrossIcon />
      </button>
      <div className="modal__title">Добавлено в избранное</div>
      <a href="./favourites" className="modal__link">
        Перейти в избранное
      </a>
    </div>
  );
};
