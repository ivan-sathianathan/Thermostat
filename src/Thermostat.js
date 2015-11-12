function Thermostat() {

  this.temperature = 20;
  this.powerSavingMode = true;
  this.minimumTemperature = 10;
  this.maximumTemperature = 32;
  this.powerSavingModeTemperature = 25;
  var apiTemp;
}

  Thermostat.prototype.increase = function () {
    if (this.powerSavingMode === true && this.temperature === this.powerSavingModeTemperature) {
      throw "Cannot increase temperature powersave mode on";
    } else if (this.powerSavingMode === false && this.temperature === this.maximumTemperature){
      throw "Cannot increase temperature beyond maximum";
    } else{
    this.temperature += 1;
    }
  };

  Thermostat.prototype.decrease = function () {
    if (this.temperature === this.minimumTemperature) {
      throw "Cannot decrease temperature beyond minimum";}
    else {
      this.temperature -= 1;}
  };

  Thermostat.prototype.powerSaving = function () {
    this.powerSavingMode = !this.powerSavingMode;
  };

  Thermostat.prototype.resetTemperature = function () {
    this.temperature = 20;
  };

  Thermostat.prototype.energyUsage = function () {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature > 25) {
      return "high-usage";
    } else {
      return "medium-usage";
    }























  };
