import { useLoaderData } from "react-router-dom";
import Chef from "./Chef";
import "../../../src/index.css";

const Chefs = () => {
  const chefs = useLoaderData();

  return (
    <div
      className="container mx-auto my-10 py-20"
      style={{ fontFamily: "Roboto Slab" }}
    >
      <div className="mb-10">
        <h2 className="text-center text-3xl text-[#161616]">Chefs</h2>
        <h1 className="text-4xl text-[#002900] mt-5 font-medium text-center">
          Introducing Our Chefs
        </h1>
      </div>
      <div className="md:grid grid-cols-3 gap-3 justify-evenly ">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
