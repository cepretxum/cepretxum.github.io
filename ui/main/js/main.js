




genre = ["Drama","Action","Fantazia"];

genre = ["غرب أمريكى","أكشن","كوميديا"];










const root = document.getElementById("root")
let movies = [],
    page = 1,
    inSearchPage = false



    /* get data from api and recieve it to (html)rendrer */
const fetchAndShowResults = async (URL) => {
        const data = await fetchData(URL)
        data && showResults(data.results)
    }




    /* html template */

const movieCard = (movie) =>
    `<div class="col">
          <div class="card">
          
          <div class="title_poster"><img src="${movie.poster_path}" width="100%" height="100%"></img> </div>

          

          <div class="title_name">${movie.original_title}</div>

          
          <div class="title_genre" id="title_genre"><div class="genre_box">${genre.join("</div><div class='genre_box'>")}</div></div>


          <div class="year_imdb">

          <div class="title_year">${new Date(movie.release_date).getFullYear()}</div>

          <div class="title_imdb">


         <div class="title_imdb_star"> <div class="full-star"></div> </div>
         <div class="title_imdb_rate"> ${movie.vote_average}</div>
          
          </div>
          
          </div>

          
          </div>
        </div>`

        /* render received data */
const showResults = (items) => {
    let content = !inSearchPage ? root.innerHTML : ""
    if (items && items.length > 0) {
        items.map((item) => {
            
            let { poster_path, original_title, release_date, overview } = item

            if (poster_path) {
                poster_path = imgURL + poster_path
            } else {
                poster_path = "./img-01.jpeg"
            }

            if (original_title.length > 20) {
                original_title = original_title.slice(0, 20) + "..."
            }

            if (!overview) {
                overview = "No overview yet..."
            }

            if (!release_date) {
                release_date = "No release date"
            }

            vote_average = item.vote_average;
            const movieItem = {
                poster_path,
                original_title,
                release_date,
                vote_average,
                overview,
            }

            content += movieCard(movieItem)
        })
    } else {
        content += "<p>Something went wrong!</p>"
    }

    root.innerHTML = content // Inject content to root
}


/* page variable ++ .. and get specific page */

const handleLoadMore = () => {
    getSpecificPage(++page)
}

/* detect if we get the end of page */
const detectEndAndLoadMore = (e) => {


   
        const endOfPage =
          window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    
        if (endOfPage) {
          
            handleLoadMore()

        }
    





    
    /*

    let el = document.documentElement
    if (
        !inSearchPage &&
        el.scrollTop + el.clientHeight == el.scrollHeight
    ) {
        
        console.log("BINGO!")
        handleLoadMore()
    }


    */

}



window.addEventListener("scroll", detectEndAndLoadMore);

function init() {
    inSearchPage = false
    fetchAndShowResults(URL)
}

init();




/* for developing purpose */


title_url = window.location.origin+"/ui/title/title.html";

Tree.Title(title_url);
