// ViagemService.js
import api from '../../util/api';

const ViagemService = {
    async getAllViagens() {
        try {
            const response = await api.get('viagem');
            return response;
        } catch (error) {
            throw new Error(error);
        }
    },

    async createViagem(viagemData) {
        try {
            const response = await api.post('viagem', viagemData);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    },

    // Outros métodos para atualizar e deletar viagens podem ser adicionados aqui
};

export default ViagemService;
