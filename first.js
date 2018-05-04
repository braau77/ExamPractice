function saveName(){
  if (event.keyCode === 13) {
  var test = document.getElementById('naming').value;
  localStorage.setItem('settingName', test);
  location.href = 'second.html'
  }
}