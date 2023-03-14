const fs = require('fs');
const path = require('path');

// Get the path to the controllers directory
const modelsDir =  path.join(__dirname, '../models');

// Get an array of all the controller files
const modelFiles = fs.readdirSync(modelsDir);

// Require all the controller files and store them in an object
let models = {};
for(let ind = 0; ind < modelFiles.length; ind++){
    const modelName = path.basename(modelFiles[ind], '.js');
    const model = require(path.join(modelsDir, modelFiles[ind]));
    models[modelName] = model;
}

// Export the controllers object
module.exports = models;