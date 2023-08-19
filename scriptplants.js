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







let modalNine = document.getElementById("myModalNine");


let btnNine = document.getElementById("myButtonNine");


let spanNine = document.getElementsByClassName("closeNine")[0];


btnNine.onclick = function() {
  modalNine.style.display = "block";
}


spanNine.onclick = function() {
  modalNine.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalNine) {
    modalNine.style.display = "none";
  }
}




let modalTen = document.getElementById("myModalTen");


let btnTen = document.getElementById("myButtonTen");


let spanTen = document.getElementsByClassName("closeTen")[0];


btnTen.onclick = function() {
  modalTen.style.display = "block";
}


spanTen.onclick = function() {
  modalTen.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalTen) {
    modalTen.style.display = "none";
  }
}




let modalEleven = document.getElementById("myModalEleven");


let btnEleven = document.getElementById("myButtonEleven");


let spanEleven = document.getElementsByClassName("closeEleven")[0];


btnEleven.onclick = function() {
  modalEleven.style.display = "block";
}


spanEleven.onclick = function() {
  modalEleven.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalEleven) {
    modalEleven.style.display = "none";
  }
}




let modalTwelve = document.getElementById("myModalTwelve");


let btnTwelve = document.getElementById("myButtonTwelve");


let spanTwelve = document.getElementsByClassName("closeTwelve")[0];


btnTwelve.onclick = function() {
  modalTwelve.style.display = "block";
}


spanTwelve.onclick = function() {
  modalTwelve.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalTwelve) {
    modalTwelve.style.display = "none";
  }
}




let modalThirteen = document.getElementById("myModalThirteen");


let btnThirteen = document.getElementById("myButtonThirteen");


let spanThirteen = document.getElementsByClassName("closeThirteen")[0];


btnThirteen.onclick = function() {
  modalThirteen.style.display = "block";
}


spanThirteen.onclick = function() {
  modalThirteen.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalThirteen) {
    modalThirteen.style.display = "none";
  }
}




let modalFourteen = document.getElementById("myModalFourteen");


let btnFourteen = document.getElementById("myButtonFourteen");


let spanFourteen = document.getElementsByClassName("closeFourteen")[0];


btnFourteen.onclick = function() {
  modalFourteen.style.display = "block";
}


spanFourteen.onclick = function() {
  modalFourteen.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalFourteen) {
    modalFourteen.style.display = "none";
  }
}
