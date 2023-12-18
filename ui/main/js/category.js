
function $(id) { return document.getElementById(id); }

let categories = document.getElementsByClassName("category");


for (var i=0;i<categories.length;i++){

    

    cat_name = categories.item(i).id;
    cat_board = categories.item(i).getElementsByClassName("category-content")[0];

    fetch(`/data/items-map/category/${cat_name}.json`)
         .then((resp)=>resp.json())
         .then((data)=>{

            cat_imdbIds = data;

            console.log(cat_name);
            console.log(cat_board);
            console.log(cat_imdbIds);

         })



}



