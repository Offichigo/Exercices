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
  Caen: {
    lat: 49.1829,
    lon: -0.3707,
  },
  Marseille: {
    lat: 43.2965,
    lon: 5.3698,
  },
  Cherbourg: {
    lat: 49.650002,
    lon: -1.65,
  },
  Nancy: {
    lat: 48.683331,
    lon: 6.2,
  },
};

//récupérer le li
//changer le texte du li
// Afficher la météo

function weatherEmoji(code) {
  if (code === 0) return "☀️";
  if (code <= 2) return "🌤️";
  if (code <= 3) return "☁️";
  if (code <= 48) return "🌫️";
  if (code <= 57) return "🌦️";
  if (code <= 67) return "🌧️";
  if (code <= 77) return "🌨️";
  if (code <= 82) return "⛈️";
  return "🌩️";
} //switch case

let renderOpenMeteo = async () => {
  Object.entries(cities).forEach(([name, details]) => {
    const bouton = document.getElementById(name.toLowerCase());
    bouton.addEventListener("click", async () => {
      const data = await callOpenMeteoAPI(details.lat, details.lon);
      const currentWeather = data.current_weather.temperature;
      const currentCode = data.current_weather.weathercode;
      const lis = document.querySelectorAll("li");
      const dayWeather = document.querySelector(".list");
      lis.forEach((li, index) => {
        const daily = new Date(data.daily.time[index]).toLocaleDateString(
          "fr-FR",
          {
            weekday: "long",
            day: "numeric",
            month: "long",
          },
        );
        li.innerText = `${weatherEmoji(data.daily.weathercode[index])} ${daily} : Température min : ${data.daily.temperature_2m_min[index]}°C, Température max : ${data.daily.temperature_2m_max[index]}°C `;
      });
      dayWeather.innerText = `${weatherEmoji(currentCode)}Actuellement à ${name} il fait : ${currentWeather}°C`;
    });
    document.getElementById("nantes").click();
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
