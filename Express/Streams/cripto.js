
import fs from "fs"
import crypto from "crypto"

function generateRandomText(sizeInMB) {
    const targetSize = sizeInMB * 1024 * 1024; // Convert MB to bytes
    let content = '';

    while (content.length < targetSize) {
        const randomString = crypto.randomBytes(1024).toString('hex'); // Generate 1KB random hex string
        content += randomString;
    }

    return content.slice(0, targetSize); // Truncate to exact size
}

const randomText = generateRandomText(100); // Adjust size (e.g., 0.1 for 100MB)

fs.writeFile('random_text.txt', randomText, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Random text file created successfully!');
    }
});
