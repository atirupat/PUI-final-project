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

// Assets to be loaded
PIXI.Assets.add('sky-background', './assets/background-2-02.png');
PIXI.Assets.load('sky-background').then(setup);

// Referencing Example Code from: https://pixijs.io/examples/#/demos-advanced/scratchcard.js
function setup() {
  const { width, height } = app.screen;
  const stageSize = { width, height };

  const courseBackground = Object.assign(PIXI.Sprite.from('sky-background'), stageSize);

  app.stage.addChild(courseBackground);
}

