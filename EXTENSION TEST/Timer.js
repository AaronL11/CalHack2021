var secs = 1800;
function countDown() {
  var mins = secs/60;
  var element = document.getElementById("status");
  element.innerHTML = "You have " + mins.toFixed(2) + " minutes";
  secs--;
  setTimeout(countDown, 1000);
  if (secs < 1){
    alert("Time!");
    element.innerHTML = '30 minutes is up, howd you think you did? Better have been well."
    secs = 1800;
  }
}