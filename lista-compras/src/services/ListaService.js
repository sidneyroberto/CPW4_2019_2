import axios from 'axios';

export default class ListaService {

    constructor() {
        this.listas = [];
        this.api = axios.create({
            baseURL: 'https://secret-plateau-95576.herokuapp.com'
        });
    }

    async recuperarListas() {
        let resposta = await this.api.get('/listas');
        this.listas = resposta.data;
        return this.listas;
    }

}


