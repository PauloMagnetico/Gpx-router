const axios = require('axios').default;
const fs = require('fs');

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

async function downloadGPXFile(url, outputPath) {
    try {
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream' // Important for dealing with binary data like files
        });

        // Create a write stream to save the file to disk
        const writer = fs.createWriteStream(outputPath);

        // Pipe the response data to the file writer
        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        console.error(`An error occurred while trying to download the file: ${error.message}`);
    }
}

// Usage example
const fileURL = `https://bikerouter.de/brouter-engine/brouter?lonlats=${startLongitude},${startLatitude}|${endLongitude},${endLatitude}&profile=fastbike-asia-pacific&alternativeidx=0&format=gpx`;
const savePath = 'yourfile.gpx'; // Replace this with your desired save path

downloadGPXFile(fileURL, savePath).then(() => console.log('File downloaded successfully.')).catch(error => console.error(error));
