async function getProdutos() {
    try {
        const response = await fetch(`https://666f8d8cf1e1da2be5230f22.mockapi.io/api/v1/produtos`);
        if (!response.ok) {
            throw new Error('Erro ao obter os produtos');
        }
        const produtos = await response.json();
        return produtos;
    } catch (error) {
        console.error('Erro ao obter os produtos:', error);
        throw error;
    }
}

async function adicionarProduto(produto) {
    try {
        const response = await fetch(`https://666f8d8cf1e1da2be5230f22.mockapi.io/api/v1/produtos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produto),
        });
        if (!response.ok) {
            throw new Error('Erro ao adicionar produto');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);
        throw error;
    }
}

async function deletarProduto(id) {
    try {
        const response = await fetch(`https://666f8d8cf1e1da2be5230f22.mockapi.io/api/v1/produtos/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Erro ao deletar produto');
        }
        return true;
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        throw error;
    }
}

export { getProdutos, adicionarProduto, deletarProduto };







