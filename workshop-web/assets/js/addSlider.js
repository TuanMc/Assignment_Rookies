const pictures = [
    {
        id: 0,
        url: "https://github.com/Hoangthang017/Assignment_Rookies/blob/main/workshop-web/assets/img/slide_01.jpg?raw=true"
    },
    {
        id: 1,
        url: "https://github.com/Hoangthang017/Assignment_Rookies/blob/main/workshop-web/assets/img/slide_02.jpg?raw=true"
    },
    {
        id: 2,
        url: "https://github.com/Hoangthang017/Assignment_Rookies/blob/main/workshop-web/assets/img/slide_03.jpg?raw=true"
    }
];

// function add pictures to html
export function addSlider() {
    // get slider elements 
    let sliderElements = document.querySelector("#slider .carousel-inner");

    // add pictures to html
    sliderElements.innerHTML += pictures.map(pic => {
        return `
            <div class="carousel-item">
                <img src="${pic.url}"
                    class="d-block w-100" alt="SLIDER ${pic.id + 1}">
            </div>
        `
    }).join("");

    // add active pic
    sliderElements.querySelector(".carousel-item").classList.add("active");
}
