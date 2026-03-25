import { FlottenManager } from "./manager";
import { EScooter } from "./escooter";
import { EBike } from "./ebike";

// Manager erstellen
const manager = new FlottenManager();

// Fahrzeuge hinzufügen
manager.fahrzeugHinzufuegen(new EScooter(1, "Scooter 1", 10));
manager.fahrzeugHinzufuegen(new EBike(2, "Bike 1", 50));

// Alle anzeigen
console.log("Vor dem Laden:");
console.log(manager.alleFahrzeugeAnzeigen());

// Leere Fahrzeuge laden (<20%)
manager.leereFahrzeugeLaden();

console.log("Nach dem Laden:");
console.log(manager.alleFahrzeugeAnzeigen());