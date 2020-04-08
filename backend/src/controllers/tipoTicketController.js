const getDate = require('../utils/getDate');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const tiposTicket = await connection('tipoTicket').select('*');
    
        return response.json(tiposTicket);
    },

    async indexById (request, response) {
        const  { id }  = request.params;

        const tipoTicket = await connection('tipoTicket')
            .where('id', id)
            .select()
            .first();
    
        return response.json(tipoTicket);
    },
    
    async create (request, response) {
        const  usuarioId  = request.headers.authorization;
        const  dataUltModif = getDate();

        const { nomeTipoTicket, descricao, ativo } = request.body;

        const [id] = await connection('tipoTicket').insert({
            nomeTipoTicket,
            descricao, 
            ativo,
            dataUltModif,
            usuarioId
        })

        return response.json({ id });
    },

    async update (request, response) {
        const   { id }   = request.params;
        const  usuarioId  = request.headers.authorization;
        const  dataUltModif  = getDate();
        const { nomeTipoTicket, descricao, ativo } = request.body;

        await connection('tipoTicket').where('id', id).update({
            nomeTipoTicket,
            descricao, 
            ativo,
            dataUltModif,
            usuarioId
        });           

        return response.status(204).send();
    },
}