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
  
  function showTemperature(response) {
    console.log(response.data.name);
    document.querySelector("h1").innerHTML = response.data.name;
    document.querySelector("#degree").innerHTML = Math.round(
      response.data.main.temp
    );
  }
  
  function submitForm(event) {
    event.preventDefault();
    let apiKey = "955d3ec2ddb7dbaebd9db1a9e829cd75";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }
  
  let form = document.querySelector("form");
  form.addEventListener("click", submitForm);
  
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
  }
  