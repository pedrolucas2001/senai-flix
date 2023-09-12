let btn = document.querySelector("#btnFinalizar");
let anoValidade = document.querySelector("#validade");
let numeroCartao = document.querySelector("#numeroCartao");
let codSeguranca = document.querySelector("#codSeguranca");
let anoVencimento = document.querySelector("#anoVencimento");
let inputNomeCartao = document.querySelector("#inputNomeCartao");

btn.addEventListener("click",()=>{
    if(anoValidade.value == "" && numeroCartao.value == "" && codSeguranca.value == "" && anoVencimento.value == "" && inputNomeCartao.value == ""){
        alert("Informações pendentes")
    } else{
        window.location.href = "poltronas.html"
    }

})