import { Vehicle } from "./vehicle";

// EBike erbt alles von Vehicle
export class EBike extends Vehicle {

  // Bike kostet 25 Cent pro Minute
  pricePerMinute(): number {
    return 0.25;
  }
}