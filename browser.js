const Lyon = {
    longitude: 5.056393,
    latitude: 45.799091
};

const CP1 = {
    longitude: 6.325962,
    latitude: 45.963084
}

const CP2 = {
    longitude: 5.5494965842940385,
    latitude: 44.288420831829306
}

const CP3 = {
    longitude: 2.68614605774135,
    latitude: 45.53826622035537
}

const startLongitude = CP1.longitude;
const startLatitude = CP1.latitude;

const endLongitude = CP2.longitude;
const endLatitude = CP2.latitude;

async function downloadGPXFile(url) {
    try {
        const response = await axios.get(url, { responseType: 'blob' });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'route.gpx'); // Specify the file name
        document.body.appendChild(link);
        link.click();

        // Clean up and revoke the URL object
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
}

// Usage example
const fileURL = `https://bikerouter.de/brouter-engine/brouter?lonlats=${startLongitude},${startLatitude}|${endLongitude},${endLatitude}&profile=fastbike-asia-pacific&alternativeidx=0&format=gpx`;
downloadGPXFile(fileURL);