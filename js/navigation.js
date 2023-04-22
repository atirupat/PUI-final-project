document.addEventListener("DOMContentLoaded", function() { 

  // Global Variables
  const goButton = document.querySelector('#go-button');
  const checkpointMarker = document.querySelector('.checkpoint-marker');

  // Get each Checkpoint Marker
  const markerOne = document.getElementById('marker-one');
  const markerTwo = document.querySelector('#marker-two');
  const markerThree = document.querySelector('#marker-three');
  const markerFour = document.querySelector('#marker-four');
  const markerFive = document.querySelector('#marker-five');

  console.log(markerOne);
  // Create and Display Overlays when Hovering over Checkpoints

  if (markerOne) {
    markerOne.addEventListener('mouseover', createOverlayOne, false);
  }

  function createOverlayOne () {
    console.log('function entered');

    
  }

});