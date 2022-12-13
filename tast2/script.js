const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Cлужит для вывода информации в консоль');
    
})

const aler = document.querySelector('#aler');

aler.addEventListener('click', () => {
    alert('привет, я Alert')
})


document.querySelector ('#prompt').addEventListener ('click', (event) => {
    const usertext = prompt ('введите сообщение', 'напишите что-нибудь ;)', '');
    console.log (usertext);
})