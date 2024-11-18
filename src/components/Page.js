import { Header } from "src/components/header";
import { useTheme } from "src/ThemeContext";

export const Page = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`page theme-${theme}`} data-testid="page">
      <Header />
      <main>
        <div className="page-layout container">{children}</div>
      </main>
    </div>
  );
};
