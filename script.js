let input = document.getElementById('input');
let button = document.querySelectorAll('button');


button.forEach(element => {
    element.addEventListener('click', (e)=>{
        console.log(e.target.textContent);

    })
});