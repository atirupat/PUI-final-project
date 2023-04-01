// Application Setup (code referenced from: https://youtu.be/ajaduDDePIY)
const Application = PIXI.Application;

const app = new Application(
  {
    width: 1000,
    height: 500,
    transparent: false,
    antialias: true
  }
);

app.renderer.resize(window.innerWidth,window.innerHeight);

app.renderer.view.style.position = 'absolute';
document.body.appendChild(app.view);

app.ticker.add(() => TWEEDLE.Group.shared.update());

// Assets to be loaded
PIXI.Assets.add('sky-background', './assets/background-2-02.png');
PIXI.Assets.load('sky-background').then(bkgSetup);

// time animation in miliseconds!
const time = 10000;

const xTargets = [100, 500, 100, 300, 700, 0];
const yTargets = [200, 100, 500, 100, 500, 0];

//Create Buggy Sprite
const buggyTexture = PIXI.Texture.from('./assets/black-buggy.png');
const buggy = new PIXI.Sprite(buggyTexture);
app.stage.addChild(buggy);

new TWEEDLE.Tween(buggy).to({ x: xTargets, y: yTargets }, time)
    .repeat(Infinity)
    .start();

// Referencing Example Code from: https://pixijs.io/examples/#/demos-advanced/scratchcard.js
function bkgSetup() {
  const { width, height } = app.screen;
  const stageSize = { width, height };

  const courseBackground = Object.assign(PIXI.Sprite.from('sky-background'), stageSize);

  app.stage.addChild(courseBackground);
}





