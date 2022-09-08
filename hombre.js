let contador = 0;
let h2Contador = document.querySelector("#contador");
h2Contador.innerHTML = contador;

function incrementar () {
    contador +=1 ;
    let h2Contador = document.querySelector ("#contador");
    h2Contador.innerHTML = contador;
}
function decrementar () {
    contador -=1 ;
    let h2Contador = document.querySelector ("#contador");
    h2Contador.innerHTML = contador;
}