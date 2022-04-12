var apiKey = "bf427759ff67094eeac5d4fe62785bc5";

var citySearch = document.querySelector('.citySearch')



function text(){

fetch("https://api.openweathermap.org/data/2.5/onecall?lat=34&lon=65&units=imperial&appid=bf427759ff67094eeac5d4fe62785bc5", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});



fetch("http://api.openweathermap.org/geo/1.0/direct?=&q=miami&appid=bf427759ff67094eeac5d4fe62785bc5", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
}
text()