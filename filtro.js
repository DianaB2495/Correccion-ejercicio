document.addEventListener("DOMContentLoaded", function() {
  const productos = [
    { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
    { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
    { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
    { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
    { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
  ];

  const listaProductos = document.getElementById("lista-de-productos");
  const filtroInput = document.getElementById("filtroInput");

  // Función para mostrar productos en el DOM
  function mostrarProductos(productosMostrados) {
    listaProductos.innerHTML = ""; // Limpiar lista de productos antes de agregar nuevos

    productosMostrados.forEach(producto => {
      const divProducto = document.createElement("div");
      divProducto.classList.add("producto");

      const titulo = document.createElement("p"); // Cambiado de img a p para mostrar el nombre
      titulo.textContent = producto.nombre;

      const imagen = document.createElement("img");
      imagen.src = producto.img;
      imagen.alt = producto.nombre;

      divProducto.appendChild(titulo);
      divProducto.appendChild(imagen);
      listaProductos.appendChild(divProducto);
    });
  }

  // Mostrar todos los productos al cargar la página inicialmente
  mostrarProductos(productos);

  // Evento de click en el botón de filtrar
  document.getElementById("filtrarBtn").addEventListener("click", function() {
    const textoFiltro = filtroInput.value.trim().toLowerCase();

    // Filtrar productos basados en el texto del input
    const productosFiltrados = productos.filter(producto =>
      producto.tipo.toLowerCase().includes(textoFiltro) ||
      producto.color.toLowerCase().includes(textoFiltro)
    );

    // Mostrar los productos filtrados
    mostrarProductos(productosFiltrados);
  });
});
