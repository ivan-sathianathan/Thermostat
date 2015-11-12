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
      $("#switch").text("turn on"); }
    });

    updateLocalWeather("london");

    $("#location_form").submit(function(event){
      updateLocalWeather($("#location").val());
      event.preventDefault();
    })


    function _convertKtoC(kelvins){
      return Math.round(kelvins - 273.15);
    };

    function showTempeature(resp) {
      var apiTemp = _convertKtoC(resp.main.temp);
      $("#weatherTest").text(apiTemp);
    };

    function updateLocalWeather(location){
      var url = "http://api.openweathermap.org/data/2.5/weather";
      var city = "q=" + location
      var appID = "appid=5d80c46b555484695a8ba3f402702dd7";
      var data = city +'&' + appID;
      $.getJSON(url, data, showTempeature);
    };


    function updateTemperature() {
      $('#temperature').text(thermostat.temperature);
      if(thermostat.energyUsage() === 'low-usage') {
        $('#temperature').css('color','green');
    } else if (thermostat.energyUsage() === 'high-usage') {
        $('#temperature').css('color','blue');
    } else {
        $('#temperature').css('color','red');}
    }
});
