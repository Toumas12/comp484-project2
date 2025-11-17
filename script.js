$(function () { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.sleep-button').click(clickedSleepButton);



})

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { name: "Rex", weight: 70, happiness: 40, energy: 50 };

function clickedTreatButton() {
  pet_info.happiness += 5;
  pet_info.weight += 4;
  pet_info.energy -= 3;

  checkAndUpdatePetInfoInHtml();
  showComment("That was delicious!");
  var eatSound = new Audio("sounds/SnackSound.mp3");
  eatSound.play();
}

function clickedPlayButton() {
  // Increase pet happiness
  // Decrease pet weight
  pet_info.happiness += 8;
  pet_info.weight -= 1;
  pet_info.energy -= 5;
  checkAndUpdatePetInfoInHtml();
  showComment("That was fun!");
}

function clickedExerciseButton() {
  // Decrease pet happiness
  // Decrease pet weight
  pet_info.happiness -= 4;
  pet_info.weight -= 2;
  pet_info.energy -= 8;

  checkAndUpdatePetInfoInHtml();
  showComment("I’m getting fit!");
}

function clickedSleepButton() {
  // Sleep: restores lots of energy, tiny happiness drop (FOMO!), small weight drop
  pet_info.energy += 15;
  pet_info.happiness -= 2;
  pet_info.weight -= 1;

  checkAndUpdatePetInfoInHtml();
  showComment("I feel recharged!");
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero.

  // make sure happiness stays between 0 and 100
  if (pet_info.happiness > 100) {
    pet_info.happiness = 100;
  }
  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }

  // make sure energy stays between 0 and 100
  if (pet_info.energy > 100) {
    pet_info.energy = 100;
  }
  if (pet_info.energy < 0) {
    pet_info.energy = 0;
  }

  // make sure weight doesn't go below 0
  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }
}

function showComment(message) {
  // create a new comment element
  var comment = $('<div class="temp-comment">' + message + '</div>');
  $('.button-container').after(comment);


  // remove it after 2 seconds (2000 ms)
  setTimeout(function () { comment.remove(); }, 2000);

}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  $('.name').text(pet_info['name']);
  $('.weight').text(pet_info['weight']);
  $('.happiness').text(pet_info['happiness']);
  $('.energy').text(pet_info['energy']);
}

console.log(5);
