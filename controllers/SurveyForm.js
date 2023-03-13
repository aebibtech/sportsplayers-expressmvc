class SurveyForm{
    index(request, response){
        response.render('surveyform/index');
    }
    result(request, response){
        console.log('request body', request.body);
        response.render('surveyform/result', {result: request.body});
        // response.redirect('/');
    }
}

module.exports = new SurveyForm;