import "../../../src/index.css";

const Service = () => {
  return (
    <div className=" mb-40 mt-32" style={{ fontFamily: "Roboto Slab" }}>
      <div className="container mx-auto ">
        <div className="text-center">
          <h3 className="text-3xl text-[#161616]">Service</h3>
          <h1 className="text-4xl text-[#002900] mt-5 font-medium">
            Why Your Choose Our Chefs Food
          </h1>
        </div>
        <div className="md:grid grid-cols-3 gap-10 px-10 mt-20 ">
          <div className="text-center px-20 py-5 rounded-tl-[56px] rounded-br-[56px] bg-slate-100 ">
            <img
              src="./restaurant1.png"
              alt=""
              className="mx-auto my-4 p-3 bg-slate-900 rounded-full"
            />
            <h3 className="text-[#002900] text-3xl font-medium mt-10">
              Qualityfull Food
            </h3>
            <p className="text-[#616161] mt-3 mb-5">
              Food is what people and animals eat. | Meaning, pronunciation,
              translations and examples.
            </p>
          </div>
          <div className=" text-center px-20 py-5 rounded-tl-[56px] rounded-br-[56px] bg-slate-100 mt-10 md:mt-0">
            <img
              src="./cutlery1.png"
              alt=""
              className="mx-auto my-4 p-3 bg-slate-900 rounded-full "
            />
            <h3 className="text-[#002900] text-3xl font-medium mt-10">
              Healthy Food
            </h3>
            <p className="text-[#616161] mt-3 mb-5">
              Food is what people and animals eat. | Meaning, pronunciation,
              translations and examples.
            </p>
          </div>
          <div className="text-center px-20 py-5 rounded-tl-[56px] rounded-br-[56px] bg-slate-100 mt-10 md:mt-0">
            <img
              src="./fast-delivery1.png"
              alt=""
              className="mx-auto my-4 p-3 bg-slate-900 rounded-full "
            />
            <h3 className="text-[#002900] text-3xl font-medium mt-10">
              Fastest Delivery
            </h3>
            <p className="text-[#616161] mt-3 mb-5">
              Food is what people and animals eat. | Meaning, pronunciation,
              translations and examples.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
