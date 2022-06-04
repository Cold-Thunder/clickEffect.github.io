var click = document.querySelector(".box");

click.addEventListener("click", function(e){
    var x = e.offsetX - 7;
    var y = e.offsetY - 7;

    var circle = document.querySelector("#circle");
    circle.classList.add("circle");
    circle.style.marginTop = `${y}px`;
    circle.style.marginLeft = `${x}px`;

    console.log(x, y);

    setTimeout(function(){
        circle.classList.remove("circle");
    }, 500);
})