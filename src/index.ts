function line() {
  console.log("\n----------------------------\n");
}
import { FlottenManager } from "./manager";
import { EScooter } from "./escooter";
import { EBike } from "./ebike";
import * as readline from "readline";                       // rl -> Node Modul, deswegen braucht es * as im TYPSC

// Manager erstellen
const manager = new FlottenManager();

// Fahrzeuge erstellen
const scooter = new EScooter(1, "Scooter 1", 10);
const bike = new EBike(2, "Bike 1", 50);

// hinzufügen
manager.fahrzeugHinzufuegen(scooter);
manager.fahrzeugHinzufuegen(bike);

// readline starten
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Menü
function menue() {
 rl.question("\n[1] Anzeigen | [2] Mieten | [3] Laden | [4] Exit\n> ", (e) => {

if (e === "1") {
  line();
  console.log("Fahrzeuge:");
  manager.alleFahrzeugeAusgeben();
}

else if (e === "2") {
  line();
  console.log("Mieten:");
  manager.alleFahrzeugeMieten();
}

else if (e === "3") {
  line();
  console.log("Laden:");
  manager.leereFahrzeugeLaden();
}

else if (e === "4") {
  line();
  console.log("Programm beendet.");
  return rl.close();
}

    menue(); // wiederholen
  });
}

line();
console.log("Startzustand:");
manager.alleFahrzeugeAusgeben();

menue();