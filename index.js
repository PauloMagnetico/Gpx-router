const axios = require('axios');

const mapBoxBaseUrl = "https://api.mapbox.com/directions/v5";
const profile = "mapbox/cycling";
const coordinates = "-74.013733,40.78011;-73.952945,40.779936";
const access_token = "pk.eyJ1IjoicGF1bG9tYWduZXRpY28iLCJhIjoiY2w5ZnN2c3M5MGFrZjNvazI4bDlycmpmNSJ9.vqHzOxa4Pb4j9ehe3hC3Xg";

// Construct the URL
const url = `${mapBoxBaseUrl}/${profile}/${coordinates}?access_token=${access_token}`;

// Make the request to Mapbox using Axios
axios.get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
