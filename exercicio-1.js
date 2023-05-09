function mudarCor() {
    document.body.style.backgroundColor = "red";
  }
function adicionarItem() {
    const item = document.createElement('li');
    const textoItem = document.getElementById('item').value;
    item.textContent = textoItem;
    const lista = document.getElementById('lista');
    lista.appendChild(item);
  }
  function trocarImagem() {
    const imagem = document.getElementById('imagem');
    if (imagem.src.match("imagem1.png")) {
      imagem.src = "imagem-1.png";
    } else {
      imagem.src = "imagem-2.png";
    }
  }
  function exibirMensagem() {
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = "Olá, mundo!";
  }
function ocultarElemento() {
  const elemento = document.getElementById('paragrafo');
  elemento.style.display = 'none';
}
    
