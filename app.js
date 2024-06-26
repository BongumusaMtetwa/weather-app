const apiKey = "496cb3565354fd5cbd9dbd45393ef6f2";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-area input");
const searchBtn = document.querySelector(".search-area button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await res.json();

    //update elements in the UI
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    //update images
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./src/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./src/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./src/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./src/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./src/images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./src/image/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
