let gatos = document.querySelectorAll("div img");

for (let i=0 ; i<gatos.length ; i++){

    gatos[i].addEventListener("click", ()=>{
        seleccionaGato(i);
    });
}

const seleccionaGato = (elemento) => {
    location = "/detalles/" + elemento;
};