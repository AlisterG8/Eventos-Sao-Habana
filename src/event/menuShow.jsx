
function menushow() {
    const boton = document.getElementById('barras');
    const cambio = document.getElementById('toggleMenu');

    boton.addEventListener('pointerdown',() =>{
        cambio.classList.toggle('menushow'); 
           
    });
}
window.addEventListener("load",menushow)