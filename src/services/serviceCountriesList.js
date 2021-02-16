
const API_url = 'https://restcountries.eu/rest/v2/region/europe'

export const serviceCountryList = () => fetch(API_url).then(response => response.json())