let brewBaristas = 0;
let brewEfficacy = .1
let sellBaristas = 0;
let sellEfficacy = .1
let baristas = 0;
let baristasMax = 3;
let taughtBaristas = false;
let cps = 0;


function buyBarista(){
    var cost = Math.floor(10 * (baristas + 1));                             //formula for currrent price of Baristas
    if(credits >= cost && baristas < baristasMax){
        document.getElementById("help").hidden = false;
        baristas++;
        increaseCredits(-cost);
        document.getElementById("totalBaristas").innerHTML = "Baristas: " + baristas + "/" + baristasMax;
        document.getElementById("buyBarista").innerHTML = "Buy Barista: " + Math.floor(10 * (baristas + 1)) + " credits";
    }
}

function allocateSell(){
    if(sellBaristas + brewBaristas < baristas){
        sellBaristas++;
        document.getElementById("sellBaristas").innerHTML = "Sell Baristas: " + sellBaristas;
    }
}
function removeSell(){
    if(sellBaristas > 0){
        sellBaristas--;
        document.getElementById("sellBaristas").innerHTML = "Sell Baristas: " + sellBaristas;
    }
}

function allocateBrew(){
    if(sellBaristas + brewBaristas < baristas){
        brewBaristas++;
        document.getElementById("brewBaristas").innerHTML = "Brew Baristas: " + brewBaristas;
    }
}
function removeBrew(){
    if(brewBaristas > 0){
        brewBaristas--;
        document.getElementById("brewBaristas").innerHTML = "Brew Baristas: " + brewBaristas;
    }
}


function baristasTick(){   //tick every .1 seconds
    for(var i = 0; i < sellBaristas; i++){
        var food = snacks[Math.floor(Math.random()*snacks.length)];
        var sold = 0;
        if(coffee > 0){
            sellCoffee(1);
            sold++;
        }
        if(food == "cupcakes" && cupcakes > 0){
            sellCupcakes(1);
            sold++;
        }
        else if(food == "croissants" && croissants > 0){
            sellCroissants(1);
            sold++;
        }
        else if(food == "coffeeCake" && coffeeCake > 0){
            sellCoffeeCake(1);
            sold++;
        }
        if(sold != 0){
            increaseCredits(-1);
        }
    }
    for(var i = 0; i < brewBaristas; i++){
        if(coffeeBeans > 0){
            makeCoffee(1);
        }
    }
}