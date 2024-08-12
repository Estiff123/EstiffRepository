//PRODUCTOS
const productos = [
    //collares
    {
        id: "collar-01",
        titulo: "Collar Pequeño Negro",
        imagen: "./img/collares/01.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 20
    },
    {
        id: "collar-02",
        titulo: "Collar Estrellas",
        imagen: "./img/collares/02.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 30
    },
    {
        id: "collar-03",
        titulo: "Collar Cuero",
        imagen: "./img/collares/03.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 40
    },
    {
        id: "collar-04",
        titulo: "Collar Abeja",
        imagen: "./img/collares/04.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 30
    },
    {
        id: "collar-05",
        titulo: "Collar Brillante",
        imagen: "./img/collares/05.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 35
    },
    {
        id: "collar-06",
        titulo: "Collar Azul",
        imagen: "./img/collares/06.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 20
    },
    {
        id: "collar-07",
        titulo: "Collar Rosa",
        imagen: "./img/collares/07.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 20
    },
    {
        id: "collar-08",
        titulo: "Collar Pequeño",
        imagen: "./img/collares/08.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 15
    },
    {
        id: "collar-09",
        titulo: "Collar Electronico",
        imagen: "./img/collares/09.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 40
    },
    {
        id: "collar-10",
        titulo: "Collar Negro",
        imagen: "./img/collares/10.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 20
    },
    //Muebles
    {
        id: "mueble-01",
        titulo: "Cama De Gato",
        imagen: "./img/muebles/01.jpg",
        categoria: {
            nombre: "Muebles",
            id: "muebles"
        },
        precio: 50
    },
    {
        id: "mueble-02",
        titulo: "Amaca Pequeña Gato",
        imagen: "./img/muebles/02.jpg",
        categoria: {
            nombre: "Muebles",
            id: "muebles"
        },
        precio: 40
    },
    {
        id: "mueble-03",
        titulo: "Casa Cara De Gato",
        imagen: "./img/muebles/03.jpg",
        categoria: {
            nombre: "Muebles",
            id: "muebles"
        },
        precio: 70
    },
    {
        id: "mueble-04",
        titulo: "Amaca de Lana",
        imagen: "./img/muebles/04.jpg",
        categoria: {
            nombre: "Muebles",
            id: "muebles"
        },
        precio: 60
    },
    {
        id: "mueble-05",
        titulo: "Casita Diamante",
        imagen: "./img/muebles/05.jpg",
        categoria: {
            nombre: "Muebles",
            id: "muebles"
        },
        precio: 80
    },
    {
        id: "mueble-06",
        titulo: "Casita De Madera",
        imagen: "./img/muebles/06.jpg",
        categoria: {
            nombre: "Muebles",
            id: "muebles"
        },
        precio: 60
    },
    {
        id: "mueble-07",
        titulo: "Rascador Espiral",
        imagen: "./img/muebles/07.jpg",
        categoria: {
            nombre: "Muebles",
            id: "muebles"
        },
        precio: 40
    },
    {
        id: "mueble-08",
        titulo: "Rascador Para Gato",
        imagen: "./img/muebles/08.jpg",
        categoria: {
            nombre: "Muebles",
            id: "muebles"
        },
        precio: 50
    },
    {
        id: "mueble-09",
        titulo: "Casa De Gato Blanco",
        imagen: "./img/muebles/09.jpg",
        categoria: {
            nombre: "Muebles",
            id: "muebles"
        },
        precio: 90
    },
    {
        id: "mueble-10",
        titulo: "Casitas De Madera",
        imagen: "./img/muebles/10.jpg",
        categoria: {
            nombre: "Muebles",
            id: "muebles"
        },
        precio: 150
    },
    {
        id: "mueble-11",
        titulo: "Jueguete Para Gatos",
        imagen: "./img/muebles/11.jpg",
        categoria: {
            nombre: "Muebles",
            id: "muebles"
        },
        precio: 30
    },
    {
        id: "mueble-12",
        titulo: "Amaca Para Gatos",
        imagen: "./img/muebles/12.jpg",
        categoria: {
            nombre: "Muebles",
            id: "muebles"
        },
        precio: 40
    },
    //Ropa
    {
        id: "ropa-01",
        titulo: "Ropa de Oso",
        imagen: "./img/ropa/01.jpg",
        categoria: {
            nombre: "Ropa",
            id: "ropa"
        },
        precio: 30
    },
    {
        id: "ropa-02",
        titulo: "Vestido Negro",
        imagen: "./img/ropa/02.jpg",
        categoria: {
            nombre: "Ropa",
            id: "ropa"
        },
        precio: 50
    },
    {
        id: "ropa-03",
        titulo: "Ropa Calefactora Gatos",
        imagen: "./img/ropa/03.jpg",
        categoria: {
            nombre: "Ropa",
            id: "ropa"
        },
        precio: 40
    },
    {
        id: "ropa-05",
        titulo: "Ropa de Abeja",
        imagen: "./img/ropa/04.jpg",
        categoria: {
            nombre: "Ropa",
            id: "ropa"
        },
        precio: 35
    },
    {
        id: "ropa-05",
        titulo: "Ropa De Naruto",
        imagen: "./img/ropa/05.jpg",
        categoria: {
            nombre: "Ropa",
            id: "ropa"
        },
        precio: 30
    },
    {
        id: "ropa-06",
        titulo: "Chompa Rosa Gato",
        imagen: "./img/ropa/06.jpg",
        categoria: {
            nombre: "Ropa",
            id: "ropa"
        },
        precio: 25
    },
    {
        id: "ropa-07",
        titulo: "Chompa Roja Gato",
        imagen: "./img/ropa/07.jpg",
        categoria: {
            nombre: "Ropa",
            id: "ropa"
        },
        precio: 25
    },
    {
        id: "ropa-08",
        titulo: "Ropa de Tiburon",
        imagen: "./img/ropa/08.jpg",
        categoria: {
            nombre: "Ropa",
            id: "ropa"
        },
        precio: 40
    },
    {
        id: "ropa-09",
        titulo: "Chaleco Verde Gato",
        imagen: "./img/ropa/09.jpg",
        categoria: {
            nombre: "Ropa",
            id: "ropa"
        },
        precio: 45
    },
    {
        id: "ropa-10",
        titulo: "Ropa De Lana",
        imagen: "./img/ropa/10.jpg",
        categoria: {
            nombre: "Ropa",
            id: "ropa"
        },
        precio: 40
    },
]

const contenedorProductos = document.querySelector("#contenedor-productos")
const botonCategoria = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito")

function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">S/${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `
        contenedorProductos.append(div)
    })
    actualizarBotonesAgregar();
   
}
cargarProductos(productos)

botonCategoria.forEach(boton =>{
    boton.addEventListener("click",(e)=>{
        botonCategoria.forEach(boton =>boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);

        cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText= "Todos los Productos"
            cargarProductos(productos)
        }
        
    })

});

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar")
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
    
}
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS)
    actualizarNumerito()
} else{
    productosEnCarrito = [] 
}
function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton)
    
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
        
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado)
    }  
    
    actualizarNumerito()

    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));

}


function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad,0)
    numerito.innerText = nuevoNumerito
}