const usertext = document.querySelector('#link');

usertext.addEventListener('click', function (event){

this.textContent = prompt('желаемый вами текст для ссылки');

event.preventDefault();
})




