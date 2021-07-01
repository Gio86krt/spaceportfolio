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

const shuffle = (a) => {
  const temp = a.slice(0);
  for (let i = temp.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [temp[i], temp[j]] = [temp[j], temp[i]];
  }
  return temp;
};
const textures = [tx1, tx2, tx3, tx4, tx5, tx6, tx7];
const names = [
  "NodeJS",
  "Css3",
  "JavaScript",
  "Html5",
  "ReactJS",
  "SQL",
  "MongoDB",
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
    name: names[index],
  });
}

const sunData = {
  rotation: 1,
  rotationSpeed: 1,
};

export { planetData, sunData };
