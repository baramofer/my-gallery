var elHamburger = document.querySelector('.main-nav');
var elHamburgerIcon = document.querySelector('.hamburger');
var elScreen = document.querySelector('.screen');
var elModal = document.querySelector('.modal');

function closeAll() {
    if (elHamburger.classList.contains('open')) navToggle();
    else modalToggle();
}

function navToggle() {
    elHamburger.classList.toggle('open');
    if (elHamburger.classList.contains('open')) {
        elHamburgerIcon.style.display = 'none';
        elHamburger.style.right = '0';
        elHamburger.innerHTML = `<li class="flex active"><a href="#"><i onclick="closeAll()" class="hamburger fa fa-bars"></i></a></li>
                             <li class="flex active"><a href="#">Journal</a></li>
                             <li class="flex center-h"><a href="#">About</a></li>
                             <li class="flex center-h"><a href="#">Work</a></li>
                             <li class="flex center-h"><a href="#">Contact</a></li>`
        screenToggle();
    } else {
        elHamburger.style.right = '-100%';
        elHamburgerIcon.style.display = 'block';
        elHamburger.innerHTML = `
                             <li class="flex active"><a href="#">Journal</a></li>
                             <li class="flex center-h"><a href="#">About</a></li>
                             <li class="flex center-h"><a href="#">Work</a></li>
                             <li class="flex center-h"><a href="#">Contact</a></li>`
        screenToggle();
    }
}

function screenToggle() {
    elScreen.classList.toggle('open');
    var buttons = document.querySelectorAll('button')
    if (elScreen.classList.contains('open')) {
        elScreen.style.display = 'block';
        buttons.forEach(function (button) {
            button.style.zIndex = '-1';
        });
    }
    else {
        elScreen.style.display = 'none';
        buttons.forEach(function (button) {
            button.style.zIndex = '0';
        });
    }
}

function modalToggle() {
    elModal.classList.toggle('open');
    if (elModal.classList.contains('open')) {
        elModal.style.opacity = 1;
        screenToggle();
    } else {
        elModal.style.display = 'none';
        elModal.style.opacity = 0;
        screenToggle();
    }

}