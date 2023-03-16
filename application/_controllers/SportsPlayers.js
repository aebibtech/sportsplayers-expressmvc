const BaseController = require('../../system/BaseController');
const sport = require('../_models/Sport');
const sportsPlayer = require('../_models/SportsPlayer');

class SportsPlayers extends BaseController{
    /* /index just goes to /search */
    index(request, response){
        response.redirect('/search');
    }

    /* route: /search - handles both get and post requests */
    async search(request, response){
        const viewData = {};
        viewData.sports = await sport.getAllSports();

		/* load the appropriate view file */
		response.render('sportsplayers/search', viewData);
    }

    async api_search(request, response){
        const viewData = {};
         /* if no search criteria, just get all players
            else, get players matching the search criteria
        */
    	if(!request.body.hasOwnProperty('name') && !request.body.hasOwnProperty('genders') && !request.body.hasOwnProperty('sports')){
			viewData.players = await sportsPlayer.getAllPlayers();
    	}else{
			viewData.players = await sportsPlayer.searchPlayers(request.body);

			/* to reflect what was searched on the form */
			viewData.posted = request.body;
		}
        response.render('sportsplayers/partial_players', viewData);
    }
}

module.exports = new SportsPlayers;