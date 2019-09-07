var speedLimitMiles = 50;
console.log(speedLimitMiles);

var speedLimitKm = speedLimitMiles * 1.61;
console.log(speedLimitKm);

var speedFineMiles = (speedLimitMiles * 1.1) + 2;
console.log(speedFineMiles.toFixed(2));

var speedFineKm = speedFineMiles * 1.61;
console.log(speedFineKm.toFixed(2));