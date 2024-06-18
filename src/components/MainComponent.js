//parte del profe
const createMainComponent = () => {
    const main = document.createElement('main');
    main.id = 'main-content';
    main.innerHTML = '<h1>Productos</h1>';
    return main;
};
//

const obtenerProductos = async (valorBuscado) => {
    try {
        let respuesta = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${valorBuscado}`);
        let json = await respuesta.json();
        return json.results;
    } catch (error) {
        console.log('Error obteniendo productos', error);
    }
};

const mostrarProductos = async (valorBuscado) => {
    try {
        let productos = await obtenerProductos(valorBuscado);
        const productosList = document.getElementById('productos');
        productosList.innerHTML = ''; 
        productos.forEach(producto => {
            let li = document.createElement('li');
            li.innerHTML = `
            <img src="${producto.thumbnail}" alt="${producto.title}">
                <p>${producto.title}</p>
            `;
            productosList.appendChild(li);
        });
    } catch (error) {
        console.log('error al mostrar los productos:', error);
    }
};

//parte del chatt
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos('productos'); 
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
        const searchInput = document.getElementById('search-input').value;
        mostrarProductos(searchInput);
    });
});

export default createMainComponent;


