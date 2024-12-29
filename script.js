const container = document.querySelector('.container');

function createGrid(num) {
    container.innerHTML ='';

    const squareWidth = container.clientWidth /num;
    const squareHeight = container.clientHeight/num;

    for (let i = 0; i < num * num; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareHeight}px`;

        // Add hover effect
        square.addEventListener('mouseover', () => {
            const randomR = Math.floor(Math.random() * 256); // Random red
            const randomG = Math.floor(Math.random() * 256); // Random green
            const randomB = Math.floor(Math.random() * 256); // Random blue
            square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        });

        container.appendChild(square);
    }
}

function clickButton() {
    num = parseInt(prompt("Enter number of squares per side",16));
    createGrid(num);
} 

let button = document.querySelector('button')
button.addEventListener('click',clickButton)


