const togglebButton = document.getElementById('toggle');
const mainMenu = document.getElementById('navbar');

togglebButton.addEventListener('click',function(){
mainMenu.classList.toggle('active');

}); 

fetch("https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=f07d7534502f63742c7a0a68b112e715&units=metric")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        temperature.textContent = "Current Temperature: "+data.main.temp+ "℃";
        description.textContent = ""+data.weather[0].description;
    

        //icon for the weather//
        let iconCode = data.weather[0].icon;
        let iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        console.log(iconURL)
        icon.src = iconURL;
        icon.alt = "weather icon"

      })
      .catch(error => {
        console.error("Error fetching data:", error);
        
     
    
    });