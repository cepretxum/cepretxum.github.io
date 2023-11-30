

/* events listener */



function cardListener(e){
    window.location.href="/ui/title/title.html?imdbId="+e.parentNode.id;
}



function playButtonListener(e){

    player_url = window.location.origin+"/ui/player/player.html?imdbId="+params.get("imdbId");

    Tree.Player(player_url);
    
}



