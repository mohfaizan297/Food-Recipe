import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalState = createContext(null);

export default function GlobalContext({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);

  const navigate = useNavigate();

  function handleAddToFavourites(currentItem) {
    console.log(currentItem);
    const copyFavourites = [...favouritesList];
    const index = copyFavourites.findIndex(
      (item) => item.id === currentItem.id
    );
    if (index === -1) {
      copyFavourites.push(currentItem);
    } else {
      copyFavourites.splice(index, 1);
    }
    setFavouritesList(copyFavourites);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (searchParam) {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
        );
        const data = await response.json();
        if (data?.data?.recipes) {
          setRecipeList(data?.data?.recipes);
          setLoading(false);
          setSearchParam("");
          navigate("/");
        }
      } catch (e) {
        setLoading(false);
        setSearchParam("");
        console.log(e);
      }
    } else return;
  }
  useEffect(() => {
    let a = 1;
  }, [recipeList, favouritesList]);

  return (
    <GlobalState.Provider
      value={{
        recipeList,
        searchParam,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavourites,
        favouritesList,
        setFavouritesList,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
}
