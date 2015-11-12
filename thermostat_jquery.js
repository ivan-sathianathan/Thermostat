$(document).ready(function() {
  thermostat = new Thermostat();

  $("#increase").click(function() {thermostat.increase();
  updateTemperature();});

  $("#decrease").click(function() {thermostat.decrease();
  updateTemperature();});

  $("#reset").click(function() {
    thermostat.resetTemperature();
  updateTemperature();});

  $("#switch").text("turn off");

  $("#switch").click(function(){
    thermostat.powerSaving();
    if (thermostat.powerSavingMode === true){
      $("#switch").text("turn off");}
    else {
      $("#switch").text("turn on") }
    })

    function updateTemperature() {
      $('#temperature').text(thermostat.temperature);
      if(thermostat.energyUsage() === 'low-usage') {
        $('#temperature').css('color','green')
    } else if (thermostat.energyUsage() === 'high-usage') {
        $('#temperature').css('color','blue')
    } else {
        $('#temperature').css('color','red')}
    };
});
