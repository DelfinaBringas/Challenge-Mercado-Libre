export const createHeader = () => {
  const header = document.createElement('header');
  header.innerHTML = `
    <h1>Mercado Libre</h1>

//
    <input type="text" id="search-input" placeholder="Producto..">
    <button id="search-button">Buscar</button>
//
    <nav>
      <a href="#inicio">Inicio</a>
    </nav>
  `;
  return header;
};
