class QueryFormat{
    static postgresFormat(query, values){
        let newQuery = query;
        if(values === null){
            return query;
        }
        for(let ind = 0; ind < values.length; ind++){
            newQuery = newQuery.replace('$' + (ind + 1), "'" + values[ind] + "'");
        }
        return newQuery;
    }
    static mysqlToPostgresQuery(query){
        if(query === null || query === ''){
            return '';
        }else{
            let queryChars = [];
            for(let i = 0; i < query.length; i++){
                queryChars.push(query[i]);
            }
            let occurence = 0;
            for(let i = 0; i < queryChars.length; i++){
                if(queryChars[i] === '?'){
                    occurence++; 
                    queryChars[i] = '$' + occurence;
                }
            }
            let queryFinal = '';
            for(let i = 0; i < queryChars.length; i++){
                queryFinal += queryChars[i];
            }
            return queryFinal;
        }
    }
    static postgresToMysqlQuery(query){
        if(query === null || query === ''){
            return '';
        }else{
            let queryChars = [];
            for(let i = 0; i < query.length; i++){
                queryChars.push(query[i]);
            }
            let occurence = 0;
            for(let i = 0; i < queryChars.length; i++){
                if(queryChars[i] === '$'){
                    occurence++; 
                    queryChars[i] = '?';
                    queryChars[i + 1] = '';
                }
            }
            let queryFinal = '';
            for(let i = 0; i < queryChars.length; i++){
                queryFinal += queryChars[i];
            }
            return queryFinal;
        }
    }
}

module.exports = QueryFormat;