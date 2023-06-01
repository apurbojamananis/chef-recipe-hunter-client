import "../../../src/index.css";
const About = () => {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto " style={{ fontFamily: "Roboto Slab" }}>
        <div className="md:grid grid-cols-2 py-28">
          <div className=" mx-auto w-2/3">
            <img src="./noodles1.png" alt="" />
          </div>
          <div className="pr-3 md:pr-32 pt-20 ml-6 md:ml-0">
            <h3 className="text-3xl text-[#161616]">About Us</h3>
            <h1 className="text-4xl text-[#002900] mt-5 font-medium">
              Why Your Choose Us
            </h1>
            <p className="text-[#616161] mt-10">
              A restaurant (sometimes known as a diner) is a place where cooked
              food is sold to the public, and where people sit down to eat it.
              It is also a place where people go to enjoy the time and to eat a
              meal.Some restaurants are a chain, meaning that there are
              restaurants which have the same name and serve the same food. Mc
              Donald, Burger King, and Pizza Hut are examples of chain
              restaurants that are all over the world. These restaurants{" "}
            </p>
            <button className="btn btn-primary mt-10">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
