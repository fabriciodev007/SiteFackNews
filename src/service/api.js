import axios from 'axios';

const api = axios.create({
    baseURL: 'https://opendatasus.saude.gov.br/dataset/casos-nacionais',
    params: {
        api_key: 'ca48a040-088a-4845-a0c0-df1f9bef2765',
        language: 'pt-BR',
        page: 1
    }
});

export default api;