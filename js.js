// Este es un simulador de retenciones de ganancias, busca que el usuario ingrese el tipo de retencion, con una pequeña
// descripción, ingrese el importe sobre el que quiere realizar el calculo correspondiente


function saludar(){
    return "Bienvenido al sistema de control de Retenciones de la RG. 830"
}

alert(saludar())

// variables
const minimo = 240

// arrays
const retencionesTipo = [78,94,95]
const retencionesMinimo = [224000,67170,67170]
const retencionesPorcentaje = [0.02,0.02,0.025]

// funciones
const restarMinimo = (a,b)=>a-b
const calcularRet = (c,d)=> c*d


let confirmaCalculo = confirm("Desea calcular la retención?")

// ciclos
// la condicion confirma si quiere realizar el calculo o no 
while(confirmaCalculo){

    let elegirTipoRetencion = parseInt(prompt("Ingrese el numero del tipo de retencion que desea calcular: \n 78 - Enajenación de bienes muebles \n 94 - Locación de obras y servicios \n 95 - Operaciones de transporte de carga"))

        // la condicion confirma si el tipo de retencion elegida esta o no en el Array, si es falsa, pedira ingresar un dato valido,
        // mientras que si es verdadera comenzara la solicitud del importe que quiere calcular 
        while(!retencionesTipo.includes(elegirTipoRetencion)){

        alert("Ingrese un numero de tipo de retencion valido")
        elegirTipoRetencion = parseInt(prompt("Ingrese el numero del tipo de retencion que desea calcular: \n 78 - Enajenación de bienes muebles \n 94 - Locación de obras y servicios \n 95 - Operaciones de transporte de carga"))
        
        }
    let netoGravado=parseFloat(prompt(`Ingresa el importe de neto gravado correspondiente`))
    
    // control 
    // Aqui se presetan los diferentes calculos posibles al elegir la opcion
    switch(elegirTipoRetencion){
         
        case 78:
            // La condicion me pide que el importe ingresado como neto gravado sea menor al minimo que le corresponde segun su elegirTipoRetencion, y a
            // la vez el importe ingresado por el porcentaje no puede ser inferior a la variable constante establecida como minimo
            if(netoGravado> retencionesMinimo.at(0) && (netoGravado*retencionesPorcentaje.at(0))>minimo){
                alert(`Su retención es ${calcularRet(restarMinimo(netoGravado,retencionesMinimo.at(0)),retencionesPorcentaje.at(0))}`)
                
            } else {
                alert("El importe ingresado no es pasible de retención")
            }
            break
        case 94:
            if(netoGravado> retencionesMinimo.at(1) && netoGravado*retencionesPorcentaje.at(1)>minimo){
                alert(`Su retención es ${calcularRet(restarMinimo(netoGravado,retencionesMinimo.at(1)),retencionesPorcentaje.at(1))}`)
            } else {
                alert("El importe ingresado no es pasible de retención")
            }
            break
        case 95:
            if(netoGravado> retencionesMinimo.at(2) && netoGravado*retencionesPorcentaje.at(2)>minimo){
                alert(`Su retención es ${calcularRet(restarMinimo(netoGravado,retencionesMinimo.at(2)),retencionesPorcentaje.at(2))}`)

            } else {
                alert("El importe ingresado no es pasible de retención")
            }
            break
        default:

            break
            
    }
    // con este confirm se habilita la posibilidad de volver a iniciar el ciclo
    confirmaCalculo = confirm("Desea volver a calcular la retención?")
}
// Cuando la confirmacion del calculo se torna falsa se rompe el ciclo y
// con este mensaje finaliza
alert("Gracias por utilizar nuestra calculadora de retenciones!")

