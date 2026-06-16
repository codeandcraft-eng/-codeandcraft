let divSelecionadaParaRemover = null;

// EVENTO: Seleção de arquivos
document.getElementById('seletorArquivo').addEventListener('change', function (eventoBotao) {
  const arquivos = eventoBotao.target.files;
  const galeria = document.getElementById('galeria');

  if (!arquivos || arquivos.length === 0) return;

  Array.from(arquivos).forEach(arquivo => {
    if (arquivo.type.startsWith('image/')) { 
      const leitor = new FileReader();

      leitor.onload = function (eventoLeitor) {
        const descricao = prompt("Insira uma descrição para a imagem '" + arquivo.name + "':");
        const div = document.createElement('div');
        div.classList.add('imagem');

        const img = new Image();
        img.src = eventoLeitor.target.result; 
        img.alt = arquivo.name;

        const linkImagem = eventoLeitor.target.result;
        img.onclick = function() { 
          abrirModal(linkImagem, descricao, div); 
        };

        div.appendChild(img); 
        galeria.appendChild(div);
      };

      leitor.readAsDataURL(arquivo);    
    }
  });
});

// FUNÇÃO: Abrir o Modal
function abrirModal(src, descricao, divElemento) {
  const modal = document.getElementById('modal');
  modal.style.setProperty('display', 'flex', 'important'); 
  
  document.getElementById('modalImg').src = src;
  document.getElementById('modalDesc').innerText = descricao || "Sem descrição";
  
  // Guarda a div na memória para exclusão
  divSelecionadaParaRemover = divElemento;
}

// EVENTO: Clicar no botão de remover (Isolado e protegido)
document.getElementById('btnRemover').addEventListener('click', function(event) {
  event.stopPropagation(); // Trava o fechamento do fundo
  
  if (divSelecionadaParaRemover) {
    if (confirm("Deseja realmente remover esta imagem?")) {
      divSelecionadaParaRemover.remove(); // Apaga da grade
      fecharModalDoLayout();
    }
  }
});

// EVENTO: Clicar no fundo escuro do modal para fechar
document.getElementById('modal').addEventListener('click', function(event) {
  // Só fecha se clicar no fundo (não fecha se clicar na imagem ou texto)
  if (event.target === this) {
    fecharModalDoLayout();
  }
});

// FUNÇÃO AUXILIAR: Limpar e Esconder
function fecharModalDoLayout() {
  document.getElementById('modal').style.display = 'none';
  divSelecionadaParaRemover = null;
}
