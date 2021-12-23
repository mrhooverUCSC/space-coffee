let contract1 = false;
let contract1Timeout;
let contract2 = false;
let contract2Timeout;

function toggleContract1(){
    if(!contract1 && credits >= 100){
        increaseCreidts(-100);
        contract1Tick();
        contract1 = true;
        document.getElementById("toggleContract1").innerHTML = "Disable";
    }
    else if(contract1){
        window.clearTimeout(contract1Timeout);
        contract1 = false;
        document.getElementById("toggleContract1").innerHTML = "Enable: 100 credits";
    }
}
function contract1Tick(){
    if(credits >= 15){
        increaseBeans(20);
        increaseCredits(-15);
    }
    contract1Timeout = setTimeout(() => {contract1Tick();}, 60000);
}

function toggleContract2(){
    if(!contract2 && credits >= 250){
        increaseCreidts(-250);
        contract2Tick();
        contract2 = true;
        document.getElementById("toggleContract2").innerHTML = "Disable";
    }
    else if(contract2){
        window.clearTimeout(contract2Timeout);
        contract2 = false;
        document.getElementById("toggleContract2").innerHTML = "Enable: 100 credits";
    }
}
function contract2Tick(){
    if(credits >= 25){
        increaseFlour(5);
        increaseChocolate(5);
        increaseCinnamon(5);
        increaseSugar(5);
        increaseEggs(5);
        increaseButter(5);
        increaseCredits(-25);
    }
    contract2Timeout = setTimeout(() => {contract2Tick();}, 60000);
}