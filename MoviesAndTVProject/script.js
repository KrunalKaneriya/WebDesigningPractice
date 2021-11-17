const form = document.querySelector("#searchform");
let search = document.querySelector("#name");
const section = document.querySelector("#movies");


form.addEventListener("submit", async function(e) {
    e.preventDefault();
    let searchValue = search.value; //Getting The Input Value


    //*Sending Request For Movies Data
    let searchRequest=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0e485f0e84a9fc8ded2d8ce1e0378080&query=${searchValue}`);
    let searchRequestResult = searchRequest.data; 
    iterateMovies(searchRequestResult.results);
})

const iterateMovies = (moviesArray) => {
    for(let movies of moviesArray) {
        let maindiv = document.createElement("DIV");
        maindiv.setAttribute("id","maindiv");
        let textdiv = document.createElement("DIV");
        textdiv.classList.add("movie-info");
        let image = document.createElement("IMG");
        let moviename = document.createElement("SPAN");
        let rating = document.createElement("SPAN");
        image.src = `https://image.tmdb.org/t/p/w185/${movies.poster_path}`;
        moviename.innerHTML = movies.title;
        rating.innerHTML = movies.popularity;
        maindiv.appendChild(image);
        textdiv.appendChild(moviename);
        // textdiv.appendChild(rating);
        maindiv.appendChild(textdiv);
        section.appendChild(maindiv);
    }
}

