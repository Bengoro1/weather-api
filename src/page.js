import { obj } from './index.js';
import getData from './get-data.js';

export default function page() {
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

  const current = document.createElement('div');
  container.appendChild(current);

  console.log(obj);
  console.log(obj.forecast.forecastday[0].hour);
  const d = new Date();
  console.log(d);
}
