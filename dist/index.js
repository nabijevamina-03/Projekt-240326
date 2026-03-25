"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function line() {
    console.log("\n----------------------------\n");
}
const manager_1 = require("./manager");
const escooter_1 = require("./escooter");
const ebike_1 = require("./ebike");
const readline = __importStar(require("readline")); // rl -> Node Modul, deswegen braucht es * as im TYPSC
// Manager erstellen
const manager = new manager_1.FlottenManager();
// Fahrzeuge erstellen
const scooter = new escooter_1.EScooter(1, "Scooter 1", 10);
const bike = new ebike_1.EBike(2, "Bike 1", 50);
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
//# sourceMappingURL=index.js.map