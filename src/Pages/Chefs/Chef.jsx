/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

// eslint-disable-next-line react/prop-types
const Chef = ({ chef }) => {
  const {
    likes,
    id,
    chefPicture,
    chefName,
    yearsOfExperience,
    numberOfRecipes,
  } = chef;
  return (
    <div>
      <div className=" card w-96 bg-base-100 shadow-xl mt-10 md:mt-0">
        <LazyLoad offset={10}>
          <figure className="px-10 pt-10">
            <img src={chefPicture} alt="Chef" className="rounded-xl" />
          </figure>
        </LazyLoad>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{chefName}</h2>
          <p>
            <span className="text-md font-medium">Experience:</span>{" "}
            {yearsOfExperience} Years
          </p>
          <div className="w-full flex justify-between">
            <p>
              <span className="text-md font-medium">Recipe:</span>{" "}
              {numberOfRecipes}
            </p>
            <p>
              <FaHeart className="inline mr-2"></FaHeart>
              <span>{likes}</span>{" "}
            </p>
          </div>
          <div className="card-actions mt-3">
            <Link to={`/recipe/${id}`} className="btn btn-primary">
              View Recipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
