//console.log('Hola Mundo!, desde Webpack');
import './style.css';
import { firstMessage, delayedMessage } from './message.js';
import platziImg from './platzi.png'

console.log('Hola Mundo!, desde Webpack en un webpack.config');
document.write(firstMessage);
delayedMessage();

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);
console.log('Hola mundo !, desde webpack en un webpackl.config');