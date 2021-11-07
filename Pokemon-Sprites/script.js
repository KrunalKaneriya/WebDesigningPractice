const container = document.querySelector("#pokemonContainer");
container.style.textAlign = "center";
const images = document.querySelector('img');

for(let i=0;i<=500;i++) {
    let link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
    let imgTags = document.createElement("img");
    let span = document.createElement("span");
    let div = document.createElement("div");
    span.innerText = `#${i}`;
    div.style.display = "inline-block";
    imgTags.style.display = "block";
    imgTags.src = link;
    div.appendChild(imgTags);
    div.appendChild(span);
    container.appendChild(div);
}
