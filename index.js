const input = document.getElementById('button');
function addingEventListener(){
function clickAlert() {
    alert("I was clicked");
    console.log("I was clicked");
}

input.addEventListener('click', clickAlert);}
addingEventListener();
/*
const input = document.getElementById('button');
input.addEventListener('click', function() {
  alert('I was clicked!');
});*/