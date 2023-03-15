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
// Router.get("/", UserController.index);
// Router.get("/hello/:num?", UserController.hello);
Router.get('/', Controllers.Students.index);
Router.post('/login', Controllers.Students.login);
Router.get('/logoff', Controllers.Students.logoff);
Router.post('/register', Controllers.Students.register);
Router.get('/students/profile', Controllers.Students.profile);

module.exports = Router;