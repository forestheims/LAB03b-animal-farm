// import functions

// reference needed DOM elements
const catImage = document.getElementById('cat-image');
const dogImage = document.getElementById('dog-image');
const horseImage = document.getElementById('horse-image');
const catSound = document.getElementById('cat-noise');
const dogSound = document.getElementById('dog-noise');
const horseSound = document.getElementById('horse-noise');

// cat
catImage.addEventListener('click', () => {
    catSound.play();
    catImage.classList.remove('selected');
    dogImage.classList.remove('selected');
    horseImage.classList.remove('selected');
    catImage.classList.add('selected');
});

// dog
dogImage.addEventListener('click', () => {
    dogSound.play();
    catImage.classList.remove('selected');
    dogImage.classList.remove('selected');
    horseImage.classList.remove('selected');
    dogImage.classList.add('selected');
});

// horse
horseImage.addEventListener('click', () => {
    horseSound.play();
    catImage.classList.remove('selected');
    dogImage.classList.remove('selected');
    horseImage.classList.remove('selected');
    horseImage.classList.add('selected');
});

document.addEventListener('keyup', event => {
    if (event.key === 'c') {
        catSound.play();
        catImage.classList.remove('selected');
        dogImage.classList.remove('selected');
        horseImage.classList.remove('selected');
        catImage.classList.add('selected');
    } else if (event.key === 'd') {
        dogSound.play();
        catImage.classList.remove('selected');
        dogImage.classList.remove('selected');
        horseImage.classList.remove('selected');
        dogImage.classList.add('selected');
    } else if (event.key === 'h') {
        horseSound.play();
        catImage.classList.remove('selected');
        dogImage.classList.remove('selected');
        horseImage.classList.remove('selected');
        horseImage.classList.add('selected');
    }
});


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
