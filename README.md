# ExpressMVC

This is a Model-View-Controller (MVC) framework on top of Express.js. If you are looking for more organization in your Express projects, then you probably need this framework.

## Folder Structure
**application/assets** - store static assets (examples: CSS, JS, and image files) here.  
**application/config.js** - contains project configuration parameters. 
**application/routes.js** - contains routing parameters.
**application/controllers** - store controller classes here.  
**application/models** - store model classes here.  
**application/views** - store view files here. View files follow the EmbeddedJS syntax. Support for different template engines will be developed soon.  
**app.js** - main file to be started using the `node` command.  
**node_modules** - Node package dependecies for this framework.

## Features
- Separation of concerns (Model-View-Controller)
- Utilizes ES6 Classes for Models and Controllers
- MySQL Support out of the box
- Built-in model methods for querying the MySQL database
- Extensible
- Handling of routes through configuration
- EJS Templates for views.
- Can be used to build an API
- Built-in profiler

## Instructions to run
1. Change directory to the folder that contains this project.
2. Go to `application/config.js` and change/check the `PORT` parameter.
3. Run `node app.js`.
4. Go to `http://localhost:<PORT>/welcome` on your browser. If your port is 5000, then it will be `http://localhost:5000/welcome`.
5. You will see the welcome screen.

## Usage
### Controllers
Controllers are found at the `application/_controllers` folder.
#### Creating a controller
1. Create a new file in the `application/_controllers` folder. File name must be the same name as the class.  
Example: User.js -> class User extends BaseController
2. At the top of the file, put `const BaseController = require('../../system/BaseController');`.
3. (Optional) Underneath the BaseController require line, require models that you will use in the controller.
4. Create an ES6 class that extends the BaseController class.
5. Create methods that you will be using for the routes later. Methods should have the `request` and `response` as parameters.  
Example:  
Filename: Hello.js
```
const BaseController = require('../../system/BaseController');`

class Hello extends BaseController{
    index(request, response){
        response.send('Hello world!');
    }
}
```