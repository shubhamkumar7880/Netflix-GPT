import React from "react";
import { useSelector } from "react-redux";
import language from "../utils/languageConstant";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-3 m-4 col-span-9 rounded-lg"
          placeholder={language[lang].gptSearchPlaceHolder}
        />
        <button className="col-span-3 m-4 py-3 px-4 bg-red-700 text-white rounded-lg">
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
