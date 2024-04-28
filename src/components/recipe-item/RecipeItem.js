import React from "react";
import "./RecipeItem.scss";
import { Link } from "react-router-dom";


export default function RecipeItem({ item }) {
  return (
    <div className="recipe-item">
      <div className="img-box">
        <img src={item?.image_url} alt={item?.title} />
      </div>
      <div>
        <span className="item-publisher">
            {item?.publisher}
        </span>
        <h3 className="item-title">
            {item?.title}
        </h3>
        <Link className="item-detail-btn" to={`/recipe-item/${item?.id}`}>Recipe Detail</Link>
      </div>
    </div>
  );
}
