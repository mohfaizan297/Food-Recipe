import React, { useContext } from "react";
import { GlobalState } from "../../context/GlobalContext";
import RecipeItem from "../../components/recipe-item/RecipeItem";
import "./Home.scss";

export default function Home() {
  const { recipeList } = useContext(GlobalState);
  if (!recipeList || !recipeList.length > 0)
    return (
      <div className="nothing-to-show">
        <h2>Nothing to Show! Please Search Something...</h2>
      </div>
    );
  return (
    <div className="home">
      {recipeList || recipeList.length > 0
        ? (recipeList?.map((item) => <RecipeItem key={item.id} item={item} />))
        : (null)}
    </div>
  );
}
