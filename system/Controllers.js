const fs = require('fs');
const path = require('path');

// Get the path to the controllers directory
const controllersDir =  path.join(__dirname, '../controllers');

// Get an array of all the controller files
const controllerFiles = fs.readdirSync(controllersDir);

// Require all the controller files and store them in an object
const controllers = {};
for(let ind = 0; ind < controllerFiles.length; ind++){
    const controllerName = path.basename(controllerFiles[ind], '.js');
    const controller = require(path.join(controllersDir, controllerFiles[ind]));
    controllers[controllerName] = controller;
}

// Export the controllers object
module.exports = controllers;