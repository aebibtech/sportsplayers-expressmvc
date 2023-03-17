const sport = require('../_models/Sport');
const sportsPlayer = require('../_models/SportsPlayer');

class SportsPlayers{
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

    /* intended to be consumed by AJAX, renders a partial */
    async api_search_get(request, response){
        const viewData = {};
		viewData.players = await sportsPlayer.getAllPlayers();
        response.render('sportsplayers/partial_players', viewData);
    }

    /* intended to be consumed by AJAX, renders a partial */
    async api_search_post(request, response){
        const viewData = {};
        viewData.players = await sportsPlayer.searchPlayers(request.body);
        response.render('sportsplayers/partial_players', viewData);
    }
}

module.exports = new SportsPlayers;