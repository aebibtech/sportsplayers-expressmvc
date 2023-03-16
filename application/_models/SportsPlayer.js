const BaseModel = require('../../system/BaseModel');

class SportsPlayer extends BaseModel{
    constructor(){
        super();
        /* reusable select query */
        this.baseQuery = `SELECT CONCAT(first_name,' ',last_name) AS name,gender,picture
                        FROM users
                        INNER JOIN sports ON users.sport_id = sports.id
                        INNER JOIN genders ON users.gender_id = genders.id`;
    }

    /* this should be called if no there is no search criteria submitted */
    getAllPlayers(){
        return this.fetch_all(this.baseQuery);
    }

    /* this should be called when there is any search criteria submitted */
    searchPlayers(searchCriteria){
        let values = [];
        let searchQuery = this.baseQuery;

        if(searchCriteria){
            searchQuery += " WHERE (first_name LIKE ? OR last_name LIKE ?) ";
        
            /*  add name twice for first name and last name
                will also handle blank input gracefully */
            values.push(`%${searchCriteria.name}%`);
            values.push(`%${searchCriteria.name}%`);

            /* add genders if present on post */
            if(searchCriteria.hasOwnProperty('genders')){
                searchQuery += "AND gender_id IN (?) ";
                values.push(searchCriteria.genders);
            }

            /* add sports if present on post */
            if(searchCriteria.hasOwnProperty('sports')){
                searchQuery += "AND sport_id IN (?)";
                values.push(searchCriteria.sports);
            }
        }

        return this.fetch_all(searchQuery, values);
    }
}

module.exports = new SportsPlayer;