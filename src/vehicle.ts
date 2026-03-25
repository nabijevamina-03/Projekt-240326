export abstract class Vehicle {

  id: number;                               // eindeutige ID
  name: string;                             // Name (z.B. "Scooter 1")
  battery: number;                          // Akkustand in %
  rentedCount: number = 0;                  // wie oft ausgeliehen
  inMaintenance: boolean = false;           // Wartung ja/nein

  // Konstruktor → aufgerufen beim Erstellen
  constructor(id: number, name: string, battery: number = 100) {
    this.id = id;
    this.name = name;
    this.battery = battery;
  }

// Preis pro min
  abstract pricePerMinute(): number;

// Preis berechnen
  calculatePrice(minutes: number): number {
    return this.pricePerMinute() * minutes;
  }

// Fahrzeug mieten
  rent() {

    if (this.inMaintenance) {
      console.log("Fahrzeug in Wartung!");
      return false;
    }

    if (this.battery < 20) {
      console.log("Batterie zu niedrig!");
      return false;
    }

    this.rentedCount++;

    if (this.rentedCount >= 5) {
      this.inMaintenance = true;
      console.log("Fahrzeug muss jetzt in Wartung!");
    }

    return true;
  }

  // Wartung zurücksetzen
  repair() {
    this.inMaintenance = false;
    this.rentedCount = 0;
    console.log("Fahrzeug wurde repariert");
  }
}