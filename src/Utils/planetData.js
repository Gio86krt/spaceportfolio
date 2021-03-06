import tx1 from "../textures/node.jpg";
import tx2 from "../textures/css3.jpg";
import tx3 from "../textures/es6.jpg";
import tx4 from "../textures/html5.jpg";
import tx5 from "../textures/react.png";
import tx6 from "../textures/sql.jpg";
import tx7 from "../textures/mongo.jpg";

const random = (a, b) => a + Math.random() * b;
const randomInt = (a, b) => Math.floor(random(a, b));
const randomColor = () =>
  `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;

// const shuffle = (a) => {
//   const temp = a.slice(0);
//   for (let i = temp.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [temp[i], temp[j]] = [temp[j], temp[i]];
//   }
//   return temp;
// };

const textures = [tx1, tx2, tx3, tx4, tx5, tx6, tx7];
// const names = [
//   "NodeJS",
//   "Css3",
//   "JavaScript",
//   "Html5",
//   "ReactJS",
//   "SQL",
//   "MongoDB",
// ];

const descriptions = [
  {
    title: "NodeJS",
    content:
      "Experienced with NodeJS and relative NPM packages such as Express, Dotenv, Socket and more. Projects implemented with Node include: Client Management System, Fitness Tracker, Note Taker.",
    proficiency: 4,
    icon: "./textures/JSicon.png",
  },
  {
    title: "Css3",
    content:
      "Strong familiarity with CSS3, currently working on SASS. Examples of CSS implementation are: Weather Dashboard, Daily Planner, Employee Manager.",
    proficiency: 4,
  },
  {
    title: "JavaScript",
    content:
      "Proficient with ES6 syntax, both Vanilla and using libraries such as JQuery. All the projects in the portfolio have a strong usage of JavaScript.",
    proficiency: 5,
  },
  {
    title: "Html5",
    content:
      "Confident with HTML5 and its tags, examples of HTML implementation are: Weather Dashboard, Daily Planner, Reddit App.",
    proficiency: 5,
  },
  {
    title: "ReactJS",
    content:
      "Proficient with ReactJS, also using Hooks and packages such as react-boostrap, react-router-dom and three.js. This very website is built using React, and three.js for the animations and the canvas. Another example of React usage is Employee Tracker.",
    proficiency: 5,
  },
  {
    title: "SQL",
    content:
      "Strong familiarity with SQL, particularly with Sequelize, apps like Clients Management System are an example of SQL usage.",
    proficiency: 4,
  },
  {
    title: "MongoDB",
    content:
      "Strong familiarity with MongoDB and Mongoose, check out Fitness Tracker app for an example.",
    proficiency: 4,
  },
];

const planetData = [];
const totalPlanets = 7;
for (let index = 0; index < totalPlanets; index++) {
  planetData.push({
    id: index,
    color: randomColor(),
    xRadius: (index + 1.5) * 4,
    zRadius: (index + 1.5) * 2,
    size: 1.3, //random(0.5, 1)
    speed: random(0.3, 0.05),
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.008, 0.004),
    textureMap: textures[index],
    name: descriptions[index].title,
    description: descriptions[index],
  });
}

const sunData = {
  rotation: 1,
  rotationSpeed: 1,
};

export { planetData, sunData };
