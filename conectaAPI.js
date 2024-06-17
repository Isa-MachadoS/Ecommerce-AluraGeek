//const urlBase = 'http://localhost:3000';
//execução local do db.jon
const urlBase = 'https://my-json-server.typicode.com/Isa-MachadoS/Ecommerce-AluraGeek';
//mock usando My JSON Server, usado apenas para leitura, não tem como alterar os itens do db.json com ele

async function getProdutos() {
    try {
        const response = await fetch(`${urlBase}/produtos`);
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
        const response = await fetch(`${urlBase}/produtos`, {
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
        const response = await fetch(`${urlBase}/produtos/${id}`, {
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







