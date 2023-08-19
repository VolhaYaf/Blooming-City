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
let modalNine = document.getElementById("myModalNine");

// Get the button that opens the modal
let btnNine = document.getElementById("myButtonNine");

// Get the <span> element that closes the modal
let spanNine = document.getElementsByClassName("closeNine")[0];

// When the user clicks on the button, open the modal
btnNine.onclick = function() {
  modalNine.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanNine.onclick = function() {
  modalNine.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalNine) {
    modalNine.style.display = "none";
  }
}



// Get the modal
let modalTen = document.getElementById("myModalTen");

// Get the button that opens the modal
let btnTen = document.getElementById("myButtonTen");

// Get the <span> element that closes the modal
let spanTen = document.getElementsByClassName("closeTen")[0];

// When the user clicks on the button, open the modal
btnTen.onclick = function() {
  modalTen.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanTen.onclick = function() {
  modalTen.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalTen) {
    modalTen.style.display = "none";
  }
}



// Get the modal
let modalEleven = document.getElementById("myModalEleven");

// Get the button that opens the modal
let btnEleven = document.getElementById("myButtonEleven");

// Get the <span> element that closes the modal
let spanEleven = document.getElementsByClassName("closeEleven")[0];

// When the user clicks on the button, open the modal
btnEleven.onclick = function() {
  modalEleven.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanEleven.onclick = function() {
  modalEleven.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalEleven) {
    modalEleven.style.display = "none";
  }
}



// Get the modal
let modalTwelve = document.getElementById("myModalTwelve");

// Get the button that opens the modal
let btnTwelve = document.getElementById("myButtonTwelve");

// Get the <span> element that closes the modal
let spanTwelve = document.getElementsByClassName("closeTwelve")[0];

// When the user clicks on the button, open the modal
btnTwelve.onclick = function() {
  modalTwelve.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanTwelve.onclick = function() {
  modalTwelve.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalTwelve) {
    modalTwelve.style.display = "none";
  }
}



// Get the modal
let modalThirteen = document.getElementById("myModalThirteen");

// Get the button that opens the modal
let btnThirteen = document.getElementById("myButtonThirteen");

// Get the <span> element that closes the modal
let spanThirteen = document.getElementsByClassName("closeThirteen")[0];

// When the user clicks on the button, open the modal
btnThirteen.onclick = function() {
  modalThirteen.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanThirteen.onclick = function() {
  modalThirteen.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalThirteen) {
    modalThirteen.style.display = "none";
  }
}



// Get the modal
let modalFourteen = document.getElementById("myModalFourteen");

// Get the button that opens the modal
let btnFourteen = document.getElementById("myButtonFourteen");

// Get the <span> element that closes the modal
let spanFourteen = document.getElementsByClassName("closeFourteen")[0];

// When the user clicks on the button, open the modal
btnFourteen.onclick = function() {
  modalFourteen.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFourteen.onclick = function() {
  modalFourteen.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFourteen) {
    modalFourteen.style.display = "none";
  }
}
