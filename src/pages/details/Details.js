import React, { useContext, useEffect } from "react";
import { GlobalState } from "../../context/GlobalContext";
import { useParams } from "react-router-dom";
import "./Details.scss";

export default function Details() {
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavourites,
    favouritesList,
  } = useContext(GlobalState);
  const { id } = useParams();
  console.log(id);
  async function getRecipeDetails() {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await response.json();
    setRecipeDetailsData(data?.data?.recipe);
    console.log(data);
  }
  useEffect(() => {
    getRecipeDetails();
  }, []);
  return (
    <div className="recipe-details">
      <div className="container">
        <div className="left">
          <img
            src={recipeDetailsData?.image_url}
            alt={recipeDetailsData?.title}
          />
        </div>
        <div className="right">
          <span className="recipe-publisher">
            {recipeDetailsData?.publisher}
          </span>
          <h3 className="recipe-title">{recipeDetailsData?.title}</h3>
          <div className="favourites-btn">
            <button
              onClick={() => handleAddToFavourites(recipeDetailsData)}
              className="recipe-detail-btn"
            >
              {favouritesList &&
              favouritesList.length > 0 &&
              favouritesList.findIndex(
                (item) => item.id === recipeDetailsData.id
              ) !== -1
                ? "Remove From Favourites"
                : "SAVE AS FAVOURITES"}
            </button>
          </div>
          <div className="ingredients-container">
            <span>Ingredients:</span>
            <ul>
              {recipeDetailsData?.ingredients.map((ingredient) => (
                <li>
                  <span>
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span>{ingredient.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
