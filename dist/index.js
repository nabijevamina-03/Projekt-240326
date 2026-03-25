"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manager_1 = require("./manager");
const escooter_1 = require("./escooter");
const ebike_1 = require("./ebike");
// Manager erstellen
const manager = new manager_1.FlottenManager();
// Fahrzeuge erstellen
const scooter = new escooter_1.EScooter(1, "Scooter 1", 10);
const bike = new ebike_1.EBike(2, "Bike 1", 50);
// hinzufügen
manager.fahrzeugHinzufuegen(scooter);
manager.fahrzeugHinzufuegen(bike);
// Alle anzeigen
console.log("Alle Fahrzeuge:");
console.log(manager.alleFahrzeugeAnzeigen());
// Mieten testen
console.log("\nScooter wird gemietet:");
scooter.rent();
// Wartung testen
console.log("\nScooter mehrfach mieten:");
for (let i = 0; i < 5; i++) {
    scooter.rent();
}
// Reparieren
console.log("\nScooter wird repariert:");
scooter.repair();
// Laden
console.log("\nVor dem Laden:");
console.log(manager.alleFahrzeugeAnzeigen());
manager.leereFahrzeugeLaden();
console.log("Nach dem Laden:");
console.log(manager.alleFahrzeugeAnzeigen());
//# sourceMappingURL=index.js.map