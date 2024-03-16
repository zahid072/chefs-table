import React from "react";

const Banner = () => {
  return (
    <>
      <div className="w-full text-white banner-bg bg-center md:px-48 md:py-32 rounded-2xl p-5 max-h-[600px] text-center mt-5">
        <h1 className="md:text-5xl md:leading-[76px] font-bold text-3xl">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="md:mt-0 mt-5">
          Embark on a culinary journey with our personalized cooking classes.
          Delight in recipes with calorie details, making healthy eating
          effortless and enjoyable!
        </p>
        <div className="mt-6">
          <button className="px-5 py-2 rounded-full text-black bg-[#0BE58A] font-bold">
            Explore Now
          </button>
          <button className="px-5 py-2 rounded-full border ml-5 font-bold">
            Our Feedback
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
