// Global Variables
let locationTxt = document.querySelector('#display-location');

// Initial left position of '.times-by-division' div
const initialPosition = $('.buggy-road').position();

// -----------------------------------------------------------------------------------------------------------------------------------------------
// Update Header While Scrolling

$(window).on('scroll', function () {
  // Update Width of Progress Bar
  let currentPosition = $('.buggy-road').offset();
  const documentWidth = $(document).width();


  // Subtract length of buggy road from Document Width
  const buggyRoadWidth = $('.buggy-road').width();
  let newDocumentWidth = documentWidth - buggyRoadWidth;

  // Convert Position of Buggy Road into a Percentage
  let percentCompleted = (scale(currentPosition.left, initialPosition.left, newDocumentWidth, 0, 100)).toFixed(2) + '%';

  // Change Progress Bar Width in CSS
  $('.progress-bar').css({width: percentCompleted});

  // ----------------------------------------------------------------------------------------------------------------------------------------------
  // Update Location Text

  // Get Position of Each Section within the Document
  let newPercentCompleted = (scale(currentPosition.left, initialPosition.left, newDocumentWidth, 0, 100));

  // Free Roll
  const freeRollPosition = $('#free-roll').position();
  const mapFreeRollPosition = (scale(freeRollPosition.left, initialPosition.left, newDocumentWidth, 0, 100));
  console.log('Free Roll: ' + mapFreeRollPosition);

  // Schenley
  const schenleyPosition = $('#schenley').position();
  const mapSchenleyPosition = (scale(schenleyPosition.left, initialPosition.left, newDocumentWidth, 0, 100));
  console.log('Schenley: ' + mapSchenleyPosition);

  //The Chute
  const chutePosition = $('#chute').position();
  const mapChutePosition = (scale(chutePosition.left, initialPosition.left, newDocumentWidth, 0, 100));
  console.log('Chute: ' + mapChutePosition);

  // Back Hills
  const backHillsPosition = $('#back-hills').position();
  const mapBackHillsPosition = (scale(backHillsPosition.left, initialPosition.left, newDocumentWidth, 0, 100));
  console.log('Back Hills: ' + mapBackHillsPosition);

  // Change Header Text Depending on which Section the User is Currently In
  if (newPercentCompleted < mapFreeRollPosition) {
    locationTxt.innerHTML = 'Front Hills';
  } else if (newPercentCompleted >= mapFreeRollPosition && newPercentCompleted < mapSchenleyPosition) {
    locationTxt.innerHTML = 'Free Roll';
  } else if (newPercentCompleted >= mapSchenleyPosition && newPercentCompleted < mapChutePosition) {
    locationTxt.innerHTML = 'Schenley Dr.';
  } else if (newPercentCompleted >= mapChutePosition && newPercentCompleted< mapBackHillsPosition) {
    locationTxt.innerHTML = '"The Chute"';
  } else if (newPercentCompleted >= mapBackHillsPosition && newPercentCompleted <= 100.00) {
    locationTxt.innerHTML = 'Back Hills';
  };

  console.log(newPercentCompleted);
});

// Mapping Numbers function sourced from: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}








