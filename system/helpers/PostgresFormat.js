class PostgresFormat{
    static format(query, values){
        let newQuery = query;
        if(values === null){
            return query;
        }
        for(let ind = 0; ind < values.length; ind++){
            newQuery = newQuery.replace('$' + (ind + 1), "'" + values[ind] + "'");
        }
        return newQuery;
    }
    static MySQLQueryToPostgreSQLQuery(query){
        if(query === null || query === ''){
            return '';
        }else{
            let queryChars = query.split('');
            let occurence = 0;
            for(let i = 0; i < queryChars.length; i++){
                if(queryChars[i] === '?'){
                    occurence++; 
                    queryChars[i] = '$' + occurence;
                }
            }
            return queryChars.join('');
        }
    }
}

module.exports = PostgresFormat;