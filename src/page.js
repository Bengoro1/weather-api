import { obj } from './index.js';
import getData from './get-data.js';

export default function page() {
  if (!document.querySelector('.container')) {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
  }
  const container = document.querySelector('.container');

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const input = document.createElement('input');
  input.value = 'Bratislava';
  container.appendChild(input);
  
  const button = document.createElement('button');
  container.appendChild(button);
  button.textContent = 'click';
  button.addEventListener('click', () => {
    getData(input.value);
  });

  window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      button.click();
    }
  });

  const currentDay = document.createElement('div');
  currentDay.classList.add('day-container');
  container.appendChild(currentDay);
  const location = document.createElement('div');
  currentDay.appendChild(location);
  location.textContent = `${obj.location.name} (${obj.location.region}) ${obj.location.country} ${obj.location.localtime}`;
  
  const astro = document.createElement('div');
  astro.classList.add('astro');
  currentDay.appendChild(astro);

  const astroArr = ['moonrise', 'moonset', 'sunrise', 'sunset'];

  function astroPar(el) {
    const div = document.createElement('div');
    astro.appendChild(div);
    div.textContent = `${el.charAt(0).toUpperCase() + el.slice(1)}: ${obj.forecast.forecastday[0].astro[el]}`;
  }

  for (let i = 0; i < astroArr.length; i++) {
    astroPar(astroArr[i]);
  }
  
  const currentCondition = document.createElement('div');

  console.log(obj);
  console.log(obj.forecast.forecastday[0].hour);
  const d = new Date();
  console.log(d);
}
