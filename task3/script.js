
const trafficLightE1 = document.querySelector('#trafficLight');
trafficLightE1.addEventListener ('click', makeGreen, makeYellow, makeRed);


function makeGreen() {

trafficLightE1.style.background = ('green');

trafficLightE1.removeEventListener ('click', makeGreen);

trafficLightE1.addEventListener ('click', makeYellow);
}

function makeYellow () {

trafficLightE1.style.background = ('yellow');

trafficLightE1.removeEventListener ('click', makeYellow);

trafficLightE1.addEventListener ('click', makeRed);

}

function makeRed() {

    trafficLightE1.style.background = ('red');

    trafficLightE1.removeEventListener ('click', makeRed);

    trafficLightE1.addEventListener ('click', makeGreen); 
    
    }


    






