function sendResponse(){
    let nombre = document.getElementById('nombre');
    let edad = document.getElementById('edad');
    let lenguajeProgramacion = document.getElementById('lenguaje');
    if (nombre.value !== '' && edad.value !== '' && lenguajeProgramacion.value!== ''){
        // alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguajeProgramacion}!`);
        showMyAlert(nombre.value, edad.value, lenguajeProgramacion.value);
        clearInputs();
    }   else {
        if (nombre.value === '') {
            nombre.focus();
            nombre.style.border = '4px solid red';
        } else if (edad.value === '') {
            edad.focus();
        } else if (lenguajeProgramacion.value === '') {
            lenguajeProgramacion.focus();
        }
    }   
}

function showMyAlert(nombre, edad, lenguaje){
    let resolution = document.getElementById('resolution');
    let response = document.createElement('p');
    response.classList.add('main__texto');
    response.textContent = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;
    let button = document.getElementById('sendBtn');
    resolution.insertBefore(response, button);
    console.log(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`)
}

function clearInputs(){
    document.getElementById('nombre').value = '';
    document.getElementById('nombre').style.border = '3px solid var(--tertiary-color)';
    document.getElementById('edad').value = '';
    document.getElementById('edad').style.border = '3px solid var(--tertiary-color)';
    document.getElementById('lenguaje').value = '';
    document.getElementById('lenguaje').style.border = '3px solid var(--tertiary-color)';
}