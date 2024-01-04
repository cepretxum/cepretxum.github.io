

/* events listener */



function cardListener(e){
    window.location.href="/ui/title/title.html?imdbId="+e.parentNode.id;
}




function playButtonListener(e){

    /*
    player_url = window.location.origin+"/ui/player/player.html?imdbId="+params.get("imdbId");

    Tree.Player(player_url);
    */

    Msg();
    Ads.showRewardedAd();
    setTimeout(function() {
        //customp3_play("1yfRvES0uVPio2BZHcfpHoCLCxg6jomlC",0);
        Ocustomp3_play("https://flawtantaedu-my.sharepoint.com/personal/ug_31146395_f-law_tanta_edu_eg/_layouts/15/download.aspx?UniqueId=bbc4c71e%2D9f8e%2D441b%2D9c66%2Dcc000d5b3d98");
    }, 1000);
    

    /*
    netscape_url = window.location.origin+"/ui/player/netscape/netscape.txt";
    C = "";
    if(Network.isConnected()){
        C = Requests.GET(netscape_url);
    }




    v_id = "1CEpQy-GuxySOz9mssy74NCSozrSwXJ3S";
    v_uuid = "8472c0e1-d073-445c-9c3b-dd6df8e3021a";
    v_at = "APZUnTUawUyrLq7GpyidRbfoHti7:1701862330822";

    video_url = build_drive_download_link(v_id,v_uuid,v_at);

    Tree.CustomP3(video_url,netscape_url,C);
   */
}

function build_drive_download_link(id,uuid,at){
    b = `https://drive.usercontent.google.com/download?id=${id}`;
    c = `&export=download&authuser=0&confirm=t&uuid=${uuid}&at=${at}`;
    return b+c;
    }



