const validateString = (cad) =>{
    let response = (cad.lenght >=3) ?true :false;
    return response;
}

const validateTelefono = (cad) => {
    let response = (cad.lenght >=10) ?true :false;
        return response;
}

class Validate{
    validOcup(value){
        const ocuRX = "estudiante";
        const ocuRX1 = "docente";
        const resp = value.match(ocuRX) || value.match(ocuRX1) ? true : false;
        return resp; 
    }   

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

    validMsn(value){
        const msnRX = /^([\W.a-zA-ZÀ-ÖØ-öø-ÿ\s\d]{5,80})/;
        const resp = value.match(msnRX)? true : false;
        return resp;
    }
} 

export { validateString, validateTelefono, Validate}