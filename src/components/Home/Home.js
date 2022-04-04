import React from "react";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import img from "./books.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="md:container sm:container sm:mx-auto md:mx-auto">
      <div className="grid md:grid-cols-2 my-8 gap-5 items-center">
        <div>
          <h1 className="text-7xl font-bold text-blue-400 text-left">
            Nis Book{" "}
          </h1>
          <h1 className="text-7xl font-bold text-red-400 text-left">
            Review Website
          </h1>
          <p className="text-left">
            Hello!!! This is Nahidul Islam,Wellcome to My Book Review
            website.Here You can get a lot of best selling books summery.If you
            have any recomendation of book you can comment us.We will provide
            you your fevoriet books review.
          </p>
          <p className="text-lg text-blue-400 text-left font-bold">
            Make your reading habit.
          </p>
          <Link
            to={"/register"}
            className="bg-blue-500 hover:bg-red-400 px-12 text-white py-3 mt-4 rounded-lg mx-auto"
          >
            Join Now
          </Link>
        </div>
        <div>
          <img
            src={img}
            alt="Books Image"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-blue-400">
          Customer Reviews(3)
        </h2>
        <ReviewDetails></ReviewDetails>
        <Link
          to={"/review"}
          className="my-4 py-3 px-6 bg-red-400 hover:bg-red-500 rounded-lg"
        >
          Show All Review
        </Link>
      </div>
    </section>
  );
};

export default Home;
