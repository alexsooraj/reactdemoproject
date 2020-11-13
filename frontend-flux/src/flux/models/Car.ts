export interface Car {
    id: number,
    name: string,
    milesPerGallon: number,
    cylinders: number,
    displacement: number,
    horsepower: number,
    weightInLbs: number,
    acceleration: number,
    year: Date,
    origin: string,
    brand: { id: string, name: string },
  }