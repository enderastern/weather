const apiKey = `5557ba9b8680d172079f0dd37af6549a`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather-img")

async function chackWeather(city){
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
    let data = await response.json()

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Haze"){
        weatherImg.src = "img/mist.png"
    }else if (data.weather[0].main == "Clouds"){
        weatherImg.src = "img/clouds.png"
    }else if (data.weather[0].main == "Rain"){
        weatherImg.src = "img/rain.png"
    }else if (data.weather[0].main == "Snow"){
        weatherImg.src = "img/snow.png"
    }else if (data.weather[0].main == "Drizzle"){
        weatherImg.src = "img/drizzle.png"
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
    }
}

searchBtn.addEventListener("click", ()=>{
    chackWeather(searchBox.value)
})
