var pass1 = document.getElementById("password");
var pass2 = document.getElementById("password2");
var boton = document.getElementById("submit");

pass1.addEventListener('input', ()=>
{
    
})

pass2.addEventListener('input', ()=>
{
    if(pass1.value!=pass2.value)
        {
            boton.disabled=true;
            pass2.style.borderColor= 'red';
        }
        else
        {
            boton.disabled = false;
            pass2.style.borderColor = "green"; 
        }
})