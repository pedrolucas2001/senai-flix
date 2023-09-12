let poltronas = document.getElementsByTagName("td");
let btn = document.querySelector("button");
let poltronaObrigatoria = false;

for (let i = 0; i < poltronas.length; i++) {
  poltronas[i].addEventListener("click", () => {
    poltronas[i].style.backgroundColor = "green";
    poltronaObrigatoria = true
  });
}

btn.addEventListener("click",()=>{
    if(poltronaObrigatoria){
        alert("Boa sessão")
        window.location.href = "index.html"
    }else{
        alert("Selecione pelo menos uma poltrona!")
    }
})

