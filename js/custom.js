// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (currentScrollPos!=0) {
//     document.getElementById("navibar").style.backgroundColor = "blue";
//     // console.log(prevScrollpos);
//     // console.log(currentScrollPos);
//   } else {
//     document.getElementById("navibar").style.backgroundColor = "#00000000";
//   }
//   prevScrollpos = currentScrollPos;
// }

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}