const numeroDeCartao = document.querySelector(".cartao-numero");

let inputNumeroCartao = document.querySelector("#numero-cartao");

inputNumeroCartao.addEventListener("input", (event) => {
  let inputNumero = event.target.value;

  inputNumeroCartao.value = inputNumero
    .replace(/\s/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();

  numeroDeCartao.innerText = inputNumeroCartao.value;

  if (numeroDeCartao.innerText == "") {
    return (numeroDeCartao.innerText = "**** **** **** ****");
  }
});
