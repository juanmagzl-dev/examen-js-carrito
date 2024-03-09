const carrito = {}
let total = 0 // total inico carrito

// FUNCION PARA MOSTRAR JSON EN EL HTML 
function mostrarItems() { // -> mostrar los productos en la página
    document.getElementById('items').innerHTML = items.map(item => ` 
    <div class="card cols-sm-4">
        <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <img src="${item.imagen}" class="img-fluid" alt="">
            <p class="card-text">${item.precio}&euro;</p>
            <button class="btn btn-primary" onclick="añadirCa(${item.id})">Añadir al carrito</button>
        </div>
    </div>
    `).join('');
}

// FUNCION MOSTRAR CARRITO
function mostrarCarrito(){
    let dosDec = total.toFixed(2); // Redondea el total a dos decimales
    // selecciono el contenedor para el carrito
    document.getElementById('carrito').innerHTML = Object.keys(carrito).map(itemId => {
        // PRODUCTO = ID DEL CARRITO
        const item = items.find(item => item.id == itemId); // producto = ID en el carrito
        const cantidad = carrito[itemId]; // cantidad de los prodcutos en el carrito
        return ` 
        <div class="card-body">
        ${item.nombre} x ${cantidad}
        <img src="${item.imagen}" class="img-fluid" alt="">
        <span>${(item.precio * cantidad).toFixed(2)}&euro;</span>
        <button class="btn btn-primary" onclick="removeItem(${item.id})">Eliminar</button>
    </div>
        `;
    }).join('')
    document.getElementById('total').textContent = dosDec; // actualización en la página
}

// FUNCION PARA AÑADIR AL CARRITO
function añadirCa(itemId) {
    carrito[itemId] = (carrito[itemId] || 0) + 1; // AÑADIR O AGREGAR PRODUCTO
    total += items.find(item => item.id === itemId).precio; // AÑADIR O AGREGAR PRECIO
    mostrarCarrito();
}

// FUNCION PARA ELIMINAR DEL CARRITO
function removeItem(itemId) {
    const precio = items.find(item => item.id === itemId).precio; // PRECIO PRODUCTO PARA ELIMINAR
    total -= precio; // DECREMENTO DEL PRECIO TOTAL
    if (--carrito[itemId] === 0) delete carrito[itemId]; // DECREMENTA EL PRECIO DEL PRODUCTO Y SI LLEGA A 0 SE ELIMINA
    mostrarCarrito();
}

mostrarItems();
// BOTÓN PARA ELIMINAR TODO EL CARRITO -> boton-vaciar html
document.getElementById('boton-vaciar').addEventListener('click', () => {
    Object.keys(carrito).forEach(itemId => delete carrito[itemId]); // ELIMINA TODOS LOS PRODUCTOS
    total = 0;
    mostrarCarrito();
});



// CONFIRM CANCELAR PRODUCTOS

function removeItem(itemId) {
    const precio = items.find(item => item.id === itemId).precio; // PRECIO PRODUCTO PARA ELIMINAR
    const confirmacion = confirm(`¿Estás seguro de que quieres eliminar ${items.find(item => item.id === itemId).nombre}?`);
    if (confirmacion) {
        total -= precio; // DECREMENTO DEL PRECIO TOTAL
        if (--carrito[itemId] === 0) delete carrito[itemId]; // DECREMENTA EL PRECIO DEL PRODUCTO Y SI LLEGA A 0 SE ELIMINA
        mostrarCarrito();
    }
}

