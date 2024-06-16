import { adicionarProduto } from './conectaAPI.js';
import { mostraProdutos } from './mostrarProdutos.js';

document.getElementById('addProdutoFormulario').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const novoProduto = {
        nome: formData.get('produtoNome'),
        preco: parseFloat(formData.get('produtoPreco')),
        imagem: `assets/${formData.get('produtoImagem').name}`,
        quantidade: parseInt(formData.get('produtoQuantidade'), 10),
    };

    try {
        await adicionarProduto(novoProduto);
        this.reset();
        mostraProdutos();
        exibirMensagem('success', 'Produto adicionado com sucesso!');
    } catch (error) {
        exibirMensagem('error', 'Erro ao adicionar o produto. Por favor, tente novamente.');
    }
});

function exibirMensagem(classe, mensagem) {
    const mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.innerHTML = mensagem;
    mensagemDiv.className = `mensagem ${classe} show`;
    mensagemDiv.style.display = 'block';

    setTimeout(() => {
        mensagemDiv.classList.remove('show');
        setTimeout(() => {
            mensagemDiv.style.display = 'none';
        }, 500);  // Tempo para a transição
    }, 5000);  // Tempo de exibição aumentado para 5 segundos
}

function limparForm() {
    document.getElementById('addProdutoFormulario').reset();
}

document.addEventListener('DOMContentLoaded', () => {
    mostraProdutos();
});






