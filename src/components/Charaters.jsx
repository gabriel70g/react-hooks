import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import {} from "react-bootstrap";
import "./Charaters.scss";
import Search from "./Search";

import useCharaters from "../hooks/useCharaters.js";

const initialState = {
  favorites: [],
};

const API = "https://rickandmortyapi.com/api/character/";

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      console.log("llegamos");
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    default:
      return state;
  }
};

const Charaters = () => {
  //  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const characters = useCharaters(API);

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character/")
  //     .then((response) => response.json())
  //     .then((data) => setCharacters(data.results));
  // }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  // const filteredUser = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredUser = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="Charaters container-fluid">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <div className="row">
        {filteredUser.map((character) => (
          <div className="col-3" key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt="image" />
            <p></p>
            <button
              className="btn-primary"
              type="button"
              onClick={() => {
                handleClick(character);
              }}
            >
              Agregar a favoritos
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charaters;
