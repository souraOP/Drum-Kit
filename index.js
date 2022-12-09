//Detecting Button Press


for(var i = 0; i < document.querySelectorAll("button.drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonHtml = this.innerHTML;
    makeMeMoan(buttonHtml);

    animateButton(buttonHtml);

  });

}


//Detecting Keyboard Press

document.addEventListener("keydown", function(event) {
  makeMeMoan(event.key);

  animateButton(event.key);
})

function makeMeMoan(keyStroke){

    switch (keyStroke) {
      case "w":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;
      case "k":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
      case "l":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;    
      default:
        console.log(buttonHtml);

    }
}

function animateButton(keypress){
  var activeButton = document.querySelector("." + keypress);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}