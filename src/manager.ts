import { Vehicle } from "./vehicle";

export class FlottenManager {

  // Liste aller Fahrzeuge
  private fahrzeuge: Vehicle[] = [];

  // Fahrzeug hinzufügen
  fahrzeugHinzufuegen(fahrzeug: Vehicle) {
    this.fahrzeuge.push(fahrzeug);
  }

  // Fahrzeug nach ID finden
  fahrzeugFinden(id: number): Vehicle | undefined {
    return this.fahrzeuge.find(f => f.id === id);
}

  // Fahrzeug entfernen über ID
  fahrzeugEntfernen(id: number) {
    this.fahrzeuge = this.fahrzeuge.filter(f => f.id !== id);
  }

  // Alle Fahrzeuge zurückgeben
  alleFahrzeugeAnzeigen() {
    return this.fahrzeuge;
  }

  // *Schöne Ausgabe 
  alleFahrzeugeAusgeben() {
  this.fahrzeuge.forEach(f => {
    console.log(f.getStatus());
  });
}

  // Nur verfügbare Fahrzeuge (nicht in Wartung)
  verfuegbareFahrzeuge() {
    return this.fahrzeuge.filter(f => !f.inMaintenance);
  }

  // *Alle Fahrzeuge mieten 
  alleFahrzeugeMieten() {
    this.fahrzeuge.forEach(f => {
      console.log(`\nVersuche ${f.name} zu mieten:`);
      f.rent();
    });
  }

  // Alle Fahrzeuge unter 20% laden
  leereFahrzeugeLaden() {
    this.fahrzeuge.forEach(f => {
      if (f.battery < 20) {
        f.battery = 100;
        console.log(`${f.name} wurde geladen!`);
      }
    });
  }
}