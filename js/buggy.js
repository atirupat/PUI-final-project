// Global Variables

const roadHeight = document.querySelector('.buggy-road').clientHeight;
const roadLength = document.querySelector('.buggy-road').scrollWidth;
console.log(roadHeight);
console.log(roadLength);

SVG.on(document, 'DOMContentLoaded', function() {
  // Draw Bugg
  let draw = SVG().addTo('.buggy-road').size(roadLength, roadHeight*2);
  let rect = draw.rect(roadLength, roadHeight).attr({ fill: '#f06' });

  // calculate y position of road
  const roadPositionY = roadHeight/2;

  rect.attr({ x: 0, y: roadPositionY})
})

