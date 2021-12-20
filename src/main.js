let credits = 10;
let debt = 0;
let coffeeBeans = 0;
let coffee = 10;
let flour = 0;
let butter = 0;
let sugar = 0;
let chocolate = 0;
let eggs = 0;
let cinnamon = 0;
let cupcakes = 0;
let croissants = 0;
let coffeeCake = 0;
let timer = 0;
let snacks = Array("cupcakes", "croissants", "coffeeCake", "none");

function borrowCredits(){
    increaseCredits(1);
    debt++;
    document.getElementById("payoffDebt").hidden = false;
    document.getElementById("payoffDebt").innerHTML = "Pay Debt: " + debt;
}
function payDebt(){
    if(debt > 0 && credits >= debt){
        increaseCredits(-debt);
        debt = 0;
        document.getElementById("payoffDebt").hidden = true;
        document.getElementById("payoffDebt").innerHTML = "Pay Debt: " + 0;    
    }
    else if(debt > 0 && credits <= debt){
        debt = debt - credits;
        increaseCredits(-credits);
        document.getElementById("payoffDebt").innerHTML = "Pay Debt: " + debt;    
    }
}
function makeCoffee(){
    if(coffeeBeans >= 1){
        increaseBeans(-1);
        increaseCoffee(1);
    }
}
function buyIngredient(name){
    if(credits >= 1){
        increaseCredits(-1);
        if(name == "beans"){increaseBeans(1);}
        else if(name == "flour"){increaseFlour(1);}
        else if(name == "butter"){increaseButter(1);}
        else if(name == "sugar"){increaseSugar(1);}
        else if(name == "chocolate"){increaseChocolate(1);}
        else if(name == "eggs"){increaseEggs(1);}
        else if(name == "cinnamon"){increaseCinnamon(1);}
    }
}
function sellCoffee(){
    if(coffee >= 1){
        increaseCoffee(-1);
        increaseCredits(3);
    }
}
function makeCupcakes(){
    if(flour >= 2 && eggs >= 2 && chocolate >= 1){
        increaseFlour(-2);
        increaseEggs(-2);
        increaseChocolate(-1);
        increaseCupcakes(1);
    }
}
function makeCroissant(){
    if(flour >= 2 && butter >= 2 && sugar >= 1){
        increaseFlour(-2);
        increaseButter(-2);
        increaseSugar(-1);
        increaseCroissants(1);
    }
}
function makeCoffeeCake(){
    if(flour >= 2 && eggs >= 1 && sugar >= 1 && cinnamon >= 1){
        increaseFlour(-2);
        increaseCinnamon(-1);
        increaseEggs(-1);
        increaseSugar(-1);
        increaseCoffeeCake(1);
    }
}
function sellCupcakes(){
    if(cupcakes >= 1){
        increaseCupcakes(-1);
        increaseCredits(8);
    }
}
function sellCroissants(){
    if(croissants >= 1){
        increaseCroissants(-1);
        increaseCredits(8);
    }
}
function sellCoffeeCake(){
    if(coffeeCake >= 1){
        increaseCoffeeCake(-1);
        increaseCredits(8);
    }
}

function f(){ //test function
    console.log("f");
}
function makeButton(){ //example function
    let btn = document.createElement("button");
    btn.innerHTML = "Button!";
    document.body.appendChild(btn);
    btn.onclick = function () {
        console.log("hello");
    }
}

