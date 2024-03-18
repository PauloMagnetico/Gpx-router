fetch("https://bikerouter.de/brouter-engine/brouter?lonlats=5.056393,45.799091|6.325962,45.963084&profile=fastbike-asia-pacific&alternativeidx=0&format=geojson", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.7",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Brave\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "Referer": "https://bikerouter.de/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));