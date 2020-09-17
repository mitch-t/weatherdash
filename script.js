var cities = ["Riverside", "Los Angeles"];

// Function for dumping the JSON content for each button into the div
function displayCityInfo(city) {
  
  var APIKey = "b37df135b7dd81fd24c6b34d70891108";
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?" +
    "q=" +
    city +
    "&appid=" +
    APIKey;

  $.ajax({
    url: queryURL,
    method: "GET",
  })

    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {
     
      console.log(queryURL);

      // Log the resulting object
      console.log(response);
 
   var uvIndex= "https://api.openweathermap.org/data/2.5/uvi?appid="+APIKey +"&lat="+response.coord.lat+"&lon="+response.coord.lon;
      $.ajax({
        url: uvIndex,
        method: "GET",
      })
      .then(function (UV) {
        var iconCode = response.weather[0].icon;
        var iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
        $(".icon").html("<img class = 'newIcon' src=" + iconUrl + ">");
        // Transfer content to HTML
        // Convert the temp to fahrenheit
        var tempF = (response.main.temp - 273.15) * 1.8 + 32;
        $(".city-weather").html("<h2>" + response.name + " </h2>");
        $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
        $(".humidity").text("Humidity: " + response.main.humidity + " %");
        $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
        $(".UV-index").text("UV: " + UV.value);
       
     //   console.log(UV)
      }) 
      
   
      // Log the data in the console as well
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      
    });
  
 var forecastIndex= "https://api.openweathermap.org/data/2.5/forecast?q="
 +city + "&appid=" + APIKey;   
  $.ajax({
      url: forecastIndex,
       method: "GET",
      })
      .then(function(forecast) {
        var iconCodeF1 = forecast.list[7].weather[0].icon;
        var iconF1Url = `https://openweathermap.org/img/w/${iconCodeF1}.png`;
        $(".iconF1").html("<img class = 'newIcon' src=" + iconF1Url + ">");
        console.log(forecast);
        $(".f-date1").text(forecast.list[7].dt_txt);
        var ftempF = (forecast.list[7].main.temp - 273.15) * 1.8 + 32;
      //  console.log(forecast.list[6].main.temp)
        $(".f-tempF1").text("High Temperature (F) "+ftempF.toFixed(2));
        $(".f-humidity1").text("Humidity: " + forecast.list[7].main.humidity + " %");
        //next day
        var iconCodeF2 = forecast.list[15].weather[0].icon;
        var iconF2Url = `https://openweathermap.org/img/w/${iconCodeF2}.png`;
        $(".iconF2").html("<img class = 'newIcon' src=" + iconF2Url + ">");
        $(".f-date2").text(forecast.list[15].dt_txt);
        var ftempF1 = (forecast.list[15].main.temp - 273.15) * 1.8 + 32;
        $(".f-tempF2").text("High Temperature (F) "+ftempF1.toFixed(2));
        $(".f-humidity2").text("Humidity: " + forecast.list[15].main.humidity + " %");
        //next day
        var iconCodeF3 = forecast.list[23].weather[0].icon;
        var iconF3Url = `https://openweathermap.org/img/w/${iconCodeF3}.png`;
        $(".iconF3").html("<img class = 'newIcon' src=" + iconF3Url + ">");
        $(".f-date3").text(forecast.list[23].dt_txt);
        var ftempF2 = (forecast.list[23].main.temp - 273.15) * 1.8 + 32;
        $(".f-tempF3").text("High Temperature (F) "+ftempF2.toFixed(2));
        $(".f-humidity3").text("Humidity: " + forecast.list[23].main.humidity + " %");
        //next day
        var iconCodeF4 = forecast.list[31].weather[0].icon;
        var iconF4Url = `https://openweathermap.org/img/w/${iconCodeF4}.png`;
        $(".iconF4").html("<img class = 'newIcon' src=" + iconF4Url + ">");
        $(".f-date4").text(forecast.list[31].dt_txt);
        var ftempF3 = (forecast.list[31].main.temp - 273.15) * 1.8 + 32;
        $(".f-tempF4").text("High Temperature (F) "+ftempF3.toFixed(2));
        $(".f-humidity4").text("Humidity: " + forecast.list[31].main.humidity + " %");
        //next day
        var iconCodeF5 = forecast.list[39].weather[0].icon;
        var iconF5Url = `https://openweathermap.org/img/w/${iconCodeF5}.png`;
        $(".iconF5").html("<img class = 'newIcon' src=" + iconF5Url + ">");
        $(".f-date5").text(forecast.list[39].dt_txt);
        var ftempF4 = (forecast.list[39].main.temp - 273.15) * 1.8 + 32;
        $(".f-tempF5").text("High Temperature (F) "+ftempF4.toFixed(2));
        $(".f-humidity5").text("Humidity: " + forecast.list[39].main.humidity + " %");
      })
    }
function grabCity(){
  var city = $(this).attr("data-name");
  displayCityInfo(city) ;
}
// Function for displaying city data
function renderButtons() {
  // Deleting the buttons prior to adding new cities

  $("#buttons-view").empty();

  // Looping through the array of cities
  for (var i = 0; i < cities.length; i++) {
    // Then dynamically generating buttons for each city in the array

    var a = $("<button>");

    a.addClass("city");
    // Adding a data-attribute
    a.attr("data-name", cities[i]);
    // Providing the initial button text
    a.text(cities[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where one button is clicked
$("#search-city").on("click", function (event) {
  event.preventDefault();


  // This line grabs the input from the textbox
  var city = $("#city-input").val().trim();
displayCityInfo(city); 
  // Adding the movie from the textbox to our array
  cities.push(city);
  console.log(city);

  // Calling renderButtons which handles the processing of our city
  renderButtons();
});

// Function for displaying the weather info
$(document).on("click", ".city", grabCity);

// Calling the renderButtons function to display the initial buttons
renderButtons();
