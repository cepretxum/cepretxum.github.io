
/* rgbBox */
c_array = ["yellow","red","green","blue"];

/*refrences*/
var yLine=document.getElementById("yLine");

var rLine=document.getElementById("rLine");
var gLine=document.getElementById("gLine");
var bLine=document.getElementById("bLine");



                
                
                

                
            
var colors_interval = setInterval(colored, 300);

function colored() {

    random_y = Math.floor(Math.random() * c_array.length);

    random_r = Math.floor(Math.random() * c_array.length);
    random_g = Math.floor(Math.random() * c_array.length);
    random_b = Math.floor(Math.random() * c_array.length);


    yLine.style.background=c_array[random_y];

    rLine.style.background=c_array[random_r];
    gLine.style.background=c_array[random_g];
    bLine.style.background=c_array[random_b];

    /* random width */
    Width_Array = ["25%","20%","10%","5%"];
    yLine.style.width=Width_Array[ Math.floor(Math.random() * Width_Array.length)];

    rLine.style.width=Width_Array[ Math.floor(Math.random() * Width_Array.length)];
    gLine.style.width=Width_Array[ Math.floor(Math.random() * Width_Array.length)];
    bLine.style.width=Width_Array[ Math.floor(Math.random() * Width_Array.length)];
}


