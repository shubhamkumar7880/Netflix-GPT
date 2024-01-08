import React from "react";
import Loader from "react-js-loader";

const FullPageLoader = () => {
  return (
    <div className="bg-black/[.60] absolute top-0 left-0 w-full h-full">
      <div className="mt-60">
        <Loader
          type="spinner-cub"
          bgColor={"#FFFFFF"}
          color={"#FF0000"}
          title={""}
          size={150}
        />
      </div>
    </div>
  );
};

export default FullPageLoader;
