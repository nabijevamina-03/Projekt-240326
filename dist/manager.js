"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlottenManager = void 0;
class FlottenManager {
    // Liste aller Fahrzeuge
    fahrzeuge = [];
    // Fahrzeug hinzufügen
    fahrzeugHinzufuegen(fahrzeug) {
        this.fahrzeuge.push(fahrzeug);
    }
    // Fahrzeug entfernen über ID
    fahrzeugEntfernen(id) {
        this.fahrzeuge = this.fahrzeuge.filter(f => f.id !== id);
    }
    // Alle Fahrzeuge anzeigen
    alleFahrzeugeAnzeigen() {
        return this.fahrzeuge;
    }
    // Nur verfügbare Fahrzeuge (nicht in Wartung)
    verfuegbareFahrzeuge() {
        return this.fahrzeuge.filter(f => !f.inMaintenance);
    }
    // Alle Fahrzeuge unter 20% laden
    leereFahrzeugeLaden() {
        this.fahrzeuge.forEach(f => {
            if (f.battery < 20) {
                f.battery = 100;
            }
        });
    }
}
exports.FlottenManager = FlottenManager;
//# sourceMappingURL=manager.js.map