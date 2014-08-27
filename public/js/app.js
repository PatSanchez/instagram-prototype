$(function() {
    function searchForHash(hashtag){
        window.location.href = '/gallery/' + encodeURIComponent(hashtag.replace(/#/g,'').replace(/ /g, ''));
    }
    $('#submit-hashtag').on('click', function(){
        var inputValue = $('#hashtag').val();
        if(inputValue){
            searchForHash(inputValue);
        }
    });
    $('#hashtag').on('keyup', function(e){
        if(e.keyCode === 13){
            searchForHash($('#hashtag').val());
        } 
    });
});