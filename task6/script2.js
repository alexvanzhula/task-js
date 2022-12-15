const greenLight = document.querySelector('.greenLight')
const yellowLight = document.querySelector('.yellowLight')
const redLight = document.querySelector('.redLight')

greenLight.addEventListener('click', makeGreen, makeYellow, makeRed);

function makeGreen() {

    greenLight.style.background = ('green');
    
    greenLight.removeEventListener ('click', makeGreen);
    
    greenLight.addEventListener ('click', makeYellow);
    

    }
    
    function makeYellow() {
    
        yellowLight.style.background = ('yellow');
    
        yellowLight.removeEventListener ('click', makeYellow);
    
        yellowLight.addEventListener ('click', makeRed);
    
    }
    
    function makeRed() {
    
        redLight.style.background = ('red');
    
        redLight.removeEventListener ('click', makeRed);
    
        redLight.addEventListener ('click', makeGreen); 
        
        }





