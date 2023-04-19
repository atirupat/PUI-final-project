// Global Variables
const goButton = document.querySelector('#go-button');

// class NavHover {
//   constructor()
// }

goButton.addEventListener('click', () => {pressGoButton()});

function pressGoButton() {
  goButton.style.backgroundColor = '#002861';
  goButton.style.filter = 'none';
}


