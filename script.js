function imgSlider(e){
    document.querySelector('#bare').src = e;
}


function nome(text){
    const nome = document.getElementById("nome")
    nome.innerHTML = text;
}

function tamanho(width){
    const tamanho = document.getElementById('bare')
    tamanho.style.width = "300px";
}