// let sec = document.querySelector(".sec");
//  sec= 42;
// h2[1] = 23;
// h2[2] = 55;
// h2[3] = 41;

// function count(){
//     sec--;
//     console.log(sec);
//     document.querySelector(".sec").textContent = sec;
// }
//  setInterval(count, 1000);
// window.addEventListener("load", count)

let countdown = new Date("june 16, 2023 09:00:00").getTime();


// setting coundown

function counter(){

let now = new Date().getTime();
let timeleft = countdown - now;

//getting the actual digits to represent the days, hours, minutes and seconds

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60 )) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60 ))/1000).toLocaleString();
    seconds;
    //diplaying the results on the page
        document.querySelector(".day").textContent = `0${days}`;
        document.querySelector(".hour").textContent = hours;
        document.querySelector(".min").textContent = minutes;
        document.querySelector(".sec").textContent = seconds;
        console.log(seconds,days,minutes,hours)
}
let myCounter = setInterval(counter,1000)

// let myElement = document.querySelector("body")
// function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//       myElement.innerHTML = "Geolocation is not supported by this browser.";
//     }
//   }
  
//   function showPosition(position) {
//     myElement.innerHTML = "Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude;
//   }
