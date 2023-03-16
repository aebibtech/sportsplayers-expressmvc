$(document).ready(function(){
    $.get('/api/search', function(res){
        $('#playersArea').html(res);
    });
    $('form').submit(function(){
        $.post($(this).attr('action'), $(this).serialize(), function(res){
            $('#playersArea').html(res);
        });
        return false;
    });
});