import './styles.css'
import Icon from './icon.png'
import printMe from './print.js'

const components = () => {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML = 'Test element ahihi';
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon)

  btn.innerHTML = 'click me ahihi';
  btn.onclick = printMe
  element.appendChild(btn)

  return element
}

document.body.appendChild(components())
