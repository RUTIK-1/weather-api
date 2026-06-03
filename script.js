// use const kem ke valu change nathi thva ni.
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');


const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "b28428022a890f49c4432b2376e92c3f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "pics/cloud.png";
            
         document.body.style.background =
        'linear-gradient(135deg,#bdc3c7,#2c3e50)';
            break;
        case 'Clear':
            weather_img.src = "pics/clear.png";
        
        document.body.style.background =
        'linear-gradient(135deg,#f6d365,#fda085)';
            break;

        case 'Rain':
            weather_img.src = "pics/rain.png";
        
        document.body.style.background =
        'linear-gradient(135deg,#4b79a1,#283e51)';
            break;

        case 'Mist':
            weather_img.src = "pics/mist.png";
                    
        document.body.style.background =
        'linear-gradient(135deg,#757F9A,#D7DDE8)';
            break;

        case 'Snow':
            weather_img.src = "pics/snow.png";
        
        document.body.style.background =
        'linear-gradient(135deg,#e6dada,#274046)';
            break;

    }

    console.log(weather_data);
}

// jyare be search button upar click thy tyre j weather show thy
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});

inputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkWeather(inputBox.value);
    }
});