var btn = document.getElementsByClassName("btn");
var i;

for (i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    var para = this.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  };
}