
let params = new URLSearchParams(window.location.search);

const URL = `/data/items-map/genre/${params.get("genreId")}/page/page-1.json`;




// Fetch json data from URL
async function fetchData(URL) {
    try {
        const data = await fetch(URL).then((res) => res.json());
        return data;
    } catch (error) {
        console.log(error.message)
        return null;
    }
}



const getSpecificPage = (page) => {
    //const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`;
    const URL = `/data/items-map/genre/${params.get("genreId")}/page/page-${page}.json`
    fetchAndShowResults(URL);
}