// import functions

// reference needed DOM elements
const catImage = document.getElementById('cat-image');
const dogImage = document.getElementById('dog-image');
const horseImage = document.getElementById('horse-image');
const catSound = document.getElementById('cat-noise');
const dogSound = document.getElementById('dog-noise');
const horseSound = document.getElementById('horse-noise');

catImage.addEventListener('click', () => {
  catSound.play();
});

dogImage.addEventListener('click', () => {
  dogSound.play();
});

horseImage.addEventListener('click', () => {
  horseSound.play();
});

// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
