import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANG, userIcon } from "../utils/const";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import language from "../utils/languageConstant";
import { useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt?.showGptSearch);
  const lang = useSelector((store) => store.config?.lang);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log("singout error", error);
      });
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute md:fixed w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between flex-col md:flex-row">
      <div className="flex justify-between">
        <Link to="/browse">
          <img className="w-44 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
        </Link>
        {user && (
          <ul className="text-white mt-5 ml-14 hidden md:flex cursor-pointer">
            <li
              className={`mr-6 ${
                location.pathname === "/browse" ? "font-bold" : ""
              }`}
            >
              <Link to="/browse">Home</Link>
            </li>
            <li
              className={`mr-6 ${
                location.pathname === "/browse/movies" ? "font-bold" : ""
              }`}
            >
              <Link to="/browse/movies">Movies</Link>
            </li>
            <li
              className={`mr-6 ${
                location.pathname === "/browse/tv-shows" ? "font-bold" : ""
              }`}
            >
              <Link to="/browse/tv-shows">TV Shows</Link>
            </li>
          </ul>
        )}
      </div>

      {user && (
        <div className="flex p-0 md:p-2 justify-between">
          <select
            className="p-0 md:p-2 bg-red-800 text-white m-2 rounded-lg"
            onChange={handleLangChange}
          >
            {SUPPORTED_LANG.map((lang) => (
              <option
                className="bg-gray-900"
                value={lang?.identifier}
                key={lang?.identifier}
              >
                {lang?.name}
              </option>
            ))}
          </select>
          <button
            className="py-2 px-2 md:px-4 mx-4 my-2 bg-red-800 rounded-lg text-white"
            onClick={handleGptSearchClick}
          >
            {!showGpt
              ? language[lang].gpt + " " + language[lang].search
              : language[lang].home}
          </button>
          <img
            src={userIcon}
            alt="user icon"
            className="w-8 h-8 mt-3 mr-2 hidden md:block"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            ({language[lang].signOut})
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
