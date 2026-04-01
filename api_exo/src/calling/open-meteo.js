/**
 * appel l'API Open-Meteo
 * Doc : https://open-meteo.com/en/docs
 * @param {number} lat latitude
 * @param {number} lon longitude
 * @returns retourne les données fournies par l'API. (pour données actuelles, appeler current_weather)
 */

export async function callOpenMeteoAPI(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Europe/Paris`;
  console.log(url);
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(url);
    return data;
  } catch (err) {
    console.error(err);
  }
}
