const getDate = require('../utils/getDate');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const clienteLocal = await connection('clienteLocal').select('*');
    
        return response.json(clienteLocal);
    },

    async indexById (request, response) {
        const  { id }  = request.params;

        const clienteLocal = await connection('clienteLocal')
            .where('id', id)
            .select()
            .first();
    
        return response.json(clienteLocal);
    },
    
    async create (request, response) {
        const  usuarioId  = request.headers.authorization;
        const  dataUltModif = getDate();

        const { clienteId, localId, ativo } = request.body;

        const [id] = await connection('clienteLocal').insert({
            clienteId,
            localId,
            usuarioId,
            dataUltModif,
            ativo
        })

        return response.json({ id });
    },

    async update (request, response) {
        const   { id }   = request.params;
        const  usuarioId  = request.headers.authorization;
        const  dataUltModif  = getDate();
        const { clienteId, localId, ativo } = request.body;

        await connection('clienteLocal').where('id', id).update({
            clienteId,
            localId,
            usuarioId,
            dataUltModif,
            ativo
        });           

        return response.status(204).send();
    },
}