// Global Variables

const roadHeight = document.querySelector('.buggy-road').clientHeight;
const roadLength = document.querySelector('.buggy-road').scrollWidth;
console.log(roadHeight);
console.log(roadLength);

// SVG.on(document, 'DOMContentLoaded', function() {
//   let draw = SVG().addTo('.buggy-road').size(roadLength, roadHeight*2);
//   // Draw Buggy
//   let buggyImage = draw.image('./assets/black-buggy.png');
//   buggyImage.size(200,200);
//   buggyImage.attr({x:0, y:0});

//   // Draw Road
//   let rect = draw.rect(roadLength + 30, roadHeight).attr({ fill: '#f06' });

//   // calculate y position of road
//   const roadPositionY = 122;

//   rect.attr({ x: 0, y: roadPositionY})
// })

