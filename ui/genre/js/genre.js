

function $(id){return document.getElementById(id);}

let params = new URLSearchParams(window.location.search);



$("genre_header").innerHTML = $("genre_header").innerHTML + `<span style="color: #ffb92a">${translate(params.get("genreId"))}</span>` ; 

