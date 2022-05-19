let submitBtn = document.getElementById("submitt-Btn");
let currentWeat = document.getElementById('todaywht')
var apiKey = "bf427759ff67094eeac5d4fe62785bc5";
let weatherData = 0;
let temp = document.getElementById('temp')
let wind = document.getElementById('wind');
let humid  = document.getElementById('humid');
var city = document.getElementById("citySearch");
let uv = document.getElementById('uv');
var cityName = city.value.trim();

let day1temp = document.getElementById('day1temp');
let day1wind = document.getElementById('day1wind');
let day1humid = document.getElementById('day1humid');
let day2temp = document.getElementById('day2temp');
let day2wind = document.getElementById('day2wind');
let day2humid = document.getElementById('day2humid');
let day3temp = document.getElementById('day3temp');
let day3wind = document.getElementById('day3wind')
let day3humid = document.getElementById('day3humid');
let day4temp = document.getElementById('day4temp');
let day4wind = document.getElementById('day4wind')
let day4humid = document.getElementById('day4humid')
let day5temp = document.getElementById('day5temp');
let day5wind = document.getElementById('day5wind');
let day5humid= document.getElementById('day5humid');
var dayjsObject = dayjs();
var crntDate = dayjsObject.format("MM DD YYYY");
let currentDate = document.getElementById('crntday');
let dayOne  = document.getElementById('day1date');
let dayTwo  = document.getElementById('day2date');
let dayThree  = document.getElementById('day3date');
let dayFour  = document.getElementById('day4date');
let dayFive  = document.getElementById('day5date');
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function text(lat, lon) {
	let dataUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=bf427759ff67094eeac5d4fe62785bc5`;
	console.log(dataUrl);

	fetch(dataUrl).then((response) => {
		return response.json();
	})
  .then((response)=>{
    console.log(response);
	
	temp.innerHTML = 'temperature: '+response.current.temp;
	wind.innerHTML = 'wind:'+response.current.wind_speed;
	humid.innerHTML = 'humidity:'+response.current.humidity;
	uv.innerHTML = 'uvi:'+response.current.uvi;


	day1temp.innerHTML = 'temperature:'+response.daily[1].temp.day;
	day1wind.innerHTML = 'wind:'+response.daily[1].wind_speed;
	day1humid.innerHTML = 'humidity:'+response.daily[1].humidity; 
	day2temp.innerHTML = 'temperature:'+response.daily[2].temp.day; 
	day2wind.innerHTML = 'wind:'+response.daily[2].wind_speed;
	day2humid.innerHTML = 'humidity:'+response.daily[2].humidity; 
	day3temp.innerHTML = 'temperature'+response.daily[3].temp.day; 
	day3wind.innerHTML = 'wind:'+response.daily[3].wind_speed; 
	day3humid.innerHTML = 'humidity:'+response.daily[3].humidity; 
	day4temp.innerHTML = 'temperature'+response.daily[4].temp.day; 	
	day4wind.innerHTML = 'wind:'+response.daily[4].wind_speed; 
	day4humid.innerHTML = 'humidity:'+response.daily[4].humidity; 
	day5temp.innerHTML = 'temperature:'+response.daily[5].temp.day; 
	day5wind.innerHTML = 'wind:'+response.daily[5].wind_speed; 
	day5humid.innerHTML = 'humidity:'+response.daily[5].humidity;
	currentDate.innerHTML = crntDate;
	dayOne.innerHTML = dayjs().add(1,"day").format("MM DD YYYY");
	dayTwo.innerHTML = dayjs().add(2,"day").format("MM DD YYYY");
	dayThree.innerHTML = dayjs().add(3,"day").format("MM DD YYYY");
	dayFour.innerHTML = dayjs().add(4,"day").format("MM DD YYYY");
	dayFive.innerHTML = dayjs().add(5,"day").format("MM DD YYYY");
});
}

function getData(cityName) {
	let weatherApiurl = `https://api.openweathermap.org/geo/1.0/direct?=&q=${cityName}&appid=bf427759ff67094eeac5d4fe62785bc5`;
	// citySearch.textContent = document.getElementById('citySearch')
	fetch(weatherApiurl)
		.then((response) => {
			return response.json();
		})
		.then((regularResponse) => {
			var lat = regularResponse[0].lat;
			var lon = regularResponse[0].lon;
			console.log(lat, lon);
			text(lat, lon);
			
		});
}

function searchBar(event) {
	event.preventDefault();
	var citySearch = document.getElementById("citySearch");
	let userInput = citySearch.value.trim();

	getData(userInput);
	console.log(userInput);
	
}
submitBtn.addEventListener("click", searchBar);
