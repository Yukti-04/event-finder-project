const fs = require('fs')
fs.readFile('./myFile.json', 'utf8', (err, jsonString) => {
    if (err) {
        return;
    }
    try {
        const customer = JSON.parse(jsonString);
} catch(err) {
        console.log('Error parsing JSON string:', err);
    }
})