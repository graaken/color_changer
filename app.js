const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click', function() {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;

    h1.innerText = newColor;

    let r = parseInt(newColor.slice(4, 7));
    let g = parseInt(newColor.slice(9, 12));
    let b = parseInt(newColor.slice(14, 17));

    if (r < 10 || g < 10 || b < 10) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
})

btn.addEventListener('mouseenter', function() {
    btn.classList.toggle('bg-amber-500');
})

btn.addEventListener('mouseleave', function() {
    btn.classList.toggle('bg-amber-500');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return newColor = `rgb(${r}, ${g}, ${b})`
}
