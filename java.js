
let form =document.getElementById("heroForm");
let output =document.getElementById("output");
let levelUpBtn =document.getElementById("levelUpBtn");
let colorBtn =document.getElementById("colorBtn");
let card  =document.getElementById("heroCard");

//

let hero = {
    name: "",
    power: "",
    level: 1
};
// displays the input we got from our html 
function displayHero(){

    let message = `
    HeroName: ${hero.name} <br>
    Power: ${hero.power} <br>
    Level: ${hero.level}
    `;

    output.innerHTML = message;
}

form.addEventListener("submit", function(event){

     event.preventDefault();

    let nameInput = document.getElementById("heroName").value;
    let powerInput = document.getElementById("heroPower").value;
    let levelInput = document.getElementById("heroLevel").value;

    hero.name = nameInput;
    hero.power = powerInput;
    hero.level = Number(levelInput); // converting to number 

    displayHero();

});

function levelUp(){


    hero.level++;

displayHero();

}


levelUpBtn.addEventListener("click", levelUp);


function changeColor(){
    let colors = ["lightblue", "lightgreen", "lightyellow", "lightyellow", "lavender"];

    let randomColor = colors[Math.floor(Math.random()*colors.length)]

    card.style.backgroundColor = randomColor;
}

colorBtn.addEventListener("click", changeColor);


// when this card is clicked 
card.addEventListener("click", function(){
    console.log("Hero card Clicked")

});

document.addEventListener("keydown", function(event){

    if(event.key === "l" || event.key === "L"){
        levelUp();

        console.log("Keyboard clicked")
    }
   


});

