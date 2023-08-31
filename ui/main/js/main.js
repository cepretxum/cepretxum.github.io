const apiKey = "3fd2be6f0c70a2a598f084ddfb75487c"
const URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
const imgURL = "https://image.tmdb.org/t/p/w1280"
const searchURL =
    "https://api.themoviedb.org/3/search/movie?&api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="




genre = ["Drama","Action","Fantazia"];











const root = document.getElementById("root")
let movies = [],
    page = 1,
    inSearchPage = false

// Fetch json data from URL
async function fetchData(URL) {
    try {
        const data = await fetch(URL).then((res) => res.json())
        return data
    } catch (error) {
        console.log(error.message)
        return null
    }
}

const fetchAndShowResults = async (URL) => {
    const data = await fetchData(URL)
    data && showResults(data.results)
}

const getSpecificPage = (page) => {
    const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`
    fetchAndShowResults(URL)
}

const movieCard = (movie) =>
    `<div class="col">
          <div class="card">
          
          <div class="title_poster"><img src="${movie.poster_path}" width="100%" height="100%"></img> </div>

          <div style="position:absolute;top:0%;left:0%;">
          
          <div class="tie">
          <div class="tie_line"></div>
          </div>
          
          </div>

          <div class="title_name">${movie.original_title}</div>

          
          <div class="title_genre">${genre.join(" | ")}</div>


          <div class="year_imdb">

          <div class="title_year">${new Date(movie.release_date).getFullYear()}</div>

          <div class="title_imdb">


         <div class="title_imdb_star"> <div class="full-star"></div> </div>
         <div class="title_imdb_rate"> 9.8</div>
          
          </div>
          
          </div>

          
          </div>
        </div>`

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

            const movieItem = {
                poster_path,
                original_title,
                release_date,
                overview,
            }

            content += movieCard(movieItem)
        })
    } else {
        content += "<p>Something went wrong!</p>"
    }

    root.innerHTML = content // Inject content to root
}

const handleLoadMore = () => {
    getSpecificPage(++page)
}

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