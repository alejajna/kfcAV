function themecualquier(){
    let theme = document.getElementById('theme').value;

    if (theme == 'oscuro'){
        document.getElementById('body').classList.remove('theme-light')
        document.getElementById('body').classList.add('theme-dark')
    }else{
        document.getElementById('body').classList.add('theme-light')
        document.getElementById('body').classList.remove('theme-dark')
    }
}

function seleccioneidioma(){
    let theme = document.getElementById('language').value;

    if (language == 'en'){
        document.getElementById('pp').innerText('1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet)')
    }

}