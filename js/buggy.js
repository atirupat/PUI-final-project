// Global Variables

let locationTxtContents = 'Front Hills';
let locationTxt = document.querySelector('#display-location');

// Initial left position of '.times-by-division' div
const initialPosition = $('.buggy-road').position();

document.addEventListener("DOMContentLoaded", function() { 
  console.log(initialPosition);

  //Use JQuery to Dynamically Change Header Location Text
  // Function to check if something is in viewport referenced from: https://stackoverflow.com/questions/20791374/jquery-check-if-element-is-visible-in-viewport
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  // $(window).on('scroll', function () {
  //   if ($('#front-hills').isInViewport()) {
  //     locationTxtContents = 'Front Hills';

  //     locationTxt.innerHTML = locationTxtContents;
  //     console.log(locationTxt.innerHTML);
  //   } 
    
  //   if ($('#free-roll').isInViewport()) {
  //     console.log('entered free roll');
  //     locationTxtContents = 'Free Roll';

  //     locationTxt.innerHTML = locationTxtContents;
  //     console.log(locationTxt.innerHTML);
  //   }

  // });

  console.log(locationTxtContents);
  

  console.log(locationTxt.innerHTML);
});

// -----------------------------------------------------------------------------------------------------------------------------------------------
// Update Width of Progress Bar
$(window).on('scroll', function () {
  let currentPosition = $('.buggy-road').offset();
  const documentWidth = $(document).width();


  // Subtract length of buggy road from Document Width
  const buggyRoadWidth = $('.buggy-road').width();

  let newDocumentWidth = documentWidth - buggyRoadWidth;

  // Convert Position of Buggy Road into a Percentage
  let percentCompleted = (scale(currentPosition.left, initialPosition.left, newDocumentWidth, 0, 100)).toFixed(2) + '%';

  // Change Progress Bar Width in CSS
  $('.progress-bar').css({width: percentCompleted});
});

// Mapping Numbers function sourced from: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}








