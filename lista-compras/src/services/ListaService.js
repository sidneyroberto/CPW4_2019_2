import axios from 'axios';
import itens from './itens';

export default class ListaService {

    constructor() {
        this.listas = [];
        this.api = axios.create({
            baseURL: 'http://localhost:3001/listas'
        });
    }

    async recuperarListas() {
        let resposta = await this.api.get('/');
        this.listas = resposta.data;
        return this.listas;
    }

    async salvar(lista) {
        await this.api.post('/', lista);
    }

    recuperarItens(termo) {
        // Converte para minúsculo
        termo = termo.toLowerCase();
        // Função de filtragem
        return itens.filter(item => {
            let descricao = item.descricao.toLowerCase();
            return descricao.includes(termo);
        });
    }

}


