import { BrandIcon } from "src/icons/BrandIcon";
import { SearchIcon } from "src/icons/SearchIcon";
import { SunIcon } from "src/icons/SunIcon";
import { MoonIcon } from "src/icons/MoonIcon";
import { BookmarkIcon } from "src/icons/BookmarkIcon";
import { useTheme, toggleTheme } from "src/ThemeContext";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <div className="container header">
        <a href="/" className="header__logo">
          <BrandIcon />
        </a>
        <ul className="header__navigation">
          <li className="header__navigation-item">
            <a href="/">
              <SearchIcon />
            </a>
          </li>
          <li className="header__navigation-item">
            <button onClick={toggleTheme}>
              {theme === "light" ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
          <li className="header__navigation-item">
            <a href="/favourites">
              <BookmarkIcon />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
