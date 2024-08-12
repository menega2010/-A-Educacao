import axios from 'axios';

// Configuração do Axios
const instance = axios.create({
  baseURL: 'http://localhost:5000/', // URL base da sua API
  timeout: 1000, // Tempo de espera para a resposta
});

// Configuração de interceptadores, se necessário
instance.interceptors.request.use(
  (config) => {
    // Adicione um token de autenticação se necessário
    // config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
