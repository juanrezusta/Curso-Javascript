
// let user = "Juan Manuel Garcia";

// const server="Mundo-2"

// //EL TRUE Y EL FALSE VAN EN MINUSCULAAAA
// let inStock = true;

// console.log("aver che 'sapeee' o no?")

// console.log(user.startsWith("J"))

// console.log(user.endsWith("J"))

// //esto cambia el valor 
// //pero habria que almacenarlo en otra variable para dejarlo fijo
// console.log(user.replace("Juan","SAPESAPESAPE"))

// console.log(user.includes('x'))

// console.log(user.length)

// console.log(user.indexOf("M"))





// let edad=prompt("A VER GENIO MOSTRAME EL DNI")

// if(edad>=18){
//     console.log("PODES PASAR GENIO")
// }
// else if(edad >= 12 && edad < 18){
//     console.log("SI TIENES AUTORIZACION DE TUS PADRES PODES ENTRAR")
// }
// else{
//     console.log("NO ESTA PERMITIDO QUE ENTRES MONSTRUO")
// }





// for(let i=0;i<100;i++){
//     console.log('Iteracion N*', i)
// }

// let cantidad = parseInt(prompt('INGRESE CANTIDAD DE REPETICIONES'));
// let texto = prompt('INGRESE TEXTO A REPETIR');

// for (let index = 0; index < cantidad; index++) {
// console.log(texto);
// }

// console.log("SAPESAPESAPEEEEEE")


// let entrada = prompt("Ingresa un nombre");

// while(entrada!="ESC") {
//     switch (entrada){
//         case "ANA" :
//             alert("HOLA ANA");
//             entrada="ESC"
//             break;
//         case "JUAN":
//             alert("HOLA JUAN");
//             break;
//         default:
//             alert("WHO THE FUCK R U "+ entrada+"?");
//             break;
//     }
//     entrada = prompt("Ingresa un nombreeeeeeeeeeee");
// }



// let contador = 0; // Declara la variable fuera del bucle

// do {
//     contador = contador + 1;
//     console.log(contador,"SAPEE");
// } while (contador <= 10); // Usa la condición correcta para que el bucle se repita mientras contador sea menor que 10


// let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
// let texto = prompt('INGRESE TEXTO A REPETIR');
// for (let index = 0; index < cantidad; index++) {
// console.log(texto,index);
// }

// let numero_ingresado=prompt("Ingrese un numero");

// if (numero_ingresado%2==0){
//     console.log("El numero es PAR!")
// }else{
//     console.log("EL numero ingresado es IMPAR PAPA!")
// }


// let numero=prompt("Ingrese un numero: ");
// while(numero!=="salir"){
//     if (numero%2===0){
//         alert("El numero " + numero + " es PAR!");
//     }else{
//         alert("El numero " + numero + " es IMPAR PAPA!");
//     }
//     numero=prompt("Ingrese otra vez un numero: ");
// }


// let numerazo=299.4343

// console.log(Math.round(numerazo));


// const variableta=function(a){
//     return console.log(a*22);

// }


// const miFuncion= (a,b) =>{
//     return console.log(a*b*a)
// }

// miFuncion(22,10)

// function evaluate(op){
//     return function(x){
//         return function(y){
//             if (op==="sum") return x+y;
//             else if (op==="mul") return x*y;
//             else if (op==="div") return x/y;
//             else if (op==="sub") return x-y;
//             else return "What the fuck bro!?";
//         }
//     }
// }
// const multiply=evaluate("mul")(2)(3)

// console.log(multiply)



// const VARIABLE = function sapeSeguro(a,b){
//         return (a+b)*(a+b)
//     }


// let varv = [2,3,4,5]

// varv.push(323)

// console.log(varv);
// console.log("----------");

// varv.pop()
// console.log(varv);
// console.log("----------");

// let first = varv.shift()
// console.log(first);
// console.log(varv);
// console.log("----------");

// let newvarv = varv.unshift(22,33,44,55)
// console.log(newvarv);
// console.log(varv);





//ARRANCAMOS EL ENTREGABLE 1

const almacen = [
    {nombre: "Fideos 500gr", precio: 1250},
    {nombre: "Harina 1kg", precio: 699},
    {nombre: "Arroz 1kg", precio: 2300},
    {nombre: "Aceite 1.5lts", precio: 1550},
    {nombre: "Azúcar 1kg", precio: 900},

];

const frescos = [
    {nombre: "Huevo 12u", precio: 2450},
    {nombre: "Salchichas x6u", precio: 1600},
    {nombre: "Morcilla x4u", precio: 2200},
    {nombre: "Chorizo x3u", precio: 2500},
    {nombre: "Queso 1kg", precio: 7800},
];

const bebidas = [
    {nombre: "Agua mineral 2lts", precio: 1100},
    {nombre: "Gaseosa cola 2.25lts", precio: 1950},
    {nombre: "Gaseosa naranja 2.25lts", precio: 1900},
    {nombre: "Cerveza 1lts", precio: 1730},
    {nombre: "Vino tinto 750ml", precio: 3400},
];



