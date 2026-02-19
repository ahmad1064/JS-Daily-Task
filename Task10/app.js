const apiKey = "b47bbacafe9a3c05636775e817829e08";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
         let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "./images/clouds.png";
    } else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "./images/rain.png";
    } else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
    } else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "./images/mist.png";
    }

    console.log(data.weather[0].main);


    document.querySelector(".weather").style.display = "block";
}
    }
   

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
