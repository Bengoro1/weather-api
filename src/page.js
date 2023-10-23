import { obj } from './index.js';
import getData from './get-data.js';

export default function page() {
  if (!document.querySelector('.container')) {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
    const input = document.createElement('input');
    input.value = 'Bratislava';
    container.appendChild(input);
    
    const button = document.createElement('button');
    container.appendChild(button);
    button.textContent = 'click';
    button.addEventListener('click', () => {
      getData(input.value);
    });
  }
  const container = document.querySelector('.container');

  const currentDay = document.createElement('div');
  currentDay.classList.add('day-container');
  container.appendChild(currentDay);
  const location = document.createElement('div');
  currentDay.appendChild(location);
  location.textContent = `${obj.location.name} (${obj.location.region}) ${obj.location.country} ${obj.location.localtime}`;
  
  console.log(obj);
  console.log(obj.forecast.forecastday[0].hour);
  const d = new Date();
  console.log(d);
}
