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
    Miles_per_Gallon: 18,
    Cylinders: 8,
    Displacement: 307,
    Horsepower: 130,
    Weight_in_lbs: 3504,
    Acceleration: 12,
    Year: "1970-01-01",
    Origin: "USA",
    brand: { id: "5b21ca3eeb7f6fbccd471818", name: "Chevrolet" },
  },
  {
    id: 7,
    name: "chevrolet impala",
    Miles_per_Gallon: 14,
    Cylinders: 8,
    Displacement: 454,
    Horsepower: 220,
    Weight_in_lbs: 4354,
    Acceleration: 9,
    Year: "1970-01-01",
    Origin: "USA",
    brand: { id: "5b21ca3eeb7f6fbccd471818", name: "Chevrolet" },
  },
  {
    id: 2,
    name: "Benz buick skylark 320",
    Miles_per_Gallon: 15,
    Cylinders: 8,
    Displacement: 350,
    Horsepower: 165,
    Weight_in_lbs: 3693,
    Acceleration: 11.5,
    Year: "1970-01-01",
    Origin: "USA",
    brand: { id: "5b21ca3eeb7f6fbccd471814", name: "Benz" },
  },
  {
    id: 3,
    name: "Benz plymouth satellite",
    Miles_per_Gallon: 18,
    Cylinders: 8,
    Displacement: 318,
    Horsepower: 150,
    Weight_in_lbs: 3436,
    Acceleration: 11,
    Year: "1970-01-01",
    Origin: "USA",
    brand: { id: "5b21ca3eeb7f6fbccd471814", name: "Benz" },
  },
  {
    id: 4,
    name: "Benz amc rebel sst",
    Miles_per_Gallon: 16,
    Cylinders: 8,
    Displacement: 304,
    Horsepower: 150,
    Weight_in_lbs: 3433,
    Acceleration: 12,
    Year: "1970-01-01",
    Origin: "USA",
    brand: { id: "5b21ca3eeb7f6fbccd471814", name: "Benz" },
  },
  {
    id: 5,
    name: "Ford torino",
    Miles_per_Gallon: 17,
    Cylinders: 8,
    Displacement: 302,
    Horsepower: 140,
    Weight_in_lbs: 3449,
    Acceleration: 10.5,
    Year: "1970-01-01",
    Origin: "USA",
    brand: { id: "5b21ca3eeb7f6fbccd471820", name: "Ford" },
  },
  {
    id: 6,
    name: "Ford galaxie 500",
    Miles_per_Gallon: 15,
    Cylinders: 8,
    Displacement: 429,
    Horsepower: 198,
    Weight_in_lbs: 4341,
    Acceleration: 10,
    Year: "1970-01-01",
    Origin: "USA",
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
