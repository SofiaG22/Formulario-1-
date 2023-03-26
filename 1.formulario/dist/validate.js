const validateString = (cad) =>{
    let response = (cad.lenght >=3) ?true :false;
    return response;
}

const validateTelefono = (cad) => {
    let response = (cad.lenght >=10) ?true :false;
        return response;
}

class Validate{
    validNames(value){
        const nombresRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        const resp = value.match(nombresRX) ? true : false;
        return resp;
    }

    validMail(value){
        const mailRX = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
        const resp = value.match(mailRX)? true : false;
        return resp;
    }

    validForm = (objeto) => {
        const valores = Object.values(objeto);
        let resp = valores.findIndex(e => e === false); 
        return resp;
    }

    validTele(value){
        const teleRX = /^(3)(0|1|2|3|5)[0-9]\d{7}/;
        const resp = value.match(teleRX) ? true : false;
        return resp;    
    }
    validOcu(value){
        const ocuRX = value;
        const resp = value.match(ocuRX)? true : false;
        return resp;
    } 

    validMsn(value){
        const msnRX = /^[\W.a-zA-ZÀ-ÖØ-öø-ÿ\s\d]{2,100}/;
        const resp = value.match(msnRX)? true : false;
        return resp;
    }
} 

export { validateString, validateTelefono, Validate}


// \w representa letrasmayúsculas y minúsculas de la A ala Z, números del 0 al 9 y guiones.

// para marcar un punto es \. de lo contrario el solo punto . representa cualquier caracter.