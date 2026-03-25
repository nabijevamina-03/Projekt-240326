"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manager_1 = require("./manager");
const escooter_1 = require("./escooter");
const ebike_1 = require("./ebike");
// Manager erstellen
const manager = new manager_1.FlottenManager();
// Fahrzeuge hinzufügen
manager.fahrzeugHinzufuegen(new escooter_1.EScooter(1, "Scooter 1", 10));
manager.fahrzeugHinzufuegen(new ebike_1.EBike(2, "Bike 1", 50));
// Alle anzeigen
console.log("Vor dem Laden:");
console.log(manager.alleFahrzeugeAnzeigen());
// Leere Fahrzeuge laden (<20%)
manager.leereFahrzeugeLaden();
console.log("Nach dem Laden:");
console.log(manager.alleFahrzeugeAnzeigen());
//# sourceMappingURL=index.js.map