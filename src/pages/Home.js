import { SearchForm } from "src/components/SerachForm";
import { useTheme } from "src/ThemeContext";

export const Home = () => {
  const { theme } = useTheme();
  return (
    <div className={`page theme-${theme}`}>
      <main className="search-page">
        <SearchForm />
      </main>
    </div>
  );
};
