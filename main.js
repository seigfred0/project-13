
function toggleMenu() {
    let menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

function productBtn() {
    let productDropdown = document.getElementById('productDropdown');
    productDropdown.classList.toggle('show');

    let rotate = document.querySelector('.rotate1');
    rotate.classList.toggle('invert')
}

function companyBtn() {
    let companyBtn = document.getElementById('companyDropdown');
    companyBtn.classList.toggle('show')

    let rotate = document.querySelector('.rotate2');
    rotate.classList.toggle('invert')
}

function connectBtn() {
    let connectBtn = document.getElementById('connectDropdown');
    connectBtn.classList.toggle('show');

    // const rotate = document.getElementById('rotate');
    // rotate.style.transform = 'rotate(180deg)';

    // let invert = document.getElementById('invert');
    // invert.style.transform = 'rotate(180deg)';
    // console.log(invert)

    let rotate = document.querySelector('.rotate3');
    rotate.classList.toggle('invert')
}

/*
function myFunction() {
    let productDropdown = document.getElementById('productDropdown');
    productDropdown.style.display = 'block'; // Make the content visible
    productDropdown.style.display = 'flex'; // Apply flex properties
    productDropdown.style.flexDirection = 'column'; // Set flex direction
}
*/

window.onclick = function(e) {
    if (!e.target.matches('.productButton')) {
        let productDropdown = document.getElementById('productDropdown');
        if (productDropdown.classList.contains('show')) {
            productDropdown.classList.remove('show')
        }
    };

    if (!e.target.matches('.companyButton')) {
        let productDropdown = document.getElementById('companyDropdown');
        if (productDropdown.classList.contains('show')) {
            productDropdown.classList.remove('show')
        }
    };

    if (!e.target.matches('.connectButton')) {
        let connectDropdown = document.getElementById('connectDropdown');
        // const rotate = document.querySelector('.rotate3')

        if (connectDropdown.classList.contains('show')) {
            connectDropdown.classList.remove('show')
        };

        rotate.style.transform = 'rotate(0deg)';


    }

}

