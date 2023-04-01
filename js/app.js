import { Application, Assets, Sprite } from 'pixi.js';

// Starter code referenced from: https://www.npmjs.com/package/pixi.js?activeTab=readme
const app = new Application({width: 256, height: 256});
document.body.appendChild(app.view);

const texture = await Assets.load('C:\Users\anish\Desktop\PUI 2023\final-project\PUI-final-project\assets\sky background.svg');

const skyBackground = new Sprite(texture);

skyBackground.x = app.renderer.width / 2;
skyBackground.y = app.renderer.height / 2;

app.stage.addChild(skyBackground);
