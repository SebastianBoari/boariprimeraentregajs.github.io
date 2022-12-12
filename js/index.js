// PRIMERA ENTREGA DE PROYECTO FINAL

// Voy a realizar un ejercicio simple pero creo que el proyecto final lo voy a basar en un clon de twitter, tal vez si no lo logro lo cambie a un weatherapp
// para que me sirva para mi portfolio.
// Nuestra profesora nos dejo unas ideas para poder entregar algo que cumpla con todos los requisitos de la consigna. 
// Una propuesta era hacer un login, voy a seguir esa idea porque la verdad no se como encarar otro proyecto con lo que vi en las clases aun.

let userMail = prompt( "Ingrese su mail: " ); // MAIL CARGADO
let userName = prompt( "ingrese su nombre: " ); // NOMBRE CARGADO
let userPsw = prompt( "Ingrese su constraseña: " ); // PASSWORD CARGADO

const loginAction = confirm( "Desea logearse?" ); 

if ( loginAction === false ){
    alert( "No hay problema, vuelva pronto!" );
}

const userLoginMail = prompt( "LOG IN: Ingrese su mail: " );
const userLoginPsw = prompt( "LOG IN: Ingrese su contraseña: " );

function logUser ( loginAction ){

    if ( userLoginMail === userMail && userLoginPsw === userPsw ) {
        alert( `Bienvenido ${userName}!` );
    } else if ( userLoginMail !== userMail && userLoginPsw === userPsw ){
        alert( "El mail ingresado es incorrecto." );
    } else if( userLoginMail === userMail && userLoginPsw !== userPsw ){
        alert( "El password ingresado es incorrecto." );
    } else if( userLoginMail !== userMail && userLoginPsw !== userPsw ){
        alert( "El mail y el password ingresado es incorrecto." );
    } 
}

function mailChecker ( userMail ){
    for (let i = 0; i < userMail.length; i++){
        if (userMail.includes("@") && userMail.length >= 8 ) {
            break;
        } else {
            userMail = prompt( "Su mail no contiene arroba, mail invalido. Reasigne un mail nuevo: " );
        }
    }
}

function pswChecker ( userPsw ){    
    for (let i = 0; i < userPsw.length; i++){
        if ( userPsw.length >= 8 && userPsw.includes(0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9)) {
            break;
        } else {
            userPsw = prompt( "Su contraseña debe contener al menos 8 digitos y contar con un numero, contraseña insegura. Reasigne una nueva contraseña: " );
        }
    }
}


pswChecker ( userPsw )
mailChecker ( userMail );
logUser ( loginAction );







