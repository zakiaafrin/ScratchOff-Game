var greyBox = document.querySelectorAll('.grey');
var win = document.getElementById("win");
var myModal = document.getElementById("myModal");

function scratch(grey) {
   grey.src = "scratching.gif";
   setTimeout(() => grey.style.opacity = "0", 1000);
   win.play();
   setTimeout(() => win.play(), 1000);
   myModal.style.visibility = "hidden";
   setTimeout(() => myModal.style.visibility = "visible", 1500);
}
greyBox.forEach(function (grey) {
   grey.addEventListener("click", function () {
      scratch(grey);
   })
})