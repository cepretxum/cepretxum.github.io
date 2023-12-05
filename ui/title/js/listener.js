

/* events listener */



function cardListener(e){
    window.location.href="/ui/title/title.html?imdbId="+e.parentNode.id;
}



function playButtonListener(e){

    /*
    player_url = window.location.origin+"/ui/player/player.html?imdbId="+params.get("imdbId");

    Tree.Player(player_url);
    */

    netscape_url = window.location.origin+"/ui/player/netscape/netscape.txt";
    C = "";
    if(Network.isConnected()){
        C = Requests.GET(netscape_url);
    }




    v_id = "1CEpQy-GuxySOz9mssy74NCSozrSwXJ3S";
    v_uuid = "b6b1a447-d0ae-491a-9885-d56f021f41dc";
    v_at = "APZUnTVEBvaQVwShmlTpLZpBYv9P:1701818124092";

    video_url = build_drive_download_link(v_id,v_uuid,v_at);
    console.log(video_url);
    video_url="https://drive.usercontent.google.com/download?id=1CEpQy-GuxySOz9mssy74NCSozrSwXJ3S&export=download&authuser=2&confirm=t&uuid=b6b1a447-d0ae-491a-9885-d56f021f41dc";
    Tree.CustomP3(video_url,netscape_url,C);
}

function build_drive_download_link(id,uuid,at){
    b = `https://drive.usercontent.google.com/download?id=${id}`;
    c = `&export=download&authuser=0&confirm=t&uuid=${uuid}&at=${at}`;
    return b+c;
    }



