if (localStorage.getItem('qbootSelectedOS') == null) {
  localStorage.setItem('qbootSelectedOS','kimmu');
}


var setupclock = 1;
var intervalId = window.setInterval(function(){
  if (setupclock > 2) {
    window.open('../vms/' + localStorage.getItem('qbootSelectedOS') + '.html',"_self")
  }
  document.getElementById('startupinfo').innerHTML = "Press [alt] to enter setup [" + setupclock + "/3]";
  setupclock += 1;
}, 1000);

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 18) {
        window.open("../setup/setup.html","_self")
    }
});