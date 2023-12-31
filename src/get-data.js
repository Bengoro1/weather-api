import { obj } from './index.js';
import page from './page.js';

async function getData(location) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=073602bf8ff34b64bdf213224231010&days=3&q=${location}`, {mode: 'cors'});
    const data = await response.json();
    obj = await data;
    page();
  } catch (error) {
    console.error(error);
  }
}

export default getData;
