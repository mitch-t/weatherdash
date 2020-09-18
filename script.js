var cities = ["Riverside", "Los Angeles"];
// gets data for today's date from momment js
function getTodaysDate() {
  var currentDate = moment().format('llll');
  $("#currentDay").text(currentDate);
};
getTodaysDate();

function getTodaysDate1() {
  var currentDate1 = moment().add(1, 'days').calendar();  ;
  $("#currentDay1").text(currentDate1);
};
getTodaysDate1();

function getTodaysDate2() {
  var currentDate2 = moment().add(2, 'days').calendar();  ;
  $("#currentDay2").text(currentDate2);
};
getTodaysDate2();

function getTodaysDate3() {
  var currentDate3 = moment().add(3, 'days').calendar();  ;
  $("#currentDay3").text(currentDate3);
};
getTodaysDate3();

function getTodaysDate4() {
  var currentDate4 = moment().add(4, 'days').calendar();  ;
  $("#currentDay4").text(currentDate4);
};
getTodaysDate4();

function getTodaysDate5() {
  var currentDate5 = moment().add(5, 'days').calendar();  ;
  $("#currentDay5").text(currentDate5);
};
getTodaysDate5();

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

      var uvIndex =
        "https://api.openweathermap.org/data/2.5/uvi?appid=" +
        APIKey +
        "&lat=" +
        response.coord.lat +
        "&lon=" +
        response.coord.lon;
      $.ajax({
        url: uvIndex,
        method: "GET",
      }).then(function (UV) {
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
        var lowUV = 6;

        if (UV.value < lowUV) {
          "UV-index".attr({
            class: "low",
          });
        } else if (UV.value > lowUV) {
          "UV-index".attr({
            class: "high",
          });
        }
        //   console.log(UV)
      });

      // Log the data in the console as well
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
    });

  var forecastIndex =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=" +
    APIKey;
  $.ajax({
    url: forecastIndex,
    method: "GET",
  }).then(function (forecast) {
    var iconCodeF1 = forecast.list[5].weather[0].icon;
    var iconF1Url = `https://openweathermap.org/img/w/${iconCodeF1}.png`;
    $(".iconF1").html("<img class = 'newIcon' src=" + iconF1Url + ">");
    console.log(forecast);
    $(".f-date1").text(forecast.list[5].dt_txt);
    var ftempF = (forecast.list[5].main.temp - 273.15) * 1.8 + 32;
    //  console.log(forecast.list[6].main.temp)
    $(".f-tempF1").text("Temperature (F) " + ftempF.toFixed(2));
    $(".f-humidity1").text(
      "Humidity: " + forecast.list[5].main.humidity + " %"
    );
    //next day
    var iconCodeF2 = forecast.list[13].weather[0].icon;
    var iconF2Url = `https://openweathermap.org/img/w/${iconCodeF2}.png`;
    $(".iconF2").html("<img class = 'newIcon' src=" + iconF2Url + ">");
    $(".f-date2").text(forecast.list[13].dt_txt);
    var ftempF1 = (forecast.list[13].main.temp - 273.15) * 1.8 + 32;
    $(".f-tempF2").text("Temperature (F) " + ftempF1.toFixed(2));
    $(".f-humidity2").text(
      "Humidity: " + forecast.list[13].main.humidity + " %"
    );
    //next day
    var iconCodeF3 = forecast.list[21].weather[0].icon;
    var iconF3Url = `https://openweathermap.org/img/w/${iconCodeF3}.png`;
    $(".iconF3").html("<img class = 'newIcon' src=" + iconF3Url + ">");
    $(".f-date3").text(forecast.list[21].dt_txt);
    var ftempF2 = (forecast.list[21].main.temp - 273.15) * 1.8 + 32;
    $(".f-tempF3").text("Temperature (F) " + ftempF2.toFixed(2));
    $(".f-humidity3").text(
      "Humidity: " + forecast.list[21].main.humidity + " %"
    );
    //next day
    var iconCodeF4 = forecast.list[29].weather[0].icon;
    var iconF4Url = `https://openweathermap.org/img/w/${iconCodeF4}.png`;
    $(".iconF4").html("<img class = 'newIcon' src=" + iconF4Url + ">");
    $(".f-date4").text(forecast.list[29].dt_txt);
    var ftempF3 = (forecast.list[29].main.temp - 273.15) * 1.8 + 32;
    $(".f-tempF4").text("Temperature (F) " + ftempF3.toFixed(2));
    $(".f-humidity4").text(
      "Humidity: " + forecast.list[29].main.humidity + " %"
    );
    //next day
    var iconCodeF5 = forecast.list[37].weather[0].icon;
    var iconF5Url = `https://openweathermap.org/img/w/${iconCodeF5}.png`;
    $(".iconF5").html("<img class = 'newIcon' src=" + iconF5Url + ">");
    $(".f-date5").text(forecast.list[37].dt_txt);
    var ftempF4 = (forecast.list[37].main.temp - 273.15) * 1.8 + 32;
    $(".f-tempF5").text("Temperature (F) " + ftempF4.toFixed(2));
    $(".f-humidity5").text(
      "Humidity: " + forecast.list[37].main.humidity + " %"
    );
  });
}
function grabCity() {
  var city = $(this).attr("data-name");
  displayCityInfo(city);
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
  // Adding the city from the textbox to our array
  cities.push(city);
  
  // Calling renderButtons which handles the processing of our city
  renderButtons();
});

// Function for displaying the weather info
$(document).on("click", ".city", grabCity);

// Calling the renderButtons function to display the initial buttons
renderButtons();
