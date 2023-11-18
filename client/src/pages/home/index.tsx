import { Fragment } from "react";
import Categories from "src/components/home/Categories";
import MainBanner from "src/components/home/MainBanner";
import Header from "src/components/shared/Header";

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <MainBanner />
      <Categories />
    </Fragment>
  );
}
