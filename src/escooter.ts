import { Vehicle } from "./vehicle";

// importieren die "Vorlage"


// EScooter ERBT alles von Vehicle, also id, name, battery, rent(), repair()
export class EScooter extends Vehicle {

  // diese Methode MUSS rein, weil sie abstract war
  pricePerMinute(): number {

    // Scooter kostet 15 Cent pro Minute
    return 0.15;
  }
}