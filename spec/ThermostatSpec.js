describe("Thermostat", function() {

  var temperature;
  var thermostat;
  var powerSavingMode;
  var minimumTemperature;
  var maximumTemperature;
  var poweSavingModeTemperature;


  beforeEach( function() {
    thermostat = new Thermostat();
    minimumTemperature = thermostat.minimumTemperature;
  });

  it("has a default temperature of 20 degrees", function() {
    expect(thermostat.temperature).toBe(20);
  });

  it("can increase the temperature", function() {
    thermostat.increase();
    expect(thermostat.temperature).toBe(21);
  });

  it("can decrease the temperature", function() {
    thermostat.decrease();
    expect(thermostat.temperature).toBe(19);
  });

  it("has a minimum temperature", function() {
    thermostat.temperature = minimumTemperature;
    expect(function(){ thermostat.decrease(); }).toThrow("Cannot decrease temperature beyond minimum");
  });

  it("should have power saving mode on", function() {
    thermostat.powerSavingOn();
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it("should have power saving mode off", function() {
    thermostat.powerSavingOff();
    expect(thermostat.powerSavingMode).toBe(false);
  });

  it("should set maximum temp of 25 degrees if PSM is on", function () {
    thermostat.temperature = 25;
    expect(function(){ thermostat.increase(); }).toThrow("Cannot increase temperature powersave mode on");
  });

  it("should set maximum temp of 32 degrees if PSM is off", function () {
    thermostat.powerSavingOff();
    thermostat.temperature = 32;
    expect(function(){ thermostat.increase(); }).toThrow("Cannot increase temperature beyond maximum");
  });

  it("should set temperature to 20 degrees when reset", function() {
    thermostat.temperature = 25;
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20);
  });

  it("should be green if under 18 degrees", function() {
    thermostat.temperature = 15;
    expect(thermostat.colour()).toEqual("green");
  });

  it("should be yellow if between 18 and 25 degrees", function() {
    thermostat.temperature = 20;
    expect(thermostat.colour()).toEqual("yellow");
  });

  it("should be red if over 25 degrees", function() {
    thermostat.temperature = 30;
    expect(thermostat.colour()).toEqual("red");
  });

});
