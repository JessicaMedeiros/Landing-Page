window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperatureDescription = document.querySelector('.temperature-description');
    let city = document.querySelector('.city');
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition (position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c7c305646d9ef7ba7a94324362184249`
            
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const{temp} = data.main;
                const[{description}] = data.weather;
                
                temperatureDegree.textContent = kelvinToCelsius(temp)+"°C | ";
                temperatureDescription.textContent = upperCase(description);

                city.textContent =  data.name;           
            });
        });
    }
 

});

function kelvinToCelsius(t){
    return t = t - 273.15;
}

function upperCase(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

