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

    async deleteViagem(id){
        try{
            const response = await api.delete(`viagem/${id}`);
            return response.data;
        }catch(error){
            throw new Error(error);
        }
    }
};

export default ViagemService;
