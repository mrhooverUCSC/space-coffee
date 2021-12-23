let brewBaristas = 0;
let brewTimeout = 0;
let sellBaristas = 0;
let sellTimeout = 0;
let bakeBaristas = 0;
let bakeTimeout = 0;
let baristas = 0;
let taughtBaristas = false;
let cps = 0;


function buyBarista(){
    var cost = Math.floor(10 * (baristas + 1));                             //formula for currrent price of Baristas
    if(credits >= cost && baristas < (3 + (2 * storeSize))){
        document.getElementById("help").hidden = false;
        baristas++;
        increaseCredits(-cost);
        document.getElementById("totalBaristas").innerHTML = "Baristas: " + baristas + "/" + (3 + (2 * storeSize));
        document.getElementById("buyBarista").innerHTML = "Buy Barista: " + Math.floor(10 * (baristas + 1)) + " credits";
    }
}

function allocateSell(){
    if(sellBaristas + brewBaristas + bakeBaristas < baristas){
        if(sellBaristas == 0){
            sellTick();
        }
        sellBaristas++;
        document.getElementById("sellBaristas").innerHTML = "Sell Baristas: " + sellBaristas;
    }
}
function removeSell(){
    if(sellBaristas > 0){
        sellBaristas--;
        if(sellBaristas == 0){
            window.clearTimeout(sellTimeout);
        }
        document.getElementById("sellBaristas").innerHTML = "Sell Baristas: " + sellBaristas;
    }
}

function allocateBrew(){
    if(sellBaristas + brewBaristas + bakeBaristas < baristas){
        if(brewBaristas == 0){
            brewTick();
        }
        brewBaristas++;
        document.getElementById("brewBaristas").innerHTML = "Brew Baristas: " + brewBaristas;
    }
}
function removeBrew(){
    if(brewBaristas > 0){
        brewBaristas--;
        if(brewBaristas == 0){
            window.clearTimeout(brewTimeout);
        }
        console.log(brewBaristas);
        document.getElementById("brewBaristas").innerHTML = "Brew Baristas: " + brewBaristas;
    }
}

function allocateBake(){
    if(sellBaristas + brewBaristas + bakeBaristas < baristas){
        if(bakeBaristas == 0){
            bakeTick();
        }
        bakeBaristas++;
        document.getElementById("bakeBaristas").innerHTML = "Bake Baristas: " + bakeBaristas;
    }
}
function removeBake(){
    if(bakeBaristas > 0){
        bakeBaristas--;
        if(bakeBaristas == 0){
            window.clearTimeout(bakeTimeout);
        }
        document.getElementById("bakeBaristas").innerHTML = "Bake Baristas: " + bakeBaristas;
    }
}

function bakeTick(){
    var food = snacks[Math.floor(Math.random()*snacks.length)];
    var made = 0;
    if(credits > 0){
        if(food == "cupcakes" && flour >= 2 && eggs >= 2 && chocolate >= 1){
            increaseFlour(-2);
            increaseEggs(-2);
            increaseChocolate(-1);
            increaseCupcakes(1);
            made++;
        }
        else if(food == "croissants" && flour >= 2 && butter >= 2 && sugar >= 1){
            increaseFlour(-2);
            increaseButter(-2);
            increaseSugar(-1);
            increaseCroissants(1);
            made++;
        }
        else if(food == "coffeeCake" && flour >= 2 && eggs >= 1 && sugar >= 1 && cinnamon >= 1){
            increaseFlour(-2);
            increaseCinnamon(-1);
            increaseEggs(-1);
            increaseSugar(-1);
            increaseCoffeeCake(1);
            made++;
        }
        else if(flour >= 2 && eggs >= 2 && chocolate >= 1){
            increaseFlour(-2);
            increaseEggs(-2);
            increaseChocolate(-1);
            increaseCupcakes(1);
            made++;
        }
        else if(flour >= 2 && butter >= 2 && sugar >= 1){
            increaseFlour(-2);
            increaseButter(-2);
            increaseSugar(-1);
            increaseCroissants(1);
            made++;
        }    
        else if(flour >= 2 && eggs >= 1 && sugar >= 1 && cinnamon >= 1){
            increaseFlour(-2);
            increaseCinnamon(-1);
            increaseEggs(-1);
            increaseSugar(-1);
            increaseCoffeeCake(1);
            made++;
        }            
    }
    if(made == 1){
        console.log("pastry made");
        increaseCredits(-1);
    }
    else {
        console.log("error: too many pastries made: " + made);
    }
    bakeTimeout = setTimeout(() => {bakeTick();}, 10000 / Math.pow(1.25, bakeBaristas-1));
}
function sellTick(){
    var food = buySnacks[Math.floor(Math.random()*buySnacks.length)];
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
        console.log("sold coffee");
        increaseCredits(-1);
    }
    sellTimeout = setTimeout(() => {sellTick();}, 10000 / Math.pow(1.25, sellBaristas-1));
}
function brewTick(){
    if(coffeeBeans > 0 && credits > 0){
        makeCoffee(1);
        increaseCredits(-1);
        console.log("made coffee");
    }
    brewTimeout = setTimeout(() => {brewTick();}, 10000 / Math.pow(1.25, brewBaristas-1));
}