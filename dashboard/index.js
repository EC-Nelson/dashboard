function themeSwitch(){
    let slider = document.querySelector('input[type="checkbox"]');
    let b = document.getElementsByClassName('dark-col-1');
    let cardBg = document.getElementsByClassName('card');
    let body = document.querySelector('body');

    if (slider.checked){       
        body.classList.remove("dark-body");
        body.classList.add("light-body");

        for (let i = 0; i < b.length; i++){
            b[i].style.color = "hsl(230, 17%, 14%)";
        }
        b[6].style.color = "hsl(228, 12%, 44%)";
        b[1].style.color = "hsl(228, 12%, 44%)";
        for (let i = 0; i < cardBg.length; i++){
            cardBg[i].classList.remove("dark-bgcol");
            cardBg[i].classList.add("light-bgcol");
        }
    }
    else{
        body.classList.remove("light-body");
        body.classList.add("dark-body");

        for (let i = 0; i < b.length; i++){
            b[i].style.color = "white";
        }
        for (let i = 0; i < cardBg.length; i++){
            cardBg[i].classList.remove("light-bgcol");
            cardBg[i].classList.add("dark-bgcol");
        }
    }
}
