const getElement=(selector) =>{

  const element=document.querySelector(selector);
  if(element) return element
}
const links=getElement('.nav-links')
const navBtnDOM=getElement('.nav-btn')
navBtnDOM.addEventListener('click',()=> {
  links.classList.toggle('show-links')
})

const date=getElement('#date')
const currentYear=new Date().getFullYear()
date.textContent=currentYear



filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("recipe");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}


function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}


function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


var btnContainer = document.getElementById("filterContainer");
var btns = btnContainer.getElementsByClassName("filter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


(function () {
  const params = new URLSearchParams(location.search);
  const query = params.get("t");    
  filterSelection(query);

  
var current = document.getElementsByClassName("active");
current[0].className = current[0].className.replace(" active", "");
document.getElementById(query).className += " active";
})();







