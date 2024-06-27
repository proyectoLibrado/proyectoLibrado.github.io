//Expresiones Regurares
const nameRegExp = /^([a-zA-ZáéíóúñÁÉÍÓÚÑ]+)([ a-zA-ZáéíóúñÁÉÍÓÚÑ]{1,})*$/ //Comprueba que sean letras.
const emailRegExp = /^[^\s@]+@[\w]+(\.{1}[\w]+)+$/ //Comprueba que el correo este completo.
const phoneRegExp = /^(\d{10})$|((\d{3}-){2}\d{4})$|((\d{3} ){2}\d{4})$/ //Verifica que el número este completo.
const msjRegExp = /^[\S]([\w\s\,\.\;\:]+){18}$/ //Verifica que haya un mensaje.

//Habilta el botón.
function habitado() {
    document.getElementById('button').disabled = false
}

//Deshabilita el botón.
function deshabilitado() {
    document.getElementById('button').disabled = true
}

//Habilta el botón si estan llenos todos los campos
function verification(){
    if (verifyName && verifyEmail && verifyPhone && verifyInterest && verifyMember){
        if (textarea){
            if (verifyMenssage) {
                habitado()
            } else {
                deshabilitado()
            }
        } else {
            habitado()
        }
    } else {
        deshabilitado()
    }
}

//Guarda el estado de la comprobación de las expresiones.
let verifyName = false
let verifyEmail = false
let verifyPhone = false
let verifyInterest = false
let verifyMember = false
let verifyMenssage = false

//Informa si esta habilidada el Mensaje Personalizado.
let textarea = false

//Valida el nombre.
function valueName(fact) {
    let name = fact.value
    let warning = ''
    if (!nameRegExp.test(name)) {
        warning = '*El nombre solo debe estar compuesto con letras.'
        verifyName = false
        if (name == '') {
            warning = ''
        }
    } else {
        warning = ''
        verifyName = true;
    }
    document.getElementById('name').innerHTML = warning
    //LLama la función que habilta el botón si estan llenos todos los campos
    verification()
}

//Valida el correo.
function valueEmail(fact) {
    let email = fact.value
    let warning = ''
    if (!emailRegExp.test(email)) {
        warning = '*Correo incompleto.'
        verifyEmail = false
        if (email == '') {
            warning = ''
        }
    } else {
        warning = ''
        verifyEmail = true
    }
    document.getElementById('email').innerHTML = warning
    //LLama la función que habilta el botón si estan llenos todos los campos
    verification()
}

//Valida el número de teléfono.
function valuePhone(fact) {
    let phone = fact.value
    let warning = ''
    if (!phoneRegExp.test(phone)) {
        warning = '*Número de teléfono incompleto.'
        verifyPhone = false
        if (phone == '') {
            warning = ''
        }
    } else {
        warning = ''
        verifyPhone = true
    }
    document.getElementById('phone').innerHTML = warning
    //LLama la función que habilta el botón si estan llenos todos los campos
    verification()
}

//Valida el interés.
function valueInterest(fact){
    let interest = fact.selectedIndex
    let warning = ''
    if (interest == 0){
        warning = '*Seleccione una opción.'
        verifyInterest = false
    } else {
        warning = ''
        verifyInterest = true
    }
    if (interest == 4) {
        textarea = true
    } else {
        textarea = false
    }
    document.getElementById('interest').innerHTML = warning
    //LLama la función que habilta el botón si estan llenos todos los campos
    verification()
}

//Valida si llenaste el campo de que si eres miembro.
function valueMember(fact) {
    verifyMember = true
    //LLama la función que habilta el botón si estan llenos todos los campos
    verification()
}

//Valida si debe estar lleno el Mensaje Personalizado.
function valueMenssage(fact) {
    if (textarea) {
        let menssage = fact.value
        let warning = ''
        if (!msjRegExp.test(menssage)){
            warning = "*Campo incompleto, ingrese solamente palabras."
            verifyMenssage = false
        } else {
            warning = ''
            verifyMenssage = true
        }
        document.getElementById('menssage').innerHTML = warning
    }
    //LLama la función que habilta el botón si estan llenos todos los campos
    verification()
}
