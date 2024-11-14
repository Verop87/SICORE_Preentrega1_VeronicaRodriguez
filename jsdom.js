// Este es un simulador de retenciones de ganancias, busca que el usuario ingrese el tipo de retencion, con una pequeña
// descripción, ingrese el importe sobre el que quiere realizar el calculo correspondiente


// El html no se muestra completo al principio teniendo que confimar si desean realizar retenciones 
// antes de ver la pantalla para el calculo. 

// Variables para confirmar que desea realizar calculo

const display = document.getElementById("confirmarDisplay")
const ndisplay = document.getElementById("cancelarDisplay")

// Funciones para mostrar u ocultar los contenedores 
function ocultarContenedor (){
    document.getElementById("contenedor-retenciones").style.display = "none";
}

function mostrarContenedor (){
    document.getElementById("contenedor-retenciones").style.display ="block";
}

function ocultarContconfirmacion(){
    document.getElementById("contenedor-confirmacion").style.display ="none";
    document.getElementById("contenedor-saludo").style.display ="none";
}
function mostrarContenedorCalculo (){
    document.getElementById("contenedor-calculo").style.display ="block";
}
function ocultarContenedorCalculo (){
    document.getElementById("contenedor-calculo").style.display ="none";
}

// Ejecución por defecto de la funcion de ocultar el contenedor de retenciones

ocultarContenedor()

// Acciones al hacer click en los botones confirmar y cancelar utilizando
// funciones anonimas

display.addEventListener("click", () =>{
    mostrarContenedor()
    ocultarContconfirmacion()
    ocultarContenedorCalculo()
    })
ndisplay.addEventListener("click", () =>{
    ocultarContenedor()
})

// Acciones para seleccionar el tipo de retenciones que se van a calcular
// creando objetos con plantillas literales

const retencionesTipo = [
        {
            codigo: 78,
            minimo: 224000,
            porcentaje:0.02,
            nombre: "Enajenación de bienes muebles"
        },
        {
            codigo: 94,
            minimo: 67170,
            porcentaje:0.02,
            nombre: "Locación de obras y servicios"
        },
        {
            codigo: 95,
            minimo: 67170,
            porcentaje:0.025,
            nombre: "Transporte de carga nacional e internacional"
        }];


const contenedorTipo = document.getElementById(`contenedor-tipo`)


// Con este for se seleccionan los tipos de retenciones definidas en el array

for(const retencionTipo of retencionesTipo){
    const codigoTipo = document.createElement(`div`);
    codigoTipo.innerHTML =(`
                            <ul>
                                <li><button class="btnSelector"> ${retencionTipo.codigo} - ${retencionTipo.nombre}</button></li>
                            </ul>
                        `);
    contenedorTipo.appendChild(codigoTipo)
}

// Aqui se incorporaron las funciones que deben cumplir los botones al elegir el tipo de retencion

const btnSelector  = document.querySelectorAll(`.btnSelector`)

btnSelector.forEach(el =>{
    el.addEventListener(`click`, (e) =>{
        mostrarContenedorCalculo ();
    });
})


// En esta parte tomamos el dato cargado por el usuario a traves de la opcion de formularios

const formulario = document.getElementById("contenedor-calculo")
const netoGravado = document.getElementById("numero")
const calculo = document.querySelectorAll(`.btn-calculo`)

class Datos{
   constructor(netoGravado){ 
    this.netoGravado = netoGravado;
    }
}

const netos = []

formulario.addEventListener("submit", (ei) =>{
ei.preventDefault()
const fNetoGravado = parseFloat(netoGravado.value)
netos.push(new Datos (
    fNetoGravado,
))
CalcularRet()
console.table(netos)
})


// En esta parte se realiza el calculo de la retencion


const contenedorResultado = document.getElementById(`contenedor-resultado`)

for(const resultado of retencionesTipo){
    const ret = document.createElement(`div`);
    ret.innerHTML =(`
                           <p>El tipo de retencion es ${resultado.codigo} - ${resultado.nombre} y el monto a retener es ${CalcularRet()} }</p>
                     `);
    function CalcularRet() {(netoGravado - resultado.minimo)*resultado.porcentaje}
    contenedorResultado.appendChild(ret)
}

