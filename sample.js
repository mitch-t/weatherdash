var cities = ["Riverside", "Los Angeles"];

// Function for dumping the JSON content for each button into the div
function displayCityInfo() {
  var city = $(this).attr("data-name");
  var APIKey = "b37df135b7dd81fd24c6b34d70891108";
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?" +
    "q=" +
    city +
    "&appid=" +
    APIKey;

  //  $.ajax({
  //   url: queryURL,
  //    method: "GET",
  //  }).then(function (response) {
  //   $("#cities-view").text(JSON.stringify(response));
  // });
  //}
  $.ajax({
    url: queryURL,
    method: "GET",
  })

    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {
      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);
      var iconCode = response.weather[0].icon;
      var iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
      $(".icon").html("<img class = 'newIcon' src=" + iconUrl + ">");
      // Transfer content to HTML
      // Convert the temp to fahrenheit
      var tempF = (response.main.temp - 273.15) * 1.8 + 32;
      $(".city-weather").html("<h2>" + response.name + " </h2>");
      $(".tempF").text("Temperature (F) " + tempF.toFixed(2) + " F");
      $(".humidity").text("Humidity: " + response.main.humidity + " %");
      $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");

      // response.weather[0].icon

      // Log the data in the console as well
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + tempF);
    });
}
// Function for displaying city data
function renderButtons() {
  // Deleting the buttons prior to adding new cities

  $("#buttons-view").empty();

  // Looping through the array of movies
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

  // Adding the movie from the textbox to our array
  cities.push(city);
  console.log(city);

  // Calling renderButtons which handles the processing of our city
  renderButtons();
});

// Function for displaying the weather info
$(document).on("click", ".city", displayCityInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();