function cantidad_de_producto(item){
    mensaje="Cuantas unidades de "+item.nombre+" queres? $"+item.precio + " cuesta cada uno."
    return mensaje
} 
function agregar_carrito(item,cantidad){
    let producto ={
        nombre:item.nombre,
        cantidad:cantidad,
        precio:item.precio
    }
    carrito.push(producto)
}    

function total_valor_item(item,cantidad){
    let total_item=item.precio*cantidad
    return total_item
}

function valor_total_carrito(){
    let total_valor=0
    for (let item of carrito){
        total_valor += (item.cantidad*item.precio)
    }
    return total_valor
}

function facturar(){
    let mensaje_factura="Esta es su factura:\n"
    let total_mensaje=`\nMonto total a abonar : $${valor_total_carrito()}\n`
    for (let item of carrito){
        mensaje_factura += ` ${item.cantidad}u. ${item.nombre} $${item.precio} c/u  \n     total item: $${total_valor_item(item, item.cantidad)}\n`;
    }
    let mensajazo=mensaje_factura+total_mensaje
    return mensajazo
}


function confirmar_agregacion(item,cantidad){
    let total=item.precio*cantidad
    let mensaje="Confirma que quieres agregar "+cantidad+" de "+item.nombre+" por $"+total
    return mensaje
}

function mostrar_carrito(){
    for (let i of carrito){
        console.log(i)
    }
}



function mostrar_categoria(categoria){
    let contador_id=1
    let menu_detallado=""
    
    for (let item of categoria){
        menu_detallado += "["+contador_id+"] "+ item.nombre + " Precio: " + item.precio + " Stock: " + item.stock +"\n";
        contador_id += 1
    }    
    while (true) { 
        let opcion_producto_elegido=prompt("Elige una opcion con su identificador:\n\n"+menu_detallado)
    
        opcion_producto_elegido = parseInt(opcion_producto_elegido)
        if (opcion_producto_elegido >= 0 && opcion_producto_elegido <= contador_id-1) {
            let producto_elegido= categoria[opcion_producto_elegido-1]
            return producto_elegido
            break
        } else {
            alert("Ingresaste cualquier verdura, va de nuevo...")
        }
    }   
}    



let carrito=[]

function main() {
    let terminarCompra = false;

    while (true) {
        let primer_opcion = parseInt(prompt("Bienvenido a MercaditoSape:\n\nQue deseas llevar:\n[1] Almacen\n[2] Frescos\n[3] Bebidas\n[4] Terminar compra"));

        switch(primer_opcion) {
            case 1:
                {let producto_elegido_almacen = mostrar_categoria(almacen);
                let cantidad_producto_elegido;
                do {
                    cantidad_producto_elegido = prompt(cantidad_de_producto(producto_elegido_almacen))
                    if (cantidad_producto_elegido === null){
                        break
                    } else if (!isNaN(cantidad_producto_elegido) && parseInt(cantidad_producto_elegido)>=0){
                        if (confirm(confirmar_agregacion(producto_elegido_almacen, cantidad_producto_elegido))) {
                            agregar_carrito(producto_elegido_almacen, cantidad_producto_elegido)
                            mostrar_carrito()
                    }
                    break
                } else {
                    alert("Por favor, ingresa un numero positivo.")
                }
                }while (true)
                break;
                }   
            case 2:
                {let producto_elegido_frescos = mostrar_categoria(frescos);
                let cantidad_producto_elegido;
                do {
                    cantidad_producto_elegido = prompt(cantidad_de_producto(producto_elegido_frescos))
                    if (cantidad_producto_elegido === null){
                        break
                    } else if (!isNaN(cantidad_producto_elegido) && parseInt(cantidad_producto_elegido)>=0){
                        if (confirm(confirmar_agregacion(producto_elegido_frescos, cantidad_producto_elegido))) {
                            agregar_carrito(producto_elegido_frescos, cantidad_producto_elegido)
                            mostrar_carrito()
                    }
                    break
                } else {
                    alert("Por favor, ingresa un numero positivo.")
                }
                }while (true)
                break;
                }   
            case 3:
                {let producto_elegido_bebidas = mostrar_categoria(bebidas);
                let cantidad_producto_elegido;
                do {
                    cantidad_producto_elegido = prompt(cantidad_de_producto(producto_elegido_bebidas))
                    if (cantidad_producto_elegido === null){
                        break
                    } else if (!isNaN(cantidad_producto_elegido) && parseInt(cantidad_producto_elegido)>=0){
                        if (confirm(confirmar_agregacion(producto_elegido_frescos, cantidad_producto_elegido))) {
                            agregar_carrito(producto_elegido_bebidas, cantidad_producto_elegido)
                            mostrar_carrito()
                    }
                    break
                } else {
                    alert("Por favor, ingresa un numero positivo.")
                }
                }while (true)
    
                break;
                }   
            case 4:
                if (carrito.length === 0) { 
                    alert("NO COMPRASTE NADA, GRACIAS VUELVA PRONTO");
                    break;
                } else { 
                    terminarCompra = confirm("Deseas terminar la compra?");
                    if (terminarCompra){
                        console.log(facturar());
                        alert(facturar());
                        carrito = []
                        break;
                    }else{
                        break;
                    }

                }
            default:
                alert("No ingresaste una opción válida");
        }
    }
}

main()