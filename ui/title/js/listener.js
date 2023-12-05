

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




    v_id = "11ghnhcc8vIUKi6ZmiPVe62fsyRil2B7G";
    v_uuid = "6388cd88-bbe6-4c5a-b6f9-fcf769818162";
    v_at = "APZUnTVTSODr5F7lCVZCezYO9x_e:1701635377341";

    video_url = build_drive_download_link(v_id,v_uuid,v_at);

    Tree.CustomP3(video_url,netscape_url,C);
}

function build_drive_download_link(id,uuid,at){
    b = `https://drive.usercontent.google.com/download?id=${id}`;
    c = `&export=download&authuser=0&confirm=t&uuid=${uuid}&at=${at}`;
    return b+c;
    }



