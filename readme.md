## Explicación código EXAMEN CARRITO

### 1- `const carrito = {}`

> Declaro objeto carrito, lo utilizo para almacenar los productos seleccionados.

### 2- `let total = 0`

> Declaro la variable total, qué almacenará el total de todos los productos en el carrito. Inicialmente se establece como 0.

### 3- `Función mostrarItems`

> Función para mostrar todos los productos en el HTML. Utilizo el metodo map() para iterar sobre el json 'items', que contiene toda la información, y genera el HTML para cada producto. Al final del HTML utilizo join('') para unir todos los elementos del array (que ahora son cadenas de HTML) en una sola cadena de texto. Por lo tanto, se elimina la coma entre cada elemento y se convierte en una cadena única.

### 4- `Función mostrarCarrito`

> 1- Función mostrar los productos que están en el carrito. Utilizo dos decimales lo guardo en la variabe `let dosDec = total.toFixed(2);`.
>
> 2- Utilizo el método `Object.keys()` para obtener los IDs del objeto `const carrito = {}`. -se utiliza para obtener un array que contiene las claves de un objeto. En otras palabras, devuelve un array con todas las propiedades enumerables de un objeto..
>
> 3- `const item = items.find(item => item.id == itemId);` aquí busco el itemId del json items utilizando el método `find()`, esto lo que hace es obtener información de cada producto.
>
> 4- Hago return para que devuelva en el HTML y añado un botón para eliminar el producto del carrito.

### 5- `Función añadirCa(itemId)`

> Se llama cuando se hace click en el botón 'Añadir al carrito'.
>
> 1- `carrito[itemId] = (carrito[itemId] || 0) + 1;` incrementa la cantidad del producto al itemId en el carrito(`carrito`) => si el producto ya está en el carrito se suma +1.
>
> 2- `total += items.find(item => item.id === itemId).precio;` aquí se busca el producto al itemId utilizando `find()`, cuando se encuentra se accede al `{item.precio}` y se suma al total del carrito.

### 6- `Función removeItem(itemId)`

> Se llama cuando se hace clic en el botón "Eliminar" de un producto en el carrito.
>
> 1- `const precio = items.find(item => item.id === itemId).precio;` vuelvo a utilizar el método `find()` para buscar el itemId. Una vez encontrado se accede a su precio `{item.precio}` y se guarda en la variable.
>
> 2- `total -= precio;` se resta el precio del carrito 'total'.
>
> 3- `if (--carrito[itemId] === 0) delete carrito[itemId];` Se decrementa la cantidad del producto en el carrito y se comprueba si llega a 0. Si llega a 0 el producto se tiene que eliminar del carrito, esto se hace con el operador delte `delete carrito[itemId];`

### 7- `Botón vaciar todo el carrito`

> 1- `document.getElementById('boton-vaciar')` Selecciona el elemento HTML con el ID 'boton-vaciar'. Hago el evento 'click'.
>
> 2- `Object.keys(carrito).forEach(itemId => delete carrito[itemId]);` Obtengo todos los IDs del objeto 'carrito'. Elimina el elemento correspondiente del objeto 'carrito', utilizando 'delete'.
>
> 3- `total = 0` Después de eliminar todos los productos, se establece el valor de la variable 'total' en 0.
