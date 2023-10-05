let cities = [  "Agadir","Marrakech", "Rabat","Casablanca"];

let contant = '';

for (let city of cities) {
  contant += `<option>${city}</option>`; 

  document.getElementById('cities-select').innerHTML = contant;

     
}

document.getElementById('cities-select').addEventListener('change', function(){
  document.getElementById('city-name').innerHTML = this.value;

    if (this.value=="Agadir") {
           getPrayersTimingsOfCity('Agadir')    
    }else if(this.value=="Marrakech"){
          getPrayersTimingsOfCity('Marrakech')
    }else if(this.value=="Rabat"){
          getPrayersTimingsOfCity('Rabat')
    }else if(this.value=="Casablanca")
    getPrayersTimingsOfCity('Casablanca')      

    console.log(this.value)
})


function getPrayersTimingsOfCity(cityName)
{
    let params ={
        country:"MA",
        city: cityName 
    }

    axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params: params
  })
  .then(function (response) {
    const timings = response.data.data.timings
    fillTimeForPrayer('Fajr-time', timings.Fajr )
    fillTimeForPrayer('Sunrise-time', timings.Sunrise)
    fillTimeForPrayer('Dhuhr-time', timings.Dhuhr)
    fillTimeForPrayer('Asr-time', timings.Asr)
    fillTimeForPrayer('Maghrib-time', timings.Maghrib)
    fillTimeForPrayer('Isha-time', timings.Isha)
    
    
    const readableDate = response.data.data.date.readable
    const weekDay = response.data.data.date.gregorian.weekday.en
    const date = weekDay + " " + readableDate
    document.getElementById('date').innerHTML = date
    
    
    // console.log( weekDay + " " + readableDate );
  })
  .catch(function (error) {
    console.log(error);
  })    
}
getPrayersTimingsOfCity("Agadir")


function fillTimeForPrayer(id, time ){
    document.getElementById(id).innerText= time
  }


  
