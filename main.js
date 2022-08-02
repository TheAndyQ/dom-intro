let heading = document.getElementById("one");
console.log(heading);

console.dir(heading);

heading.style["background-color"] = "#ff0000";

let allHeadings = document.getElementsByClassName("title");
console.log(allHeadings);

let colors = ["#00ff00", "#0000ff", "#00ffff", "#ff00ff"];
for (let i = 0; i < allHeadings.length; i++){
    let randomColor = Math.random();
    randomColor = randomColor * colors.length;
    randomColor = Math.floor(randomColor);

    allHeadings[i].style["color"] = colors[randomColor];
}

let heading2 = document.querySelector("#one");
heading2.innerHTML ="My last name is Quizpe";

let allHeadings2 = document.querySelectorAll("h1");
for (let i = 0; i < allHeadings2.length; i++);{
    allHeadings2[i].style["font-size"] = "4em";
}

let buttom = document.getElementById("background- buttom");
buttom.onclick = function() {
    let divContainer = document.querySelector("#container");
    divContainer.style["background-color"] = "#EEEE38";
}