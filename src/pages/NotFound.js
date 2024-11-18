import { Page } from "src/components/Page";

export const NotFound = () => {
  return (
    <Page>
      <h1>
        Вы искали, а мы ничего не нашли –{" "}
        <a href="/">
          {" "}
          попробуйте <u> снова</u>.{" "}
        </a>
      </h1>
    </Page>
  );
};
