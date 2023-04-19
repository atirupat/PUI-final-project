// Global Variables
const goButton = document.querySelector('#go-button');
const checkpointMarker = document.querySelector('.checkpoint-marker');

// class NavHover {
//   constructor()
// }

goButton.addEventListener('click', () => {pressGoButton()});
checkpointMarker.addEventListener('mouseOver', () => {testCheckPoints()});

function pressGoButton() {
  goButton.style.backgroundColor = '#002861';
  goButton.style.filter = 'none';
}

function testCheckPoints() {
 checkpointMarker.style.backgroundColor = '#989898';
}