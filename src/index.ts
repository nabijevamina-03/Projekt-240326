import { FlottenManager } from "./manager";
import { EScooter } from "./escooter";
import { EBike } from "./ebike";

// Manager erstellen
const manager = new FlottenManager();

// Fahrzeuge erstellen
const scooter = new EScooter(1, "Scooter 1", 10);
const bike = new EBike(2, "Bike 1", 50);

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