function themeSwitch(){
    let a = document.querySelector('input[type="checkbox"]');
    let b = document.getElementsByClassName('dark-col-1');
    let c = document.getElementsByClassName('dark-bgcol-1');
    let d = document.getElementsByClassName("dark-col-2");
    let body = document.querySelector('body');
    if (a.checked){
        
        body.style.backgroundImage = "linear-gradient(hsl(225, 100%, 98%) 0%, hsl(225, 100%, 98%) 30.5%, transparent 10%, white 30.5%, white 100%, transparent 100%)";
        console.log(b.length);
        for (let i = 0; i < b.length; i++){
            b[i].style.color = "hsl(230, 17%, 14%)";
        }
        b[6].style.color = "hsl(228, 12%, 44%)";
        b[1].style.color = "hsl(228, 12%, 44%)";
        for (let i = 0; i < c.length; i++){
            c[i].style.backgroundColor = "hsl(227, 47%, 96%)";
        }
    }
    else{
        body.style.backgroundImage = "linear-gradient(hsl(232, 19%, 15%) 0%, hsl(232, 19%, 15%) 30.5%, transparent 10%, hsl(230, 17%, 14%) 30.5%, hsl(230, 17%, 14%) 100%, transparent 100%)";
        
        for (let i = 0; i < b.length; i++){
            b[i].style.color = "white";
        }
        for (let i = 0; i < c.length; i++){
            c[i].style.backgroundColor = "hsl(228, 28%, 20%)";
        }
    }
}

