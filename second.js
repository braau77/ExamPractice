var hobbies = [];
var counter = 0;
var c = '';
function testFunction(){
  var a = localStorage.getItem('settingName');
  document.getElementById('displayName').innerHTML = 'Hello ' + a;
}

function saveHobbies(){
    var a = document.getElementById('hobby').value;
    var b = window.localStorage.setItem('settingHobby', JSON.stringify(a));
    var c = window.localStorage.getItem('settingHobby');
    hobbies.push(c);
    document.getElementById('displayHobby').innerHTML = hobbies;
    document.getElementById('hobbyLength').innerHTML = hobbies.length;
  if (counter > 2){
    location.href = 'third.html';
    return false;
  }
  counter++;
  return true;
}
function clearHobby(){
  hobbies = [];
  counter = 0;
  document.getElementById('check').innerHTML = hobbies.length;
}
