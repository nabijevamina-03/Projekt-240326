"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EScooter = void 0;
const vehicle_1 = require("./vehicle");
// importieren die "Vorlage"
// EScooter ERBT alles von Vehicle, also id, name, battery, rent(), repair()
class EScooter extends vehicle_1.Vehicle {
    // diese Methode MUSS rein, weil sie abstract war
    pricePerMinute() {
        // Scooter kostet 15 Cent pro Minute
        return 0.15;
    }
}
exports.EScooter = EScooter;
//# sourceMappingURL=escooter.js.map