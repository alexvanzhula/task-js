const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Cлужит для вывода информации в консоль');
    
})

const aler = document.querySelector('#aler');

aler.addEventListener('click', () => {
    alert('привет, я Alert')
})


document.querySelector ('#prompt').addEventListener ('click', (event) => {
    const usertext = prompt ('привет, я Prompt', 'через меня можно что-то передать ;)', '');
    console.log (usertext);
})