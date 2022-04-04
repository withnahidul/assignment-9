import React from "react";
import img from "./books.jpeg";

const Home = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="grid md:grid-cols-2 my-8 gap-5 items-center">
        <div>
          <h1 className="text-7xl font-bold text-blue-400 text-left">
            Nis Book
          </h1>
          <h1 className="text-7xl font-bold text-indigo-500 text-left">
            Review Website
          </h1>
        </div>
        <div>
          <img
            src={img}
            alt="Book's Image"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
