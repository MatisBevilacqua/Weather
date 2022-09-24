
//btn.addEventListener("click", btnClick);
const APIKEY = '77283d30261185ae944a0570bb90a032'; // CONT LAPI WEATHER //
let now = new Date();
console.log(now)
let formatteFr = Intl.DateTimeFormat('en-FR').format(now);
console.log(formatteFr);

let apiCall = function (city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url)
        .then((response) =>
            response.json().then((data) => {
                console.log(data);
                document.querySelector("#temp1").innerHTML = data.main.temp + '°';
                document.querySelector("#tempHero").innerHTML = data.main.temp + '°C';
                document.querySelector("#temp2").innerHTML = data.name;
                document.querySelector("#temp3").innerHTML = data.name;
                document.querySelector("#temp4").innerHTML = data.name;
                document.querySelector("#precipitation").innerHTML = data.clouds.all + '%';
                document.querySelector("#humiditer").innerHTML = data.main.humidity + '%';
                document.querySelector("#vent").innerHTML = data.wind.speed + 'km/h';
            })
        );
}


    document.querySelector("#btnLO").addEventListener('click', function (e){
    e.preventDefault()
    let ville = document.querySelector("#locatE").value;

    apiCall(ville);
});



//function btnClick(){
  //  if(locate.style.display != "none"){
     //   locate.style.display = "block";
    //}
//}




