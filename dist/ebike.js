"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EBike = void 0;
const vehicle_1 = require("./vehicle");
// EBike erbt alles von Vehicle
class EBike extends vehicle_1.Vehicle {
    // Bike kostet 25 Cent pro Minute
    pricePerMinute() {
        return 0.25;
    }
}
exports.EBike = EBike;
//# sourceMappingURL=ebike.js.map