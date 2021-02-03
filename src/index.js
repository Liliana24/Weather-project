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
  
 let apiKey = "61568445203fe59583ad84f212ca0045";