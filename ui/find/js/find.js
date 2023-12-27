

function $(id){return document.getElementById(id);}

let params = new URLSearchParams(window.location.search);



let q = params.get("q");


$("cepret-search").value = q;

$("results_of").innerHTML = `<span style="color:rgb(255,255,255);"> نتائج البحث عن :  </span> <span style="color:orange;">${q}</span>`;
