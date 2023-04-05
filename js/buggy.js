import { SVG } from '@svgdotjs/svg.js';

SVG.on(document, 'DOMContentLoaded', function() {
  let draw = SVG().addTo('body').size(300, 300);
  let rect = draw.rect(100, 100).attr({ fill: '#f06' });
})