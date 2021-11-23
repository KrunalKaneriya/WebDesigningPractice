const scrollElement = document.querySelector(".scroll-container");
const scrollOffset = 350;


const getWindowHeight = () => {
    return window.innerHeight;
}
let getOffsetTop = () => {
    // console.log(`The Top Position is ${scrollElement.getBoundingClientRect().top}`);
    return scrollElement.getBoundingClientRect().top;
}

const elementInView = (el,offset) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= ((window.innerHeight)-offset)
    );
}

const displayElement = (element)  => {
    element.classList.add("scrolled");
    element.classList.remove("unscrolled");
}
const hideElement = (element)  => {
    element.classList.remove("scrolled");
    element.classList.add("unscrolled");
}

const handleScrollAnimation = () => {
    if(elementInView(scrollElement,scrollOffset)) {
        displayElement(scrollElement);
    }
    else{
        hideElement(scrollElement);
    }
}

window.addEventListener("scroll",() => {
    handleScrollAnimation();
})
// scrollElements.forEach((el) => {
//     el.classList.add("unscrolled");
// })

// let percentageScroll = scrollX;

// const elementInView = (el,percentageScroll) => {
//     const elementTop = el.getBoundingClientRect().top;

//     return elementTop<= (window.innerHeight) * (percentageScroll/100);
// }



// const handleScrollAnimation = () => {
//     scrollElements.forEach((el) => {
//         if(elementInView(el,40)) {
//             displayElement(el);
//         }
//     })
// }

let element = document.querySelector(".languages");
var languages = ["CSS","Javascript","Java","C++","C","ASP.NET","Visual Basic","PHP"];
let i=0;
const iterateLanguages = () => {
    setInterval(() => {
        
        element.innerHTML = languages[i];
        
        i++;
        if(i>=languages.length) {
            i=0;
        }
    },3000)

    
};



iterateLanguages();

/*********************Shapes Animation*********************/
