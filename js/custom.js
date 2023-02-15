function openCity(evt, cityName) {
  evt.preventDefault();

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  showImgStepOne();
}

function showImgStepOne() {
  const btStepOne = document.getElementById("bt-step-one");
  const imgStepOne = document.getElementById("img-step-one");

  if (btStepOne.classList.contains("active")) {
    imgStepOne.style.display = "flex";
  } else {
    imgStepOne.style.display = "none";
  }
}
