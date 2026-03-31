import { callOpenMeteoAPI } from "./calling/open-meteo";
import "./style.css";

/**
 * Lance la requête vers l'API et remplace les données une fois obtenue.
 */
const cities = {
  Nantes: {
    lat: 47.2184,
    lon: -1.5536,
  },
  Paris: {
    lat: 48.8566,
    lon: 2.3522,
  },
  Rennes: {
    lat: 48.1173,
    lon: -1.6778,
  },
  Caen: {
    lat: 49.1829,
    lon: -0.3707,
  },
  Marseille: {
    lat: 43.2965,
    lon: 5.3698,
  },
};

//récupérer le li
//changer le texte du li
// Afficher la météo

let renderOpenMeteo = async () => {
  Object.entries(cities).forEach(([name, details]) => {
    const bouton = document.getElementById(name.toLowerCase());
    bouton.addEventListener("click", async () => {
      const data = await callOpenMeteoAPI(details.lat, details.lon);
      const currentWeather = data.current_weather.temperature;
      const lis = document.querySelectorAll("li");
      const dayWeather = document.querySelector(".list");
      lis.forEach((li, index) => {
        li.innerText = `${data.daily.time[index]} : Température min : ${data.daily.temperature_2m_min[index]}°C, Température max : ${data.daily.temperature_2m_max[index]}°C`;
      });
      dayWeather.innerText = `Actuellement à ${name} il fait : ${currentWeather}°C`;
    });
  });
};
//récupérer les li de chaque jour météo
//changer le texte de chaque li
//récupérer température
//afficher la météo de chaque jour du li
// =====================================================================
// - - - - - - - - - - - E X E C U T I O N - - - - - - - - - - - - - - -
// =====================================================================
renderOpenMeteo();
