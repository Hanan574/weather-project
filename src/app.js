let city = "London";
let apiKey = "2e4de2b11b8a6f23faaa2d921b3e9a8f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
function weather(response) {
  console.log(response);
  let temp = Math.round(response.data.main.temp);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${temp}°C`;

  let wind = document.querySelector(".wind");
  wind.innerHTML = response.data.weather[0].main;

  let humid = document.querySelector(".humidity");
  humid.innerHTML = response.data.main.humidity;

  let cities = document.querySelector("h1");
  cities.innerHTML = `${city}`;
}

axios.get(apiUrl).then(weather);
