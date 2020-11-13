const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const brands = [
  { id: "5b21ca3eeb7f6fbccd471818", name: "Chevrolet" },
  { id: "5b21ca3eeb7f6fbccd471814", name: "Benz" },
  { id: "5b21ca3eeb7f6fbccd471820", name: "Ford" },
];

const cars = [
  {
    id: 1,
    name: "chevrolet chevelle malibu",
    milesPerGallon: 18,
    cylinders: 8,
    displacement: 307,
    horsepower: 130,
    weightInLbs: 3504,
    acceleration: 12,
    year: "1970-01-01",
    origin: "USA",
    brand: { id: "5b21ca3eeb7f6fbccd471818", name: "Chevrolet" },
  },
  {
    id: 7,
    name: "chevrolet impala",
    milesPerGallon: 14,
    cylinders: 8,
    displacement: 454,
    horsepower: 220,
    weightInLbs: 4354,
    acceleration: 9,
    year: "1970-01-01",
    origin: "USA",
    brand: { id: "5b21ca3eeb7f6fbccd471818", name: "Chevrolet" },
  },
  {
    id: 2,
    name: "Benz buick skylark 320",
    milesPerGallon: 15,
    cylinders: 8,
    displacement: 350,
    horsepower: 165,
    weightInLbs: 3693,
    acceleration: 11.5,
    year: "1970-01-01",
    origin: "USA",
    brand: { id: "5b21ca3eeb7f6fbccd471814", name: "Benz" },
  },
  {
    id: 3,
    name: "Benz plymouth satellite",
    milesPerGallon: 18,
    cylinders: 8,
    displacement: 318,
    horsepower: 150,
    weightInLbs: 3436,
    acceleration: 11,
    year: "1970-01-01",
    origin: "USA",
    brand: { id: "5b21ca3eeb7f6fbccd471814", name: "Benz" },
  },
  {
    id: 4,
    name: "Benz amc rebel sst",
    milesPerGallon: 16,
    cylinders: 8,
    displacement: 304,
    horsepower: 150,
    weightInLbs: 3433,
    acceleration: 12,
    year: "1970-01-01",
    origin: "USA",
    brand: { id: "5b21ca3eeb7f6fbccd471814", name: "Benz" },
  },
  {
    id: 5,
    name: "Ford torino",
    milesPerGallon: 17,
    cylinders: 8,
    displacement: 302,
    horsepower: 140,
    weightInLbs: 3449,
    acceleration: 10.5,
    year: "1970-01-01",
    origin: "USA",
    brand: { id: "5b21ca3eeb7f6fbccd471820", name: "Ford" },
  },
  {
    id: 6,
    name: "Ford galaxie 500",
    milesPerGallon: 15,
    cylinders: 8,
    displacement: 429,
    horsepower: 198,
    weightInLbs: 4341,
    acceleration: 10,
    year: "1970-01-01",
    origin: "USA",
    brand: { id: "5b21ca3eeb7f6fbccd471820", name: "Ford" },
  },
];

app.get("/api/brands", (req, res) => {
  res.json(brands);
});

app.get("/api/cars", (req, res) => {
  res.json(cars);
});

app.get("/api/cars/:id", (req, res) => {
  const index = cars.findIndex((car) => car.id === parseInt(req.params.id));
  const car = cars[index];
  res.json(car);
});

app.listen(9001, () => {
  console.log("Node server started on port 9001.");
});
