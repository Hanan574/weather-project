let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();

let p = document.querySelector(".cities");
p.innerHTML = `${day},  ${hour}:${minute}`;

function weather(response) {
  console.log(response);
  document.querySelector(".country").innerHTML = response.data.name;

  let temp = Math.round(response.data.main.temp);
  document.querySelector(".city").innerHTML = `${temp}°C`;

  document.querySelector(
    ".windy"
  ).innerHTML = `Description : ${response.data.weather[0].main}`;

  document.querySelector(
    ".humid"
  ).innerHTML = `Humidity: ${response.data.main.humidity}`;
}

function lookUp(event) {
  event.preventDefault();
  let apiKey = "2e4de2b11b8a6f23faaa2d921b3e9a8f";
  let city = document.querySelector("#search-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(weather);
}

let form = document.querySelector("form");
form.addEventListener("submit", lookUp);
