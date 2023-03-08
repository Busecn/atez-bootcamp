const fs = require('fs');
const JSZip = require('jszip');

function writeToFile(text, filePath) {
    fs.writeFile(filePath, text + '\n', function (err) {
        if (err) throw err;
        console.log('Text is written to the file!');
    });
}

function copyFile(sourcePath, targetPath) {
    fs.readFile(sourcePath, function (err, data) {
        if (err) throw err;
        writeToFile(data, targetPath);
    });
}

function zipFile(sourceDirectory, targetPath) {
    const zip = new JSZip();
    fs.readdir(sourceDirectory, (err, files) => {
        files.forEach(fileName => {
            const fileData = fs.readFileSync(sourceDirectory + '/' + fileName);
            zip.file(fileName, fileData);
            zip.generateNodeStream({type: 'nodebuffer', streamFiles: true})
                .pipe(fs.createWriteStream(targetPath))
                .on('finish', function () {
                    console.log(targetPath + " is written!");
                });
        });
    });
}