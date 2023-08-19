function mothersDay() {
    const mothersDayDate = new Date('August 23, 2023 10:00');
    const now = new Date();
    const difference = mothersDayDate - now;


    const msInSeconds = 1000; //сколько миллисекунд в секунде
    const msInMinutes = 60 * 1000; //сколько миллисекунд в минуте
    const msInHours = 60 * 60 * 1000; //сколько миллисекунд в часе
    const msInDays = 24 * 60 * 60 * 1000; //сколько миллисекунд в сутках

    const displayDay = Math.floor(difference / msInDays);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor(difference % msInDays / msInHours);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor(difference % msInHours / msInMinutes);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor(difference % msInMinutes / msInSeconds);
    document.querySelector('.seconds').textContent = displaySecond;

    if (difference <= 0) {   //чтобы время не уходило в минус
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID); //чтобы остановить счетчик. Этот метод всегда идет в связке с setInterval 
}
}

let timerID = setInterval(mothersDay, 1000); 


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Get the modal
let modalThree = document.getElementById("myModalThree");

// Get the button that opens the modal
let btnThree = document.getElementById("myButtonThree");

// Get the <span> element that closes the modal
let spanThree = document.getElementsByClassName("closeThree")[0];

// When the user clicks on the button, open the modal
btnThree.onclick = function() {
  modalThree.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanThree.onclick = function() {
  modalThree.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalThree) {
    modalThree.style.display = "none";
  }
}



// Get the modal
let modalFour = document.getElementById("myModalFour");

// Get the button that opens the modal
let btnFour = document.getElementById("myButtonFour");

// Get the <span> element that closes the modal
let spanFour = document.getElementsByClassName("closeFour")[0];

// When the user clicks on the button, open the modal
btnFour.onclick = function() {
  modalFour.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFour.onclick = function() {
  modalFour.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFour) {
    modalFour.style.display = "none";
  }
}



// Get the modal
let modalFive = document.getElementById("myModalFive");

// Get the button that opens the modal
let btnFive = document.getElementById("myButtonFive");

// Get the <span> element that closes the modal
let spanFive = document.getElementsByClassName("closeFive")[0];

// When the user clicks on the button, open the modal
btnFive.onclick = function() {
  modalFive.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFive.onclick = function() {
  modalFive.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFive) {
    modalFive.style.display = "none";
  }
}



// Get the modal
let modalSix = document.getElementById("myModalSix");

// Get the button that opens the modal
let btnSix = document.getElementById("myButtonSix");

// Get the <span> element that closes the modal
let spanSix = document.getElementsByClassName("closeSix")[0];

// When the user clicks on the button, open the modal
btnSix.onclick = function() {
  modalSix.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanSix.onclick = function() {
  modalSix.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalSix) {
    modalSix.style.display = "none";
  }
}



// Get the modal
let modalSeven = document.getElementById("myModalSeven");

// Get the button that opens the modal
let btnSeven = document.getElementById("myButtonSeven");

// Get the <span> element that closes the modal
let spanSeven = document.getElementsByClassName("closeSeven")[0];

// When the user clicks on the button, open the modal
btnSeven.onclick = function() {
  modalSeven.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanSeven.onclick = function() {
  modalSeven.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalSeven) {
    modalSeven.style.display = "none";
  }
}



// Get the modal
let modalEight = document.getElementById("myModalEight");

// Get the button that opens the modal
let btnEight = document.getElementById("myButtonEight");

// Get the <span> element that closes the modal
let spanEight = document.getElementsByClassName("closeEight")[0];

// When the user clicks on the button, open the modal
btnEight.onclick = function() {
  modalEight.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanEight.onclick = function() {
  modalEight.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalEight) {
    modalEight.style.display = "none";
  }
}



