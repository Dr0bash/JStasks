const btns = document.querySelectorAll("button");

for (let b of btns)
    b.addEventListener('click', myClick);

function myClick(event){
    console.dir(event);
    event.target.setAttribute('data-clicked', Number.parseInt(event.target.getAttribute('data-clicked'))+1);
}