const xLight = document.querySelectorAll(".Light");

let activeLight = 0,
    boofer = document.querySelector('#lightchanger');

boofer.addEventListener('click', function (event) {
   
    changeLigh();
    event.activeLight = activeLight++ ;
    if(activeLight > 2) {
        activeLight = 0;
    }
})


function changeLigh(){
    let allLights = document.querySelectorAll(".Light");
    allLights.forEach(light => { 
        light.removeAttribute('class');
        light.classList.add('Light');
        
    });


    let realLight = xLight[activeLight];
    realLight.classList.add(realLight.getAttribute("color"));
}