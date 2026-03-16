let searchInput = document.querySelector('.text');
let btn = document.querySelector('.btn');
let city = document.querySelector('.city');
let country = document.querySelector('.country');
let date = document.querySelector('.date');
let temp = document.querySelector('.temp');
let condition = document.querySelector('.condition');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');
let icon = document.querySelector('.icon');
let lat = document.querySelector('.lat');
let lon = document.querySelector('.lon');
let cloud = document.querySelector('.cloud');
let tz_id = document.querySelector('.tz_id');
let wind_degree = document.querySelector('.wind_degree');
let wind_mph = document.querySelector('.wind_mph');


function inputTake(data){
  city.textContent = data.location.name;
  country.textContent = data.location.country;
  date.textContent = data.location.localtime;
  icon.src = "https:" + data.current.condition.icon;
  temp.textContent = data.current.temp_c + "°C";
  condition.textContent = data.current.condition.text;
  humidity.textContent = data.current.humidity + "%";
  wind.textContent = data.current.wind_kph + " kph";
  lat.textContent = data.location.lat;
  lon.textContent = data.location.lon;
  cloud.textContent = data.current.cloud;
  tz_id.textContent = data.location.tz_id;
  wind_degree.textContent = data.current.wind_degree + "°C";
  wind_mph.textContent = data.current.wind_mph + " mph";
}

function loadApi(){
    let cityQuery = searchInput.value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=a4c5a28b854646f086d63906250912&q=${cityQuery}&aqi=no`)
    .then((response) => response.json())
    .then((data) =>{
      inputTake(data);
      searchInput.value = "";
    })
    .catch((error) =>{
console.log(error)
alert("City not found or API error");
})
}
btn.addEventListener('click',loadApi);