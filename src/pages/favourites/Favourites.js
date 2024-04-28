import React, { useContext } from "react";
import "./Favourites.scss";
import RecipeItem from "../../components/recipe-item/RecipeItem";
import { GlobalState } from "../../context/GlobalContext";

export default function Favourites() {
  const { favouritesList } = useContext(GlobalState);
  if (!favouritesList || !favouritesList.length > 0)
    return (
      <div className="nothing-to-show">
        <h2>Nothing is added in favourites.</h2>
      </div>
    );
  return (
    <div className="favourites">
      {favouritesList || favouritesList?.length > 0
        ? favouritesList?.map((item) => (
            <RecipeItem key={item.id} item={item} />
          ))
        : null}
    </div>
  );
}
