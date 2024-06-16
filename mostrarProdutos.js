import { getProdutos, deletarProduto } from './conectaAPI.js';

async function mostraProdutos() {
    const produtos = await getProdutos();
    const produtosContainer = document.getElementById('produtos');

    produtosContainer.innerHTML = '';

    produtos.forEach(produto => {
        const produtoHTML = `
            <div class="produtos_bloco">
                <img class="produtos_imagem" src="${produto.imagem}" alt="${produto.nome}">
                <h3 class="produtos_descricao">${produto.nome}</h3>
                <p class="produtos_preco">R$ ${produto.preco.toFixed(2)}</p>

                <div class="produtos_barra">
                    <p class="produtos_quantidade">Disponíveis: ${produto.quantidade}</p>
                    <button class="produtos_descartar" data-id="${produto.id}">
                        <img src="assets/🦆 icon _trash 2_.svg" alt="Ícone de lixeira">
                    </button>
                </div>
            </div>
        `;

        produtosContainer.innerHTML += produtoHTML;
    });

    document.querySelectorAll('.produtos_descartar').forEach(button => {
        button.addEventListener('click', async (event) => {
            const id = event.currentTarget.getAttribute('data-id');
            await deletarProduto(id);
            await mostraProdutos();
        });
    });
}

export { mostraProdutos };

