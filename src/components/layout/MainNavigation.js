import classes from "./MainNavigation.module.css";
import { SearchBar } from "../SearchBar";

function MainNavigation() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>React GIST Search API</div>
      </header>
      <SearchBar />
    </>
  );
}

export default MainNavigation;
