const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('служит для вывода информации в консоль')
})


document.querySelector ('#prompt').addEventListener ('click', (event) => {
    const usertext = prompt ('введите сообщение', 'напишите что-нибудь ;)', '');
    console.log (usertext);
})

const a = ('пример использования команды console.log');
const b = document.querySelector('#consoleLog');

b.textcontent = a; 
index.html(a);



    
