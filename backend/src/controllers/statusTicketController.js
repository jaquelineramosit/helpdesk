const getDate = require('../utils/getDate');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const statusTicket = await connection('statusTicket').select('*');
    
        return response.json(statusTicket);
    },

    async indexById (request, response) {
        const  { id }  = request.params;

        const statusTicket = await connection('statusTicket')
            .where('id', id)
            .select()
            .first();
    
        return response.json(statusTicket);
    },
    
    async create (request, response) {
        const  usuarioId  = request.headers.authorization;
        const  dataUltModif = getDate();

        const { nomeStatusTicket, descricao, ativo } = request.body;

        const [id] = await connection('statusTicket').insert({
            nomeStatusTicket,
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
        const { nomeStatusTicket, descricao, ativo } = request.body;

        await connection('statusTicket').where('id', id).update({
            nomeStatusTicket,
            descricao, 
            ativo,
            dataUltModif,
            usuarioId
        });           

        return response.status(204).send();
    },
}