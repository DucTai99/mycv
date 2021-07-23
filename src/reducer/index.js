import time from "../img/timemanagement.png";
import team from "../img/teamwork.png";
import hard from "../img/hardworking.png";
import friendly from "../img/friends.png";
import japan from "../img/japanlanguage.png";
import review from "../img/review.png";
import book from "../img/bookshop.png";
import egg from "../img/catchtheegg.png";

const initialState = {
  profile: {
    name: "Nguyen Duc Tai",
    phone: "+84 379 252 699",
    email: "ductaiit99@gmail.com",
    gitHub: "https://github.com/DucTai99",
    job: "I'm Web Developer",
    aboutMe: [
      "I have good knowledge Web Development, with knowledge of Object Oriented Programming and about some Design Pattern.",
      "Learning new languages and technologies is what I am passionate about. I’m always able to finish all of my assignment.",
    ],
    softSkill: [
      { img: time, title: "Time management" },
      { img: team, title: "Teamwork" },
      { img: hard, title: "Hard-working" },
      { img: friendly, title: "Friendly" },
    ],
    project: [
      {
        img: japan,
        title: "Japan Language",
        git: "https://github.com/DucTai99/japanproject",
        youtube: "",
      },
      {
        img: review,
        title: "Adidas Introduction",
        git: "https://github.com/DucTai99/ReviewProduct",
        youtube:
          "https://www.youtube.com/watch?v=mwUnTTSTdSQ&ab_channel=T%C3%A0i",
      },
      {
        img: book,
        title: "Book Store",
        git: "https://github.com/DucTai99/BookStore",
        youtube:
          "https://www.youtube.com/watch?v=Qcn7wAD_Pyc&ab_channel=T%C3%A0i",
      },
      {
        img: egg,
        title: "Catch The Eggs",
        git: "https://github.com/DucTai99/CatchTheEgg",
        youtube: "",
      },
    ],
    education: {
      school: "Nong Lam University",
      time: "2017 – Present",
      specialized: "Information Technology",
      description:
        "Studying in Nong Lam University at Faculty of Information Technology",
    },
    cv: "https://docs.google.com/document/d/1zw8wigC20K51sCwkDxnw-IMDDZ51K7xbZ5OuL4Sn0B8/edit?usp=sharing",
  },
  scrollDown: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SCROLL_DOWN":
      return {
        ...state,
        scrollDown: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
