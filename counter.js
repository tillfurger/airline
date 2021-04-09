if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);
}

function hello () {
    const heading = document.querySelector('h1');
    if (heading.innerHTML === 'Hello!') {
        heading.innerHTML = 'Goodbye!';
    } else {
        heading.innerHTML = 'Hello!';
    }

}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        const name = document.querySelector('#name-input').value;
        alert(`Hello ${name}`)
    };
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button.color-button').forEach((button) => {
        button.onclick = () =>  {
            document.querySelector('#hello').style.color = button.dataset.color
        }
    })
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('select').onchange = function () {
        document.querySelector('#hello').style.color = this.value;
    };
});


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter')
    document.querySelector('#foo').onclick = count;
});
