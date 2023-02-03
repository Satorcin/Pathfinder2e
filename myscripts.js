function tab(evt, Part) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Part).style.display = "block";
  evt.currentTarget.className += " active";
};

// Para ocultar todos los DIVS por clase
function Hide1() {
    var container = document.getElementsByClassName("hojavertical");
    for(let i = 0; i<container.length;i++){
      if (container[i].style.display === "none") {
          container[i].style.display = "block";
      } else {
          container[i].style.display = "none";
        }
    }
};

// Para ocultar solo el ultimo div por ID
function Hide2() {
    var x = document.getElementById("hojavertical");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

// Para ocultar todo

function Hide() {
    var container = document.getElementsByClassName("hojavertical");
    for(let i = 0; i<container.length;i++){
      if (container[i].style.display === "none") {
          container[i].style.display = "block";
      } else {
          container[i].style.display = "none";
        }
    }

    var container = document.getElementsByClassName("tab");
    for(let i = 0; i<container.length;i++){
      if (container[i].style.display === "none") {
          container[i].style.display = "block";
      } else {
          container[i].style.display = "none";
        }
    }

    var container = document.getElementsByClassName("tabcontent");
    for(let i = 0; i<container.length;i++){
      if (container[i].style.display === "none") {
          container[i].style.display = "block";
      } else {
          container[i].style.display = "none";
        }
    }

    var y = document.getElementById("principal_header");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
};
