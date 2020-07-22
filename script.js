    var today = moment().format("MM/DD/YYYY");
    var day1 = moment().add(1, "days").format("MM/DD/YYYY");
    var day2 = moment().add(2, "days").format("MM/DD/YYYY");
    var day3 = moment().add(3, "days").format("MM/DD/YYYY");
    var day4 = moment().add(4, "days").format("MM/DD/YYYY");
    var day5 = moment().add(5, "days").format("MM/DD/YYYY");
    
    console.log(today);

    $("#zip").on("click", function() {
        event.preventDefault();

        var entry = $("#inputZip").val();

        console.log(entry);

        $(".citylist").addClass("card");
        $(".citydata").addClass("card");
        $(".forecast").addClass("card");

        $("#date1").text(day1);
        $("#date2").text(day2);
        $("#date3").text(day3);
        $("#date4").text(day4);
        $("#date5").text(day5);

        if (entry.length === 5) {

            var queryURLZip = "http://api.openweathermap.org/data/2.5/weather?zip=" + entry + "&appid=2e8607b62456c51a7a708a2c72eaa6bf";

            $.ajax({
                url: queryURLZip,
                method: "GET" 
            })

            .then(function(response) {

                var city2 = response.name;

                $("#heading").text(city2 + " (" + today + ")");

                var list = $("<li>").text(city2).addClass("list-group-item");
                $("ul").prepend(list);
                
                localStorage.setItem("prevSearch", city2);

                var lat = response.coord.lat

                var lon = response.coord.lon

                console.log(lat);
                console.log(lon);
                console.log(city2);
               
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
    
                    // Day 2
                    var tempK2 = response5.daily[2].temp.day;
                    var tempF2 = "Temp: " + ((tempK2 - 273.15)*(9/5)+32).toFixed(1) + "\u00B0F";
                    $("#tempFDisplay2").text(tempF2);
                    var hum2 = "Humidity: " + response5.daily[2].humidity + "%";
                    $("#humidityDisplay2").text(hum2);
    
                    // Day 3
                    var tempK3 = response5.daily[3].temp.day;
                    var tempF3 = "Temp: " + ((tempK3 - 273.15)*(9/5)+32).toFixed(1) + "\u00B0F";
                    $("#tempFDisplay3").text(tempF3);
                    var hum3 = "Humidity: " + response5.daily[3].humidity + "%";
                    $("#humidityDisplay3").text(hum3);
    
                    // Day 4
                    var tempK4 = response5.daily[4].temp.day;
                    var tempF4 = "Temp: " + ((tempK4 - 273.15)*(9/5)+32).toFixed(1) + "\u00B0F";
                    $("#tempFDisplay4").text(tempF4);
                    var hum4 = "Humidity: " + response5.daily[4].humidity + "%";
                    $("#humidityDisplay4").text(hum4);
    
                    // Day 5
                    var tempK5 = response5.daily[5].temp.day;
                    var tempF5 = "Temp: " + ((tempK5 - 273.15)*(9/5)+32).toFixed(1) + "\u00B0F";
                    $("#tempFDisplay5").text(tempF5);
                    var hum5 = "Humidity: " + response5.daily[5].humidity + "%";
                    $("#humidityDisplay5").text(hum5);
    
                    console.log(tempF1);
                    console.log(hum1);
                    console.log(tempF2);
                    console.log(hum2);
                    console.log(tempF3);
                    console.log(hum3);
                    console.log(tempF4);
                    console.log(hum4);
                    console.log(tempF5);
                    console.log(hum5);
    
                    console.log(tempF);
                    console.log(humidity);
                    console.log(wind);
                    console.log(uvi);
                });
            });

        }

        else {
            alert("Error: Please enter 5 digit zip code!");
        }

        $("#inputZip").val("");

    });    
        
    $("#city").on("click", function() {
        event.preventDefault();

        var city = $("#inputCity").val();

        $(".citylist").addClass("card");
        $(".citydata").addClass("card");
        $(".forecast").addClass("card");

        $("#date1").text(day1);
        $("#date2").text(day2);
        $("#date3").text(day3);
        $("#date4").text(day4);
        $("#date5").text(day5);
        
        var queryURLCity = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2e8607b62456c51a7a708a2c72eaa6bf";

        $.ajax({
            url: queryURLCity,
            method: "GET" 
        })

        .then(function(response) {

            var city2 = response.name;

            $("#heading").text(city2 + " (" + today + ")");

            var list = $("<li>").text(city2).addClass("list-group-item");
            $("ul").prepend(list);

            localStorage.setItem("prevSearch", city2);
                
            

            var lat = response.coord.lat;

            var lon = response.coord.lon;

            console.log(lat);
            console.log(lon);
            console.log(city2);
          
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

                // Day 2
                var tempK2 = response5.daily[2].temp.day;
                var tempF2 = "Temp: " + ((tempK2 - 273.15)*(9/5)+32).toFixed(1) + "\u00B0F";
                $("#tempFDisplay2").text(tempF2);
                var hum2 = "Humidity: " + response5.daily[2].humidity + "%";
                $("#humidityDisplay2").text(hum2);

                // Day 3
                var tempK3 = response5.daily[3].temp.day;
                var tempF3 = "Temp: " + ((tempK3 - 273.15)*(9/5)+32).toFixed(1) + "\u00B0F";
                $("#tempFDisplay3").text(tempF3);
                var hum3 = "Humidity: " + response5.daily[3].humidity + "%";
                $("#humidityDisplay3").text(hum3);

                // Day 4
                var tempK4 = response5.daily[4].temp.day;
                var tempF4 = "Temp: " + ((tempK4 - 273.15)*(9/5)+32).toFixed(1) + "\u00B0F";
                $("#tempFDisplay4").text(tempF4);
                var hum4 = "Humidity: " + response5.daily[4].humidity + "%";
                $("#humidityDisplay4").text(hum4);

                // Day 5
                var tempK5 = response5.daily[5].temp.day;
                var tempF5 = "Temp: " + ((tempK5 - 273.15)*(9/5)+32).toFixed(1) + "\u00B0F";
                $("#tempFDisplay5").text(tempF5);
                var hum5 = "Humidity: " + response5.daily[5].humidity + "%";
                $("#humidityDisplay5").text(hum5);

                console.log(tempF1);
                console.log(hum1);
                console.log(tempF2);
                console.log(hum2);
                console.log(tempF3);
                console.log(hum3);
                console.log(tempF4);
                console.log(hum4);
                console.log(tempF5);
                console.log(hum5);

                console.log(tempF);
                console.log(humidity);
                console.log(wind);
                console.log(uvi);

            });
        });

        


        $("#inputCity").val("");

    });