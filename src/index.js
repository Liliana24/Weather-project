function formatDate(timestamp) {
  let date = new Date(timestamp)
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let dayIndex = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
  
    return `${day} ${hours}:${minutes}`;
  }
  
  let dateElement = document.querySelector("h4");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
function formatHours(timestamp) {
  let date = new Date(timestamp)
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let dayIndex = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
    let day = days[dayIndex];
    
  return `${hours}:${minutes}`;
}

function displayTemperature(response) {
let temperatureElement = document.querySelector("#degree");
let cityElement = document.querySelector("#city");
let humidityElement = document.querySelector("#humidity");
let descriptionElement = document.querySelector("#description");
let windElement = document.querySelector("#wind");
let iconElement = document.querySelector("#icon");
temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity + "%";
windElement.innerHTML = Math.round(response.data.wind.speed);
iconElement.setAttribute(
  "src", 
  `http://openweathermap.org/img/wn/${
    response.data.weather[0].icon}@2x.png`
);
iconElement.setAttribute("alt", response.data.weather[0].description);
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 6; index++) {
    forecast = response.data.list[index];
    forecastElement.innerHTML += `
    
    <div class="row">
      <div class="col-2">
       <p id="hours">
       ${formatHours(forecast.dt * 1000)}
       </p>
       <img 
       src ="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
       />
        <div class="temperatures">
       <strong>
          ${Math.round(forecast.main.temp_max)}°
           </strong> 
           ${Math.round(forecast.main.temp_min)}°
        </div>
      </div>
    </div>


`;
}
}

function search(city) {
  let apiKey = "61568445203fe59583ad84f212ca0045";  
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(displayForecast);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

search("New York");
 
 let form = document.querySelector("#search_city");
 form.addEventListener("submit", handleSubmit);