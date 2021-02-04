function formatDate(date) {
    let currentHour = date.getHours();
    if (currentHour < 10) {
      currentHour = `0${currentHour}`;
    }
    let currentMinutes = date.getMinutes();
    if (currentMinutes < 10) {
      currentMinutes = `0${currentMinutes}`;
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
  
    return `${day} ${currentHour}:${currentMinutes}`;
  }
  
  let dateElement = document.querySelector("h4");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
function displayTemperature(response) {
let temperatureElement = document.querySelector("#degree");
let cityElement = document.querySelector("#city");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let iconElement = document.querySelector("#icon");
temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
humidityElement.innerHTML = response.data.main.humidity + "%";
windElement.innerHTML = Math.round(response.data.wind.speed);
iconElement.setAttribute(
  "src", 
  `http://openweathermap.org/img/wn/${
    response.data.weather[0].icon}@2x.png`
);
iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let apiKey = "61568445203fe59583ad84f212ca0045";  
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(displayTemperature)
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

search("New York");
 


 let form = document.querySelector("#search_city");
 form.addEventListener("submit", handleSubmit);