import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import { FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import "../../../src/index.css";

const Recipes = () => {
  const chefs = useLoaderData();
  console.log(chefs);
  const {
    chefPicture,
    chefName,
    bio,
    yearsOfExperience,
    numberOfRecipes,
    recipes,
    likes,
  } = chefs;
  console.log(recipes);
  return (
    <div className="bg-slate-100 py-24">
      <div className="container mx-auto " style={{ fontFamily: "Roboto Slab" }}>
        <div className="">
          <div className="md:grid grid-cols-2 min-h-fit w-10/12 py-10">
            <div className="flex justify-end">
              <LazyLoad offset={10}>
                <img
                  src={chefPicture}
                  className="max-w-sm  shadow-2xl mr-10 rounded-full"
                />
              </LazyLoad>
            </div>
            <div className="ml-2 mt-32">
              <h1 className="text-5xl font-bold">{chefName}</h1>
              <p className="pt-3">{bio}</p>
              <p className="mt-2">Recipe: {numberOfRecipes}</p>
              <p className="mt-1">Experience: {yearsOfExperience} Years</p>
              <p className="mt-1">
                <FaHeart
                  style={{ color: "red" }}
                  className="inline mr-1"
                ></FaHeart>{" "}
                <span>{likes}</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" md:flex justify-evenly py-10">
          {recipes.map((recipe) => (
            <Recipe key={recipe.name} recipe={recipe}></Recipe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
