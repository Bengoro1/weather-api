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
  currentCondition.classList.add('current-condition');
  currentDay.appendChild(currentCondition);

  const conditionText = document.createElement('div');
  conditionText.textContent = obj.current.condition.text;
  currentCondition.appendChild(conditionText);

  const conditionImg = document.createElement('img');
  conditionImg.src = 'https:' + obj.current.condition.icon;
  currentCondition.appendChild(conditionImg);

  const currentArr = ['cloud', 'feelslike_c', 'humidity', 'temp_c', 'vis_km', 'wind_kph', 'wind_dir'];

  function conditionPar(el) {
    const div = document.createElement('div');
    currentCondition.appendChild(div);
    div.textContent = `${el.charAt(0).toUpperCase() + el.slice(1)}: ${obj.current[el]}`;
  }

  for (let i = 0; i < currentArr.length; i++) {
    conditionPar(currentArr[i]);
  }

  const forecastContainer = document.createElement('div');
  forecastContainer.classList.add('forecast-container');
  container.appendChild(forecastContainer);

  const hourArr = ['condition', 'cloud', 'feelslike_c', 'humidity', 'temp_c'];

  function hourPar(i, el) {
    const div = document.createElement('div');
    document.querySelectorAll('.hour-card')[i].appendChild(div);
    if (el === 'condition') {
      const img = document.createElement('img');
      document.querySelectorAll('.hour-card')[i].appendChild(img);
      div.textContent = `${el}: ${obj.forecast.forecastday[0].hour[i][el].text}`;
      img.src = 'https:' + obj.forecast.forecastday[0].hour[i][el].icon;
    } else {
      div.textContent = `${el}: ${obj.forecast.forecastday[0].hour[i][el]}`;
    }
  }

  for (let i = 0; i < obj.forecast.forecastday[0].hour.length; i++) {
    const hourCard = document.createElement('div');
    forecastContainer.appendChild(hourCard);
    hourCard.textContent = i + ':00';
    hourCard.classList.add('hour-card');
    for (let j = 0; j < hourArr.length; j++) {
      hourPar(i, hourArr[j]);
    }
  }

  const dayArr = ['condition', 'avghumidity', 'avgtemp_c', 'maxwind_kph', 'daily_chance_of_rain'];

  function dayPar(i, el) {
    const div = document.createElement('div');
    document.querySelectorAll('.day-card')[i - 1].appendChild(div);
    if (el === 'condition') {
      const img = document.createElement('img');
      document.querySelectorAll('.day-card')[i - 1].appendChild(img);
      div.textContent = `${el}: ${obj.forecast.forecastday[i].day[el].text}`;
      img.src = 'https:' + obj.forecast.forecastday[i].day[el].icon
    } else {
      div.textContent = `${el}: ${obj.forecast.forecastday[i].day[el]}`;
    } 
  }

  for (let i = 1; i < obj.forecast.forecastday.length; i++) {
    const dayCard = document.createElement('div');
    dayCard.classList.add('day-card');
    dayCard.textContent = obj.forecast.forecastday[i].date;
    forecastContainer.appendChild(dayCard);
    for (let j = 0; j < dayArr.length; j++) {
      dayPar(i, dayArr[j]);
    }
  }

  console.log(obj);
  console.log(obj.forecast.forecastday[0].hour);
  const d = new Date();
  console.log(d);
}
