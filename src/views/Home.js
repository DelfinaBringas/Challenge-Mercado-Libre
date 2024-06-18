export const createHomeView = () => {
    const home = document.createElement('div');
    home.innerHTML = '<h2>Home Page</h2><p>Bienvenidos a la home</p>';
    return home;
};
