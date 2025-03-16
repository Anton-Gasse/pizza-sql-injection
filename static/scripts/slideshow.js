const pictograms = [
    {
        src: "/static/images/black_hat.svg",
        name: "Black Hat Hacker",
        text: "Hacker, die ohne Erlaubnis für ihre eigene Bereicherung hacken.",
        source: "[2]"
    },
    {
        src: "/static/images/white_hat.svg",
        name: "White Hat Hacker",
        text: "Hacker, die mit Erlaubnis hacken, um Schwachstellen zu finden und Angriffe abzuwehren bzw. die Sicherheit von Systemen zu verbessern.",
        source: "[2][3]"
    },
    { 
        src: "/static/images/grey_hat.svg",
        name: "Grey Hat Hacker",
        text: "Hacker, die zwar ohne Erlaubnis aber aus ethischen Gründen hacken.",
        source: "[2]"
    },
    {
        src: "/static/images/hacktivist.svg",
        name: "Hacktivist",
        text: "Hacker, die aus politischer Motivation hacken, um Aufmerksamkeit zu erlangen.",
        source: "[3]"
    },
    {
        src: "/static/images/state_sponsored_hacker.svg",
        name: "State-sponsored Hacker",
        text: "Hacker, die im Auftrag von Staaten oder Regierungen hacken.",
        source: "[3]"
    },
    {
        src: "/static/images/script_kiddie.svg",
        name: "Script-Kiddie",
        text: "Kriminelle, die nicht über die notwendigen Kenntnisse verfügen und lediglich die Werkzeuge von qualifizierten Hackern benutzen.",
        source: "[3]"
    }
];
let currentIndex = 0;

function renderSlides() {
    const slidesContainer = document.getElementById("slideshow-container");
    slidesContainer.innerHTML = "";
    pictograms.forEach((pic, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");

        const img = document.createElement("img");
        img.src = pic.src;

        if (index === currentIndex) {
            slide.style.transform = "translateX(0) scale(1.2)";
            img.style.opacity = "1";
        } else if (index === ((currentIndex - 1 + pictograms.length) % pictograms.length)) {
            slide.style.transform = "translateX(-120px) scale(0.8)";
            img.style.opacity = "0.5";
        } else if (index === ((currentIndex + 1) % pictograms.length)) {
            slide.style.transform = "translateX(120px) scale(0.8)";
            img.style.opacity = "0.5";
        } else {
            slide.style.opacity = "0";
        }

        slide.appendChild(img);
        slidesContainer.appendChild(slide);
    });

    const heading = document.getElementById("slide-name");
    const text = document.getElementById("slide-text");
    const source = document.getElementById("slide-source");
    heading.innerText = pictograms[currentIndex].name;
    text.innerText = pictograms[currentIndex].text;
    source.innerText = pictograms[currentIndex].source;
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = pictograms.length - 1;
    if (currentIndex >= pictograms.length) currentIndex = 0;
    renderSlides();
}