const usertext = document.querySelector('#link');

usertext.addEventListener('click', function (event){

this.textContent = prompt('введите сообщение');

event.preventDefault();
})




