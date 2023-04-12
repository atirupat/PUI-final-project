// Global Variables

const roadHeight = document.querySelector('.buggy-road').offsetHeight;
const roadLength = document.querySelector('.buggy-road').offsetWidth;
console.log(roadHeight);
console.log(roadLength);

SVG.on(document, 'DOMContentLoaded', function() {
  let draw = SVG().addTo('.buggy-road').size(300, 300);
  let rect = draw.rect(roadLength, 100).attr({ fill: '#f06' });

  // calculate y position of road
  const roadPositionY = roadHeight - 40;

  rect.attr({ x: 0, y: roadPositionY})
})

