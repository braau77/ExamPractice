function showEverything(){
  var a = localStorage.getItem('settingName');
  document.getElementById('showName').innerHTML = 'Hello ' + a;
  var b = localStorage.getItem('settingHobby');
  var rand = parseInt(b[Math.floor(Math.random() * b.length)]);
  document.getElementById('showHobby').innerHTML = "Let's do your favorite activity, " + rand;
  
}
