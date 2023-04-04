import { form } from "./main.js";
const cardsEstudiantes = document.querySelector("#cardsEstudiantes");
const cardsDocentes = document.querySelector("#cardsDocentes");

let flagSend = 0;

const addStudent = (name, lastName, mail, tele, Ocup, msn) =>{
    let person = {
        pname: name,
        plastName: lastName,
        pmail: mail,
        ptele: tele,
        pOcupacion: Ocup,
        pmsn: msn
    }

    let text = `¿Está segur@ ${person.pname} ${person.plastName} 
    de enviar la petición?`
    modalAlert(text, "aceptar", person);

}
const addDocente = (name, lastName, mail, tele, Ocup, msn) =>{
    let person = {
        pname: name,
        plastName: lastName,
        pmail: mail,
        ptele: tele,
        pOcupacion: Ocup,
        pmsn: msn
    }

    let text = `¿Está segur@ ${person.pname} ${person.plastName} 
    de enviar la petición?`
    modalAlert(text, "aceptar", person);
}

function modalAlert(cadena, tipo, persona){

    const alerta = document.createElement("div");
    const texto = document.createElement("p");
    const btnCerrar = document.createElement("input");

    alerta.setAttribute("id", "alerta")
    alerta.setAttribute("class", "alerta");
    texto.setAttribute("class", "textAlerta");
    texto.innerHTML = `<strong>${cadena}</strong>`;
    btnCerrar.setAttribute("type", "button");
    btnCerrar.setAttribute("class", "btnAlerta");
    btnCerrar.setAttribute("value", "Cerrar");

    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);
    
    if (tipo === "aceptar") {
        const btnEnviar = document.createElement("input");
        btnEnviar.setAttribute("type", "button");
        btnEnviar.setAttribute("class", "btnAlerta");
        btnEnviar.setAttribute("value", "Enviar");
        alerta.appendChild(btnEnviar);
        document.body.appendChild(alerta);

        btnEnviar.onclick = function(){
            paintCard(persona, "");
            flagSend = 1;
            document.getElementById("alerta").remove();
        }

    }else{
        document.body.appendChild(alerta);
    }

    btnCerrar.onclick = function(){
        document.getElementById("alerta").remove();
    }

}

const paintCard = (datos, tipo) => {
    const ocup = document.getElementById("Ocup").value;
    console.log(ocup);
    tipo = ocup.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const temEstudiante = document.getElementById('templateEstudiante').content;
    const temDocente = document.getElementById('templateDocente').content;

    if(tipo == "ESTUDIANTE"){
        form.reset();

        let temTemplate = temEstudiante.cloneNode(true);
        temTemplate.querySelector('.title-card').innerHTML = `DATOS DEL PQR Estudiante <hr>`;
        temTemplate.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
        temTemplate.querySelector('.text-mail').innerHTML = `Correo electrónico: ${datos.pmail}`;
        temTemplate.querySelector('.text-telefono').innerHTML = `Teléfono: ${datos.ptele}`;
        temTemplate.querySelector('.text-ocupacion').innerHTML = `Ocupación: ${datos.pOcupacion}`;
        temTemplate.querySelector('.text-msn').innerHTML = `Mensaje: ${datos.pmsn}`;

        fragmento.appendChild(temTemplate);
        cardsEstudiantes.appendChild(fragmento);

    }else if(tipo == "DOCENTE"){
        form.reset();

        let temTemplate = temDocente.cloneNode(true);
        temTemplate.querySelector('.title-card').innerHTML = `DATOS DEL PQR Docente <hr>`;
        temTemplate.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
        temTemplate.querySelector('.text-mail').innerHTML = `Correo electrónico: ${datos.pmail}`;
        temTemplate.querySelector('.text-telefono').innerHTML = `Teléfono: ${datos.ptele}`;
        temTemplate.querySelector('.text-ocupacion').innerHTML = `Ocupación: ${datos.pOcupacion}`;
        temTemplate.querySelector('.text-msn').innerHTML = `Mensaje: ${datos.pmsn}`;

        fragmento.appendChild(temTemplate);
        cardsDocentes.appendChild(fragmento);
        console.log('hola')
    }

}

export{ addStudent, addDocente, modalAlert}