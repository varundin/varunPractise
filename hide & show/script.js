// var btn = document.getElementById("btn");
// var para = document.getElementById("para");

// btn.addEventListener("click", function () {
//     var disp = para.style.display;

//     if (disp == "none") {
//         para.style.display = "block"
//     } else {
//         para.style.display = "none"
//     }
// });

var btn = document.getElementById("btn");
var para = document.getElementById("para");

btn.onclick = function(){
    var disp = para.style.display;

    if (disp == "none") {
        para.style.display = "block"
    } else {
        para.style.display = "none"
    }
}