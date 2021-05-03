// Date Variables
var today = moment().format("MM/DD/YYYY");
var day1 = moment().add(1, "days").format("MM/DD/YYYY");
var day2 = moment().add(2, "days").format("MM/DD/YYYY");
var day3 = moment().add(3, "days").format("MM/DD/YYYY");
var day4 = moment().add(4, "days").format("MM/DD/YYYY");
var day5 = moment().add(5, "days").format("MM/DD/YYYY");

// Function to GET data from API
function weather() {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + city2 + "&appid=2e8607b62456c51a7a708a2c72eaa6bf";

    $.ajax({
        url: queryURL,
        method: "GET" 
    })
    
    .then(function(response) {

        $(".citylist").addClass("card");
        $(".citydata").addClass("card");
        $(".forecast").addClass("card");

        $("#date1").text(day1);
        $("#date2").text(day2);
        $("#date3").text(day3);
        $("#date4").text(day4);
        $("#date5").text(day5);

        $("#heading").text(response.name + " (" + today + ")");

        var list = $("<li>").text(response.name).addClass("list-group-item");
        $("ul").prepend(list);

        localStorage.setItem("prevSearch", response.name);

        var icon0 = JSON.stringify(response.weather[0].icon).slice(1,4);
        $("#icon").attr("src", "http://openweathermap.org/img/wn/" + icon0 + "@2x.png");    

        var lat = response.coord.lat;
        console.log(lat);
        var lon = response.coord.lon;
        console.log(lon);

        var queryURLCity5 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,&appid=2e8607b62456c51a7a708a2c72eaa6bf";

        $.ajax({
            url: queryURLCity5,
            method: "GET"
        })

        .then(function(response5) {
            // Current
            var tempK = response5.current.temp;
            var tempF = "Temperature: " + ((tempK - 273.15)*(9/5)+32).toFixed(1) + "\u00B0F";
            $("#tempFDisplay").text(tempF);
            var humidity = "Humidity: " + response5.current.humidity + "%";
            $("#humidityDisplay").text(humidity);
            var wind = "Wind Speed: " + response5.current.wind_speed + " MPH";
            $("#windDisplay").text(wind);
            var uvi = "UV Index: " + response5.current.uvi;
            $("#uviDisplay").text(uvi);

            // Day 1
            var tempK1 = response5.daily[1].temp.day;
            var tempF1 = "Temp: " + ((tempK1 - 273.15)*(9/5)+32).toFixed(1) + "\u00B0F";
            $("#tempFDisplay1").text(tempF1);
            var hum1 = "Humidity: " + response5.daily[1].humidity + "%";
            $("#humidityDisplay1").text(hum1);
            var icon1 = JSON.stringify(response5.daily[1].weather[0].icon).slice(1,4);
            $("#iconDisplay1").attr("src", "http://openweathermap.org/img/wn/" + icon1 + "@2x.png");

            // Day 2
            var tempK2 = response5.daily[2].temp.day;
            var tempF2 = "Temp: " + ((tempK2 - 273.15)*(9/5)+32).toFixed(1) + "\u00B0F";
            $("#tempFDisplay2").text(tempF2);
            var hum2 = "Humidity: " + response5.daily[2].humidity + "%";
            $("#humidityDisplay2").text(hum2);
            var icon2 = JSON.stringify(response5.daily[2].weather[0].icon).slice(1,4);
            $("#iconDisplay2").attr("src", "http://openweathermap.org/img/wn/" + icon2 + "@2x.png");

            // Day 3
            var tempK3 = response5.daily[3].temp.day;
            var tempF3 = "Temp: " + ((tempK3 - 273.15)*(9/5)+32).toFixed(1) + "\u00B0F";
            $("#tempFDisplay3").text(tempF3);
            var hum3 = "Humidity: " + response5.daily[3].humidity + "%";
            $("#humidityDisplay3").text(hum3);
            var icon3 = JSON.stringify(response5.daily[3].weather[0].icon).slice(1,4);
            $("#iconDisplay3").attr("src", "http://openweathermap.org/img/wn/" + icon3 + "@2x.png");

            // Day 4
            var tempK4 = response5.daily[4].temp.day;
            var tempF4 = "Temp: " + ((tempK4 - 273.15)*(9/5)+32).toFixed(1) + "\u00B0F";
            $("#tempFDisplay4").text(tempF4);
            var hum4 = "Humidity: " + response5.daily[4].humidity + "%";
            $("#humidityDisplay4").text(hum4);
            var icon4 = JSON.stringify(response5.daily[4].weather[0].icon).slice(1,4);
            $("#iconDisplay4").attr("src", "http://openweathermap.org/img/wn/" + icon4 + "@2x.png");

            // Day 5
            var tempK5 = response5.daily[5].temp.day;
            var tempF5 = "Temp: " + ((tempK5 - 273.15)*(9/5)+32).toFixed(1) + "\u00B0F";
            $("#tempFDisplay5").text(tempF5);
            var hum5 = "Humidity: " + response5.daily[5].humidity + "%";
            $("#humidityDisplay5").text(hum5);
            var icon5 = JSON.stringify(response5.daily[5].weather[0].icon).slice(1,4);
            $("#iconDisplay5").attr("src", "http://openweathermap.org/img/wn/" + icon5 + "@2x.png");
        });
    });
};

// Local Storage of last searched city
var entry = localStorage.getItem("prevSearch");

// If statement to check if user has previously searched data in local storage
if (entry != null) {
    
    city2 = "q=" + entry;
    weather();
}

// Click events to run the weather function
$("#zip").on("click", function() {
    event.preventDefault();

    var zip = $("#inputZip").val();

    if (zip.length === 5) {
        
        city2 = "zip=" + zip;
        weather();
    }

    else {
        alert("Error: Please enter 5 digit zip code!");
    }

    $("#inputZip").val("");
});    
    
$("#city").on("click", function() {
    event.preventDefault();

    var city = $("#inputCity").val();

    city2 = "q=" + city;

    weather();

    $("#inputCity").val("");
});
