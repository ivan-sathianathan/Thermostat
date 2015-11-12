$(document).ready(function() {
  thermostat = new Thermostat();

  $("#increase").on("click", function() {thermostat.increase();
  $("#temperature").text(thermostat.temperature);});

  $("#decrease").on("click", function() {thermostat.decrease();
  $("#temperature").text(thermostat.temperature);});

  $("#reset").on("click", function() {thermostat.resetTemperature();
  $("#temperature").text(thermostat.temperature);});

  $("#switch_on").on("click", function() {thermostat.powerSavingOn();
  $("#power_saving_mode").text(thermostat.powerSavingMode);});

  $("#switch_off").on("click", function() {thermostat.powerSavingOff();
  $("#power_saving_mode").text(thermostat.powerSavingMode);});
});
