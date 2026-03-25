"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    id; // eindeutige ID
    name; // Name (z.B. "Scooter 1")
    battery; // Akkustand in %
    rentedCount = 0; // wie oft ausgeliehen
    inMaintenance = false; // Wartung ja/nein
    // Konstruktor → aufgerufen beim Erstellen
    constructor(id, name, battery = 100) {
        this.id = id;
        this.name = name;
        this.battery = battery;
    }
    // Preis berechnen
    calculatePrice(minutes) {
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
exports.Vehicle = Vehicle;
//# sourceMappingURL=vehicle.js.map