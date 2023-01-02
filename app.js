const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

// when the user clicks on the 'click me' button, change the background color

btn.addEventListener('click', function() {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;

    h1.innerText = newColor;

    let r = parseInt(newColor.slice(4, 7));
    let g = parseInt(newColor.slice(9, 12));
    let b = parseInt(newColor.slice(14, 17));

    // if any of the individual rgb color numbers are lower than 10 (typically a dark shade), make the text white. otherwise, make it black

    if (r < 10 || g < 10 || b < 10) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
})

// function for creating a random rgb code

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return newColor = `rgb(${r}, ${g}, ${b})`
}

// when the user clicks on the 'welcome' h1, replace it with a new input element

h1.addEventListener('click', function() {
    h1.style.display = 'none';
    const rgbInput = document.createElement('p');
    rgbInput.innerHTML = '<input type="text" id="rgbInput">';

    h1.parentNode.replaceChild(rgbInput, h1);
})