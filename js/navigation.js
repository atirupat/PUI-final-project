document.addEventListener("DOMContentLoaded", function() { 

  // Global Variables
//   const goButton = document.querySelector('#go-button');
//   const checkpointMarker = document.querySelector('.checkpoint-marker');

  // Get each Checkpoint Marker
//   const markerOne = document.getElementById('marker-one');
//   const markerTwo = document.querySelector('#marker-two');
//   const markerThree = document.querySelector('#marker-three');
//   const markerFour = document.querySelector('#marker-four');
//   const markerFive = document.querySelector('#marker-five');

//   console.log(markerOne);
  // Create and Display Overlays when Hovering over Checkpoints
  // markerOne.addEventListener('mouseover', createOverlay, false);

  // function createOverlay () {
  //   console.log('function entered');
  //   const template = document.querySelector('.nav-overlay');
  //   const clone = template.content.cloneNode(true);

  //   element = clone.querySelector('.map-overlay');
  //   console.log(element);

  //   const mapView = document.querySelector('#map-view');
  //   mapView.prepend(element);

  //   updateOverlay(element);
  // }

  // function updateOverlay(overlayInstance) {
  //   const overlayTitle = document.querySelector('.map-hover-title');
  //   const overlayText = document.querySelector('.map-hover-txt');
  
  //   overlayTitle.innerText = '"Front Hills"';
  //   overlayText.innerText = 'Click to learn about Buggy and the Race';
  // }

    //Using JQuery API to Display Informative Overlays when Hovering Over Checkpoint Markers 
    $('#marker-one').hover(
        function() {
            $('#front-hill-ol').fadeIn( 200 );
            $('#front-hill-ol').css('display', 'flex');
        }, function() {
            // $('#query-test').fadeTo(500, 0 );
            $('#front-hill-ol').css('display', 'none');
    });
});

