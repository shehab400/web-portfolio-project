let navitem = document.getElementsByClassName("item");
for (let i = 0; i < navitem.length; i++) {
  navitem[i].onclick = function (e) {
    for (let j = 0; j < navitem.length; j++) {
      navitem[j].setAttribute("style", "color:white");
    }
    // navitem[i].setAttribute("style", "text-decoration: underline");
    navitem[i].setAttribute("style", "color:orange");
  };
}

let AllProjects = document.getElementsByClassName("grid-item");
let Cprojects = document.getElementsByClassName("c++");
let PythonProjects = document.getElementsByClassName("python");
let CssProjects = document.getElementsByClassName("css");
let AllButton = document.getElementById("All");
let CButton = document.getElementById("C++");
let Cssbutton = document.getElementById("Css");
let pythonbutton = document.getElementById("python");
let Alltext = document.getElementsByClassName("grid-text");
let csstext = document.getElementsByClassName("csstext");
let pythontext = document.getElementsByClassName("pythontext");
let ctext = document.getElementsByClassName("c++text");

// console.log(AllProjects);
// console.log(Cprojects);
// console.log(PythonProjects);
// console.log(CssProjects);
let showAll = function () {
  for (let i = 0; i < PythonProjects.length; i++) {
    PythonProjects[i].style.display = "block";
  }
  for (let i = 0; i < Cprojects.length; i++) {
    Cprojects[i].style.display = "block";
  }
  for (let i = 0; i < CssProjects.length; i++) {
    CssProjects[i].style.display = "block";
  }
  for (let i = 0; i < Alltext.length; i++) {
    Alltext[i].style.display = "block";
  }
};
AllButton.onclick = function () {
  showAll();
};
CButton.onclick = function () {
  showAll();
  for (let i = 0; i < PythonProjects.length; i++) {
    PythonProjects[i].style.display = "none";
  }
  for (let i = 0; i < CssProjects.length; i++) {
    CssProjects[i].style.display = "none";
  }
  for (let i = 0; i < csstext.length; i++) {
    csstext[i].style.display = "none";
  }
  for (let i = 0; i < pythontext.length; i++) {
    pythontext[i].style.display = "none";
  }
};
Cssbutton.onclick = function () {
  showAll();
  for (let i = 0; i < PythonProjects.length; i++) {
    PythonProjects[i].style.display = "none";
  }
  for (let i = 0; i < Cprojects.length; i++) {
    Cprojects[i].style.display = "none";
  }
  for (let i = 0; i < ctext.length; i++) {
    ctext[i].style.display = "none";
  }
  for (let i = 0; i < pythontext.length; i++) {
    pythontext[i].style.display = "none";
  }
};
pythonbutton.onclick = function () {
  showAll();
  for (let i = 0; i < ctext.length; i++) {
    ctext[i].style.display = "none";
  }
  for (let i = 0; i < csstext.length; i++) {
    csstext[i].style.display = "none";
  }
  for (let i = 0; i < Cprojects.length; i++) {
    Cprojects[i].style.display = "none";
  }
  for (let i = 0; i < CssProjects.length; i++) {
    CssProjects[i].style.display = "none";
  }
};
