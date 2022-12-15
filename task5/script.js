
let pageForm = document.querySelector('#my_input')
let pageButton = document.querySelector('button')
let userText = document.querySelector ('p')
let duplicateField = document.querySelector('#duplicateField')

duplicateField.textContent = pageForm.value;

pageForm.addEventListener('keyup', function (event) {
        this.textContent = pageForm.value;
        duplicateField.textContent =  pageForm.value;
        event.preventDefault();
})


pageButton.addEventListener('click', function (event){
    console.log(pageForm.value);
    pageForm.value = ('');
    event.preventDefault();
})
   