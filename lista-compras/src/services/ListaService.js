export default class ListaService {

    constructor() {
        this.listas = [
            {
                _id: '1',
                nome: 'Mercado semanal',
                itens: [
                    {
                        _id: '1',
                        descricao: 'Feijão Carioca',
                        unidade: 'kg',
                        quantidade: 1
                    },
                    {
                        _id: '2',
                        descricao: 'Arroz Tipo 1',
                        unidade: 'kg',
                        quantidade: 1
                    },
                    {
                        _id: '3',
                        descricao: 'Contra-Filé',
                        unidade: 'kg',
                        quantidade: 1
                    },
                    {
                        _id: '4',
                        descricao: 'Ovos',
                        unidade: 'dúzia',
                        quantidade: 2
                    },
                    {
                        _id: '5',
                        descricao: 'Azeite de Oliva',
                        unidade: 'litro',
                        quantidade: 0.5
                    }
                ]
            },
            {
                _id: '2',
                nome: 'Farmácia mensal',
                itens: [
                    {
                        _id: '1',
                        descricao: 'Desodorante Aerosol',
                        unidade: 'vasilhame',
                        quantidade: 3
                    },
                    {
                        _id: '2',
                        descricao: 'Sabonete',
                        unidade: 'unidade',
                        quantidade: 5
                    }
                ]
            },
            {
                _id: '3',
                nome: 'Feira do fim de semana',
                itens: [
                    {
                        _id: '1',
                        descricao: 'Banana Nanica',
                        unidade: 'dúzia',
                        quantidade: 1
                    },
                    {
                        _id: '2',
                        descricao: 'Maçã Fuji',
                        unidade: 'kg',
                        quantidade: 1
                    },
                    {
                        _id: '3',
                        descricao: 'Tomate Italiano',
                        unidade: 'kg',
                        quantidade: 1
                    },
                    {
                        _id: '4',
                        descricao: 'Rúcula',
                        unidade: 'maço',
                        quantidade: 3
                    },
                    {
                        _id: '5',
                        descricao: 'Alho',
                        unidade: 'grama',
                        quantidade: 100
                    }
                ]
            }
        ];
    }

    recuperarListas() {
        return this.listas;
    }

}


