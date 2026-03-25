import { Vehicle } from "./vehicle";

export class FlottenManager {

  // Liste aller Fahrzeuge
  private fahrzeuge: Vehicle[] = [];

  // Fahrzeug hinzufügen
  fahrzeugHinzufuegen(fahrzeug: Vehicle) {
    this.fahrzeuge.push(fahrzeug);
  }

  // Fahrzeug entfernen über ID
  fahrzeugEntfernen(id: number) {
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