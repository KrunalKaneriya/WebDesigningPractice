const form = document.querySelector("#searchform");
const section = document.querySelector("#container");
form.addEventListener('submit',async function(e) {
    // let res =await fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`);
    // const data =await res.json();
    // console.log(data);
    e.preventDefault();
    let searchValue = form.elements.tvshowname.value;
    let res =await axios.get(`https://api.tvmaze.com/search/shows?q=${searchValue}`);
    let moviesArray = res.data;
    iterateMovieName(moviesArray);

    
    
})

const iterateMovieName = (moviesArray) => {

    for(let movie of moviesArray) {
        let image = document.createElement("IMG");
        let divs = document.createElement("DIV");
        let movieText = document.createElement("P");
        let ratingText = document.createElement("P");
        
        if(movie.show.image) {
            image.src = movie.show.image.medium;
            movieText.innerText =`Name:${movie.show.name}` ;
            if(movie.show.rating.average === null) {
                ratingText.innerText = "Rating:N/A";
            }
            else {
                ratingText.innerText = `Rating:${movie.show.rating.average}`;

            }
            console.log(movie);
        }

        divs.appendChild(image);
        divs.appendChild(movieText);
        divs.appendChild(ratingText);
        section.appendChild(divs);
    }

}