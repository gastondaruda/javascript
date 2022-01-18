let button = document.getElementById("Submit");
let inputValue = document.getElementById("inputValue");
let name = document.getElementById("name");
let desc = document.getElementById("desc");
let temp = document.getElementById("temp");
let tempMax = document.getElementById("tempMax");
let tempMin = document.getElementById("tempMin");
let humidity = document.getElementById("humidity");
let icon = document.getElementById("icon");



button.addEventListener('click', function(){
    $('.result').hide();
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=fcfaf0816fc485a804d81b25c453cf5b')
    
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name'];
        let countryName = data['sys']['country'];
        let tempValue = data['main']['temp'] - 273.15;
        let tempMaxValue = data['main']['temp_max'] - 273.15;
        let tempMinValue = data['main']['temp_min'] - 273.15;
        let humidityValue = data['main']['humidity'];
        let descValue = data['weather'][0]['description'];
        let iconValue = data['weather'][0]['icon'];
        console.log(data)

        name.innerHTML = nameValue + ", " + countryName;
        temp.innerHTML = tempValue.toFixed(0) + " Cº";
        tempMax.innerHTML = "Temperatura máxima: " + tempMaxValue.toFixed(0) + " Cº";
        tempMin.innerHTML = "Temperatura mínima: " + tempMinValue.toFixed(0) + " Cº";
        desc.innerHTML = descValue;
        /*
        if(descValue == "scattered clouds"){
            let descValue = "Nubes dispersas";
        };*/

        //(descValue.replace('scattered clouds', 'Nubes dispersas')) && (descValue.replace('few clouds', 'pocas nubes')) ;
        humidity.innerHTML = "La humedad es de " + humidityValue + "%";
        
        let iconWeather = document.createElement('div');
        iconWeather.innerHTML = `<img class="icon__weather result" src="https://openweathermap.org/img/wn/${iconValue}@2x.png" alt="">`;
        console.log(iconValue);


        icon.appendChild(iconWeather);
    
        

    })

    
    
    
    .catch(err => alert("Wrong city name!"))
});




/*
    $('#clean').click(function(){
        $('.display_title').hide();
        $('.description__weather').hide();
    })

    $('#Submit').click(function(){
        
        $('.iconWeather').show();
    })
*/

//fcfaf0816fc485a804d81b25c453cf5b


/*
const findMee = document.getElementById("localizacion");

findMee.addEventListener("click" , findMe);

function findMe(){
    let output = document.getElementById("map");

    if(navigator.geolocation) {
        output.innerHTML = `<p>Tu navegador soporta Geolocalización</p>`

    }else {
        output.innerHTML = `<p>Tu navegador no soporta geolocalizacion</p>`
    }
    function localizacion(posicion){
        let latitude = posicion.coords.latitude;
        let longitude = posicion.coords.longitude;

        var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&key=AIzaSyDNAj3K-J2Lk-RyjpIc-DkaII7N3YOW75c";

				output.innerHTML ="<img src='"+imgURL+"'>";

				

	
    }

    function error(){
        output.innerHTML = `<p>No se pudo obtener tu ubicación</p>`;
    }


    navigator.geolocation.getCurrentPosition(localizacion, error);

}
*/