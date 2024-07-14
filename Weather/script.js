// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '66bdf737acmsh073b87a9ad91365p1ea5a1jsn755c9de2c3f7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response=>response.json())
.then(response =>{

    console.log(response)
    // cloud_pct.innerHTML=response.cloud_pct
    temp.innerHTML=response.temp
    temp2.innerHTML=response.temp
    // temp3.innerHTML=response.temp
    feels_like.innerHTML=response.feels_like
    // feels_like3.innerHTML=response.feels_like
    humidity.innerHTML=response.humidity
    humidity2.innerHTML=response.humidity
    // humidity3.innerHTML=response.humidity
    min_temp.innerHTML=response.min_temp
    // min_temp3.innerHTML=response.min_temp
    max_temp.innerHTML=response.max_temp
    wind_speed.innerHTML=response.wind_speed
    wind_speed2.innerHTML=response.wind_speed
    wind_degrees.innerHTML=response.wind_degrees
    sunrise.innerHTML=response.sunrise
    sunset.innerHTML=response.sunset
})
.catch(err=>console.error(err));
}
submit.addEventListener("click" ,(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Kanpur")
// getWeather("Mumbai")
// const getWeather1=(Mumbai)=>{
//     cityName.innerHTML=city
// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
// .then(response=>response.json())
// .then(response =>{

//     console.log(response)
//     // cloud_pct.innerHTML=response.cloud_pct
//     // temp.innerHTML=response.temp
//     // temp2.innerHTML=response.temp
//     temp3.innerHTML=response.temp
//     feels_like.innerHTML=response.feels_like
//     // feels_like3.innerHTML=response.feels_like
//     humidity.innerHTML=response.humidity
//     humidity2.innerHTML=response.humidity
//     // humidity3.innerHTML=response.humidity
//     min_temp.innerHTML=response.min_temp
//     // min_temp3.innerHTML=response.min_temp
//     max_temp.innerHTML=response.max_temp
//     wind_speed.innerHTML=response.wind_speed
//     wind_speed2.innerHTML=response.wind_speed
//     wind_degrees.innerHTML=response.wind_degrees
//     sunrise.innerHTML=response.sunrise
//     sunset.innerHTML=response.sunset
// })
// .catch(err=>console.error(err));
// }
// getWeather1("Mumbai");

