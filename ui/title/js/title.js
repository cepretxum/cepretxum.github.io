
//Initial References


let result = document.getElementById("result");

//Function to fetch data from API
let getTitle = () => {
   let imdbId = "tt0325980";
   let url = `/data/item/${imdbId}.json`;
   
  
 
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //If movie exists in database
        console.log(data);
        if (data.type == "movie") {
          result.innerHTML = `
          <div class="info">
            <img src=${data.image} class='poster'>
            <div>
              <h2>${data.name}</h2>
              <div class="rating">
                <img src="./images/star-icon.svg">
                <h4>${data.rating}</h4>
              </div> 
              <div class="details">
                <span>${data.certificate}</span>
                <span style="color:yellow">${data.year}</span>
                <span>${data.time}</span>
              </div>
              <div class="genre">
                <div>${translate_list(data.genre).join("</div><div>")}</div>
              </div>   
            </div>
          </div>
          <h3>${Ar_Story}</h3>
          <p>${data.arDescription}</p>
         
          `;
        }
        //If movie does NOT exists in database
        else {
          result.innerHTML = `<h3 class="msg">Not Movie</h3>`;
        }
      })
      //If error occurs
      .catch(() => {
        result.innerHTML = `<h3 class="msg">!حدث خطأ ما</h3>`;
      });
  


};

//Call the getTitle()
getTitle();





/* Dev */
/* for developing purpose */


player_url = window.location.origin+"/ui/player/player.html";

Tree.Player(player_url);



