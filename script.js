let insertName = document.querySelector('.insert');
document.querySelector('.b-1').onclick = () => {
    if (insertName.value == '') {
        console.log('Введите название города');
    }
    else {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${insertName.value}&appid=8a57b74c8cf4cb9384129015bb92ff8f`)
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                document.querySelector('.city-name').textContent = data.name;
                document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp - 273)} &deg;`;
                document.querySelector('.weather').textContent = data.weather[0].main
                document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
                document.querySelector('.wind').textContent = data.weather[0].description;
                document.querySelector('.info').style.visibility = 'visible';
                insertName.value = '';
            })
            .catch(function () {

            })
    }
}