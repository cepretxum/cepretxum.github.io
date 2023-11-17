
var ar_genres = {
    "Action":"أكشن",
    "Adventure":"مغامرة",
    "Animation":"",
    "Biography":"",
    "Comedy":"",
    "Crime":"",
    "Documentary":"",
    "Drama":"",
    "Family":"",
    "Fantasy":"خيال",
    "Film-Noir":"",
    "History":"",
    "Horror":"",
    "Music":"",
    "Musical":"",
    "Mystery":"",
    "Romance":"",
    "Sci-Fi":"",
    "Short":"",
    "Sport":"",
    "Thriller":"",
    "War":"",
    "Western":""
};


function translate(k){

    if(k in ar_genres){
        return ar_genres[k];
    }else{
        return k;
    }
}


function translate_list(l){
    new_l = [];
    for(var i in l){
        new_l.push(translate(l[i]));
    }
    return new_l;
}

