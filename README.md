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
#### Sample Controller
```
Filename: application/_controllers/Hello.js

const BaseController = require('../../system/BaseController');`

class Hello extends BaseController{
    index(request, response){
        response.send('Hello world!');
    }
}

module.exports = new Hello;
```
**To render a view file in your controller, use `response.render(<VIEW PATH>, <VIEW DATA OBJECT>)`.**

### Models
Models are found at the `application/_models` folder.
#### Sample Model
```
Filename: application/_models/Sport.js

const BaseModel = require('../../system/BaseModel');

class Sport extends BaseModel{
    getAllSports(){
        return this.fetch_all('SELECT id,sport_name FROM sports');
    }
}

module.exports = new Sport;
```

### Routes
Routes are configured at the `application/routes.js` file.
#### Sample routes.js file
```
Filename: application/routes.js

/* DO NOT CHANGE */
const Express = require("express");
const Router = Express.Router();
const Controllers = require('../system/EnumerateControllers');

/* Define your routes here
Pass a route on Router.get with the appropriate function from your controller.

For route parameters, prepend it with ':' so that it will be available on request.params
Example: /hello/:num ; num can be accessed by calling request.params.num
You can also append '?' at the end of the route parameter in order to make it optional.
*/
// Router.get("/", Controllers.User.index);
// Router.get("/hello/:num?", Controllers.User.hello);
Router.get("/welcome", Controllers.Welcome.index);
Router.get('/', Controllers.SportsPlayers.index);
Router.get('/search', Controllers.SportsPlayers.search);
Router.route('/api/search').get(Controllers.SportsPlayers.api_search).post(Controllers.SportsPlayers.api_search);

module.exports = Router;
```

### Views
Views are located at the `application/_views` folder. Views should have a file extension of `.ejs`.
Views utilize EJS templates. More information [here](https://ejs.co/#docs).
#### Sample view file
```
Filename: application/_views/sportsplayers/search.ejs

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="/css/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js" integrity="sha512-rpLlll167T5LJHwp0waJCh3ZRf7pO6IT1+LZOhAyP6phAirwchClbTZV3iqL3BMrVxIYRbzGTpli4rfxsCK6Vw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <script src="/js/main.js"></script>
        <title>Sports Players Express</title>
    </head>
    <body class="container bg-dark">
        <form class="bg-white" action="/api/search" method="POST">
            <label class="form-label" for="name">Search Users</label>
            <input class="form-control mb-3" type="text" name="name" id="name">
            <!-- Genders -->
            <label class="lead"><input type="checkbox" name="genders[]" value="1"> Female</label>
            <label class="lead"><input type="checkbox" name="genders[]" value="2"> Male</label>
            <!-- Sports -->
            <h2 class="fs-5 mt-4">Sports</h2>
<%  for(var sportInd = 0; sportInd < sports.length; sportInd++){ %>
            <label class="form-label lead"><input type="checkbox" name="sports[]" value="<%=sports[sportInd].id %>"> <%=sports[sportInd].sport_name %></label>
<%  } %>
			<button class="btn btn-success float-end" type="submit" id="searchButton"><i class="fa fa-search"></i> Search</button>
        </form>
		<main id="playersArea" class="bg-white"></main>
    </body>
</html>
```