/**
 * const cities = {
  Nantes: {
    lat: 47.2184,
    lon: -1.5536
  },
  Paris: {
    lat: 48.8566,
    lon: 2.3522
  },
  Rennes: {
    lat: 48.1173,
    lon: -1.6778
  },
  Caen: {
    lat: 49.1829,
    lon: -0.3707
  },
  Marseille: {
    lat: 43.2965,
    lon: 5.3698
  }
};
 * appel l'API Open-Meteo
 * Doc : https://open-meteo.com/en/docs
 * @param {number} lat latitude
 * @param {number} lon longitude
 * @returns retourne les données fournies par l'API. (pour données actuelles, appeler current_weather)
 */
export async function callOpenMeteoAPI(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
  try {
    const reponse = await fetch(url);
    const resultat = await reponse.json();
    console.log(resultat);
    return resultat;
  } catch (err) {
    console.error(err);
  }
}
