"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    id;
    name;
    battery;
    rentedCount = 0;
    inMaintenance = false;
    // Konstruktor
    constructor(id, name, battery = 100) {
        this.id = id;
        this.name = name;
        this.battery = battery;
    }
    // Preis berechnen
    calculatePrice(minutes) {
        if (minutes <= 0) {
            return 0;
        }
        return this.pricePerMinute() * minutes;
    }
    // Fahrzeug mieten
    rent() {
        if (this.inMaintenance) {
            console.log("Fahrzeug ist in Wartung!");
            return false;
        }
        else if (this.battery < 20) {
            console.log("Batterie zu niedrig!");
            return false;
        }
        else {
            this.rentedCount++;
            this.battery = Math.max(0, this.battery - 10);
            console.log("Fahrzeug erfolgreich gemietet!");
            if (this.rentedCount >= 5) {
                this.inMaintenance = true;
                console.log("Fahrzeug muss jetzt in Wartung!");
            }
            return true;
        }
    }
    // Wartung zurücksetzen
    repair() {
        this.inMaintenance = false;
        this.rentedCount = 0;
        console.log("Fahrzeug wurde repariert");
    }
    // Status anzeigen
    getStatus() {
        return `ID: ${this.id}, Name: ${this.name}, Akku: ${this.battery}%, Wartung: ${this.inMaintenance}`;
    }
}
exports.Vehicle = Vehicle;
//# sourceMappingURL=vehicle.js.map