
//CONSTANTS
BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q='
API_KEY = '043c3f8d863dc027ae353d81dbf2dfd3'

//VARIABLES


//CACHED ELEMENT REFERENCES
const $weatherFor = $('#weatherFor');
const $temperature = $('#temperature');
const $feelsLike = $('#feelsLike');
const $weather = $('#weather');
const $input = $('input[type="text"]')

//EVENT LISTENERS
$form.on('submit', handleSubmit);


//FUNCTIONS

function handleSubmit(evt) {
    evt.preventDefault();

    const currWeather = $input.val();
    console.log(currWeather);


//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

$.ajax(`${BASE_URL}${input}&appid=${API_KEY}`)
    .then(function (data) {
        
        render();
    }, function (error) {
        console.log(error);
    });

}

function render() {
    
}