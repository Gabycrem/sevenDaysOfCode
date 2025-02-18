let resolution = document.getElementById('resolution');
let button = document.getElementById('sendBtn');

function sendResponse(){
    let nombre = document.getElementById('nombre');
    if (nombre.value !== ''){
        showMyAlert(nombre.value);
        disabledBtn(button);
    }   else {
            nombre.focus();
            nombre.style.border = '4px solid red';
    }
    
}

function showMyAlert(nombre){
    
    createP(resolution, button, `Hola ${nombre}, cuál es tu destino?`);

    //creo el div contenedor
    let divOptions = createDivButtons(resolution, button);

    //boton opcion front-end
    let frontEnd = createButton('FRONT-END', divOptions, 'frontBtn');
    //boton opcion front-end
    let backEnd = createButton('BACK-END', divOptions, 'backBtn');

    //agregando eventos
    frontEnd.addEventListener('click', function() {
        choise(frontEnd.id);
        disabledBtn(frontEnd);
        disabledBtn(backEnd);
    });
    backEnd.addEventListener('click', function(){
        choise(backEnd.id);
        disabledBtn(frontEnd);
        disabledBtn(backEnd);
    });
}

function createP(container, before, textContent){
    let response = document.createElement('p');
    response.classList.add('main__texto');
    response.textContent = textContent;
    container.insertBefore(response, before);
    return response;
}

function createDivButtons(container, before){
    let divOptions = document.createElement('div');
    divOptions.classList.add('options-btn');
    container.insertBefore(divOptions, before);
    return divOptions;
}

function createButton(txtContent, container, id){
    let button = document.createElement('button');
    button.classList.add('main__contain__resolution_btn','main__texto');
    button.textContent = txtContent;
    button.id = id;
    container.appendChild(button);
    return button;
}

function disabledBtn(button){
    button.disabled = true;
    button.style.backgroundColor = 'var(--disabled-color)';
    button.style.cursor = 'no-drop';
}

function choise(id){
    let divOptions;
    switch (id){
        case 'backBtn': 
            createP(resolution, button, '¿Quieres aprender C# o aprender Java?');
            divOptions = createDivButtons(resolution, button);
            let cSharpBtn = createButton('C#', divOptions, 'cSharpBtn');
            cSharpBtn.addEventListener('click', function(){
                choise(cSharpBtn.id);
                disabledBtn(cSharpBtn);
                disabledBtn(javaBtn);
            })
            let javaBtn = createButton('JAVA', divOptions, 'javaBtn');
            javaBtn.addEventListener('click', function(){
                choise(javaBtn.id);
                disabledBtn(cSharpBtn);
                disabledBtn(javaBtn);
            })

            break;
        case 'frontBtn':
            
            createP(resolution, button, '¿Quieres aprender React o aprender Vue?');
            divOptions = createDivButtons(resolution, button);
            let reactBtn = createButton('REACT', divOptions, 'reactBtn');
            reactBtn.addEventListener('click', function(){
                choise(reactBtn.id);
                disabledBtn(reactBtn);
                disabledBtn(vueBtn);
            })
            let vueBtn = createButton('VUE', divOptions, 'vueBtn');
            vueBtn.addEventListener('click', function(){
                choise(vueBtn.id);
                disabledBtn(reactBtn);
                disabledBtn(vueBtn);
            })
            break;
        case 'cSharpBtn':
            console.log('Elegiste C#');
            break;
        case 'javaBtn':
            console.log('Elegiste Java');
            break;
    }
}