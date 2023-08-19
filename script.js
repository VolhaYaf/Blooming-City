function mothersDay() {
    const mothersDayDate = new Date('August 23, 2023 10:00');
    const now = new Date();
    const difference = mothersDayDate - now;


    const msInSeconds = 1000; 
    const msInMinutes = 60 * 1000; 
    const msInHours = 60 * 60 * 1000; 
    const msInDays = 24 * 60 * 60 * 1000; 
    
    const displayDay = Math.floor(difference / msInDays);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor(difference % msInDays / msInHours);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor(difference % msInHours / msInMinutes);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor(difference % msInMinutes / msInSeconds);
    document.querySelector('.seconds').textContent = displaySecond;

    if (difference <= 0) {  
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID); 
}

let timerID = setInterval(mothersDay, 1000); 


let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}



let modalThree = document.getElementById("myModalThree");


let btnThree = document.getElementById("myButtonThree");


let spanThree = document.getElementsByClassName("closeThree")[0];


btnThree.onclick = function() {
  modalThree.style.display = "block";
}


spanThree.onclick = function() {
  modalThree.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalThree) {
    modalThree.style.display = "none";
  }
}




let modalFour = document.getElementById("myModalFour");


let btnFour = document.getElementById("myButtonFour");


let spanFour = document.getElementsByClassName("closeFour")[0];


btnFour.onclick = function() {
  modalFour.style.display = "block";
}


spanFour.onclick = function() {
  modalFour.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalFour) {
    modalFour.style.display = "none";
  }
}




let modalFive = document.getElementById("myModalFive");


let btnFive = document.getElementById("myButtonFive");


let spanFive = document.getElementsByClassName("closeFive")[0];


btnFive.onclick = function() {
  modalFive.style.display = "block";
}


spanFive.onclick = function() {
  modalFive.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalFive) {
    modalFive.style.display = "none";
  }
}




let modalSix = document.getElementById("myModalSix");


let btnSix = document.getElementById("myButtonSix");


let spanSix = document.getElementsByClassName("closeSix")[0];


btnSix.onclick = function() {
  modalSix.style.display = "block";
}


spanSix.onclick = function() {
  modalSix.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalSix) {
    modalSix.style.display = "none";
  }
}




let modalSeven = document.getElementById("myModalSeven");


let btnSeven = document.getElementById("myButtonSeven");


let spanSeven = document.getElementsByClassName("closeSeven")[0];


btnSeven.onclick = function() {
  modalSeven.style.display = "block";
}


spanSeven.onclick = function() {
  modalSeven.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalSeven) {
    modalSeven.style.display = "none";
  }
}




let modalEight = document.getElementById("myModalEight");


let btnEight = document.getElementById("myButtonEight");


let spanEight = document.getElementsByClassName("closeEight")[0];


btnEight.onclick = function() {
  modalEight.style.display = "block";
}


spanEight.onclick = function() {
  modalEight.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalEight) {
    modalEight.style.display = "none";
  }
}



