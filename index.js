const fs = require('fs');
const path = require('path');

function snap(directory) {
    const files = fs.readdirSync(directory);
    const toDelete = files.slice(0, Math.ceil(files.length / 2));

    toDelete.forEach(file => {
        const filePath = path.join(directory, file);
        if (fs.statSync(filePath).isFile()) {
            fs.unlinkSync(filePath);
        } else {
            fs.rmdirSync(filePath, { recursive: true });
        }
    });
}

module.exports = { snap };
