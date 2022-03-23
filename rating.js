const buttonHover = document.getElementsByClassName(`button-hovering`);

for (let i = 0; i < buttonHover.length; i++) {
    buttonHover[i].addEventListener('click', function () {

        for (let x = 0; x < buttonHover.length; x++) {
            buttonHover[x].classList.add('container-button');
            buttonHover[x].classList.remove("button-hovering-orange");
        }

        buttonHover[i].classList.add('button-hovering-orange');
        buttonHover[i].classList.remove('container-button');
    })
}

const mainScreen = document.querySelector(".main");
const thanksScreen = document.querySelector(".thanks");
const submitBtn = document.querySelector(".container-submit");

submitBtn.addEventListener('click', function () {
    mainScreen.style.display = 'none';
    thanksScreen.style.display = 'block';
})

const rating = document.querySelector(".rateNr");

for (let i = 0; i < buttonHover.length; i++) {
    buttonHover[i].addEventListener('click', function () {
        rating.innerHTML = i + 1;
    })
}

const undoButton = document.querySelector(".thanks-img");

undoButton.addEventListener('click', function () {
    mainScreen.style.display = 'block';
    thanksScreen.style.display = 'none';
})