// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

//arrays:any name
const [Honda, Tesla] = cars;
console.log(Honda);
console.log(Tesla);

const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: TeslaTopSpeed }
} = Tesla;

const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: HondaTopSpeed }
} = Honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{Tesla.model}</td>
      <td>{TeslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{Honda.model}</td>
      <td>{HondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

// import animals, { useAnimals } from "./data";

// // array [], any name
// const [cat, d] = animals;

// const [animal, makeSound] = useAnimals(cat);

// console.log(animal);
// makeSound();

// object {} props names have to match
// const {
//   name,
//   sound,
//   feedingReg: { food, water }
// } = cat;

// console.log(water);
