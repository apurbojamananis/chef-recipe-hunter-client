import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// eslint-disable-next-line react/prop-types
const Recipe = ({ recipe }) => {
  const [love, setLove] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { recipeImg, name, method, ingredients, rating } = recipe;
  return (
    <div>
      <div className="card w-96 min-h-[800px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={recipeImg} alt="recipe" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>
            <span className="font-semibold">Method:</span> {method}
          </p>
          <h4>
            <span className="font-semibold"> Ingredients: </span>{" "}
            {ingredients[0]}, {ingredients[1]}, {ingredients[2]},{" "}
            {ingredients[3]}, {ingredients[4]}
          </h4>
          <div className="flex justify-between w-full ">
            <div className="flex gap-1">
              <span>
                {" "}
                Rating: <span>{rating}</span>
              </span>
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            </div>
            <button
              disabled={love}
              onClick={() => {
                setLove(!love);
                toast("The recipe is your Favorite!");
              }}
              className="justify-end "
            >
              {love ? (
                <FaHeart style={{ color: "red" }}></FaHeart>
              ) : (
                <AiOutlineHeart></AiOutlineHeart>
              )}
            </button>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            theme="light"
          />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
