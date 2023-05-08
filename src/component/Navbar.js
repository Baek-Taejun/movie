import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Group_obj, Group_key_arr } from "../atom/NavList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState(null);

  //내가 클릭했을때 이벤트
  const searchClick = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.container}>
      {/* page name */}
      <div className={styles.pageName}>
        <Link to={"/"}>JunFLEX</Link>
      </div>

      {/* Group Links */}
      <div className={styles.GroupLink}>
        {Group_key_arr.map((key) => {
          return (
            <div className={styles.Link} key={key}>
              <div className={styles.Link_sep}>
                <Link to={`/page/${Group_obj[key]}/1`}>{key}</Link>
              </div>
            </div>
          );
        })}

        {/* Metty Chrismas! */}
        <div className={styles.MerryChristmas}>
          <Link to={`/search/christmas`}>Christmas</Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <div>
          <form>
            {/*Search text */}
            <input
              type="text"
              placeholder="Search Movie!"
              value={search}
              onChange={searchClick}
              onMouseOut={() => {
                setSearch("");
              }}
            ></input>
            <Link to={`/search/${search}`}>
              <button>
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
