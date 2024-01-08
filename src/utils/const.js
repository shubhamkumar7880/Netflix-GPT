export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const userIcon =
  "https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg";

export const MY_ICON = "https://avatars.githubusercontent.com/u/75887562?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "हिंदी" },
  { identifier: "french", name: "française" },
  { identifier: "spanish", name: "española" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