function increaseCredits(increase){
    credits += increase;
    document.getElementById("credits").innerHTML = "Credits: " + Math.floor(credits);
}
function increaseBeans(increase){
    coffeeBeans += increase;
    document.getElementById("coffeeBeans").innerHTML = "Coffee Beans: " + Math.floor(coffeeBeans);
}
function increaseCoffee(increase){
    coffee += increase;
    document.getElementById("coffee").innerHTML = "Coffee: " + Math.floor(coffee);
}
function increaseFlour(increase){
    flour += increase;
    document.getElementById("flour").innerHTML = "Flour: " + Math.floor(flour);
}
function increaseButter(increase){
    butter += increase;
    document.getElementById("butter").innerHTML = "Butter: " + Math.floor(butter);
}
function increaseSugar(increase){
    sugar += increase;
    document.getElementById("sugar").innerHTML = "Sugar: " + Math.floor(sugar);
}
function increaseChocolate(increase){
    chocolate += increase;
    document.getElementById("chocolate").innerHTML = "Chocolate: " + Math.floor(chocolate);
}
function increaseEggs(increase){
    eggs += increase;
    document.getElementById("eggs").innerHTML = "Eggs: " + Math.floor(eggs);
}
function increaseCinnamon(increase){
    cinnamon += increase;
    document.getElementById("cinnamon").innerHTML = "Cinnamon: " + Math.floor(cinnamon);
}
function increaseCupcakes(increase){
    cupcakes += increase;
    document.getElementById("cupcakes").innerHTML = "Cupcakes: " + Math.floor(cupcakes);
}
function increaseCroissants(increase){
    croissants += increase;
    document.getElementById("croissants").innerHTML = "Croissants: " + Math.floor(croissants);
}
function increaseCoffeeCake(increase){
    coffeeCake += increase;
    document.getElementById("coffeeCake").innerHTML = "Coffee Cake: " + Math.floor(coffeeCake);
}


function paneChange(name){
    if(name == 'cafe'){
        document.getElementById("cafePane").style.display = "block";
        document.getElementById("managementPane").style.display = "none";
        document.getElementById("contractPane").style.display = "none";
        document.getElementById("recipesPane").style.display = "none";
        document.getElementById("selectCafe").className = "paneSelector selected";
        document.getElementById("selectManagement").className = "paneSelector";
        document.getElementById("selectContracts").className = "paneSelector";
        document.getElementById("selectRecipes").className = "paneSelector";
    }
    else if(name == 'management'){
        document.getElementById("cafePane").style.display = "none";
        document.getElementById("managementPane").style.display = "block";
        document.getElementById("contractPane").style.display = "none";
        document.getElementById("recipesPane").style.display = "none";
        document.getElementById("selectCafe").className = "paneSelector";
        document.getElementById("selectManagement").className = "paneSelector selected";
        document.getElementById("selectContracts").className = "paneSelector";
        document.getElementById("selectRecipes").className = "paneSelector";
    }
    else if(name == 'contracts'){
        document.getElementById("cafePane").style.display = "none";
        document.getElementById("managementPane").style.display = "none";
        document.getElementById("contractPane").style.display = "block";
        document.getElementById("recipesPane").style.display = "none";
        document.getElementById("selectCafe").className = "paneSelector";
        document.getElementById("selectManagement").className = "paneSelector";
        document.getElementById("selectContracts").className = "paneSelector selected";
        document.getElementById("selectRecipes").className = "paneSelector";
    }
    else{
        document.getElementById("cafePane").style.display = "none";
        document.getElementById("managementPane").style.display = "none";
        document.getElementById("contractPane").style.display = "none";
        document.getElementById("recipesPane").style.display = "block";
        document.getElementById("selectCafe").className = "paneSelector";
        document.getElementById("selectManagement").className = "paneSelector";
        document.getElementById("selectContracts").className = "paneSelector";
        document.getElementById("selectRecipes").className = "paneSelector selected";
    }
}

window.setInterval(function(){ //tick every .1 seconds
    /*
    if(credits==0 && document.getElementById("cafePane").style.display == "block"){
        document.getElementById("clicker").hidden = false;
    }
    else if(document.getElementById("cafePane").style.display == "block"){
        document.getElementById("clicker").hidden = true;
    }
    buildingsTick();
    contractsTick();
    upgradesCheck();
    */
    timer++;
    if(timer % 10 == 0){
        baristasTick();
    }
    if(timer >= 60){
        timer = 0;
    }
}, 100);
